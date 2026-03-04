import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';

function ProxyPayPalButtons({
    amountUsd,
    description,
    disabled,
    onApproved,
    onError,
}: {
    amountUsd: string;
    description: string;
    disabled: boolean;
    onApproved: (orderId: string) => void;
    onError: (message: string) => void;
}) {
    const [{ isPending, isRejected }] = usePayPalScriptReducer();

    if (isPending) {
        return <div className="w-full text-[13px] font-semibold text-[#556987]">Loading PayPal checkout...</div>;
    }

    if (isRejected) {
        return <div className="w-full text-[13px] font-semibold text-red-500">PayPal failed to load. Refresh and try again.</div>;
    }

    return (
        <PayPalButtons
            style={{ layout: 'vertical', shape: 'rect', color: 'blue', height: 50, tagline: false }}
            disabled={disabled}
            createOrder={(_data, actions) =>
                actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description,
                            amount: { currency_code: 'USD', value: amountUsd },
                        },
                    ],
                })
            }
            onApprove={async (data, actions) => {
                try {
                    if (!actions.order) throw new Error('Missing PayPal order action');
                    await actions.order.capture();
                    onApproved(data.orderID);
                } catch (error: any) {
                    onError(error?.message || 'Failed to capture PayPal payment');
                }
            }}
            onError={(error: any) => {
                onError(error?.message || 'PayPal payment failed');
            }}
        />
    );
}

function sanitizePayPalClientId(value: unknown): string {
    return String(value || '').replace(/\s+/g, '').trim();
}

export function ApplicationProxy() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', targetCompany: 'Proxy Service', brief: '', jobLink1: '', jobLink2: '', jobLink3: '' });
    const [englishResumeFile, setEnglishResumeFile] = useState<File | null>(null);
    const [step, setStep] = useState<'intake' | 'payment' | 'done'>('intake');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [paymentReference, setPaymentReference] = useState('');

    const PRICE_USD = '59.00';
    const paypalClientId = sanitizePayPalClientId(import.meta.env.VITE_PAYPAL_CLIENT_ID);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!englishResumeFile) {
            setErrorMsg('Please upload your English PDF resume.');
            return;
        }
        if (!formData.jobLink1.trim()) {
            setErrorMsg('Please provide at least one Target Job Link.');
            return;
        }

        setErrorMsg('');
        setStep('payment');
    };

    const handlePaymentComplete = async (paypalOrderId: string) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const requestData = new FormData();
            requestData.append('service', 'Full-Service Job Application Proxy');
            requestData.append('servicePrice', '₩69,000');
            requestData.append('name', formData.name);
            requestData.append('email', formData.email);
            requestData.append('targetCompany', formData.targetCompany);
            requestData.append('brief', formData.brief || 'Proxy Application Request');
            requestData.append('jobLink1', formData.jobLink1);
            requestData.append('jobLink2', formData.jobLink2);
            requestData.append('jobLink3', formData.jobLink3);
            requestData.append('paymentReference', paypalOrderId);
            
            // Appending the english resume twice to satisfy the backend's requirement for english and korean resume variables on generic consulting.
            // The proxy service currently only requires the english one for intake, the admin will generate the korean one.
            requestData.append('englishResume', englishResumeFile as File);
            requestData.append('koreanResume', englishResumeFile as File);

            const response = await fetch('/api/consulting-request', {
                method: 'POST',
                body: requestData
            });

            const raw = await response.text();
            let result: any = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch {
                result = null;
            }
            if (!response.ok || !result?.ok) {
                const fallbackRaw = raw && raw.length < 300 ? raw : '';
                throw new Error(result?.error || fallbackRaw || `Failed to submit paid request (HTTP ${response.status})`);
            }

            if (result?.requestId) {
                setPaymentReference(result.requestId);
            }
            setStep('done');
        } catch (error: any) {
            console.error("Submission failed", error);
            setErrorMsg(error?.message || "Failed to submit. Please contact support with your PayPal receipt.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FBFF] text-[#112E51] font-sans pb-24">
            <Helmet>
                <title>Done-For-You Application Proxy | Applied Korea</title>
                <meta name="description" content="Send us your English CV and job links. We bypass Korean ID verification, translate your resume, format it, create accounts, and apply for you." />
            </Helmet>

            {/* Header Hero */}
            <header className="bg-gradient-to-br from-[#041B3B] to-[#112E51] text-white pt-24 pb-20 px-6 border-b border-[#1E6EA1]/30">
                <div className="max-w-[900px] mx-auto text-center">
                    <div className="inline-block bg-[#29AEE1]/20 text-[#8BDDFB] font-bold px-4 py-1.5 rounded-full text-[13px] mb-6 uppercase tracking-wider backdrop-blur-sm border border-[#29AEE1]/30">
                        Stop fighting Korean Portals
                    </div>
                    <h1 className="text-[42px] md:text-[56px] font-extrabold tracking-tight mb-6 leading-[1.1]">
                        Done-For-You <br /><span className="text-[#29AEE1]">Application Proxy</span>
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        PASS verification blockers? Korean-only forms? <br className="hidden md:block"/> Send us your English CV and 3 job links. We translate it, create the local accounts, and apply <span className="text-white font-bold underline decoration-[#29AEE1] underline-offset-4">for you</span>.
                    </p>
                </div>
            </header>

            <main className="max-w-[800px] mx-auto px-6 -mt-10 relative z-10">
                
                {step === 'done' ? (
                     <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 text-center animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-[32px] font-extrabold text-[#112E51] mb-4">Application Registered</h2>
                        <p className="text-[18px] text-[#556987] font-medium leading-relaxed max-w-md mx-auto mb-8">
                            Your payment of $59.00 USD was highly successful. Our experts are now processing your proxy request.
                        </p>
                        
                        <div className="bg-[#f9fafb] border border-gray-100 p-6 rounded-2xl max-w-sm mx-auto mb-8 text-left">
                            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Receipt ID</p>
                            <p className="text-[16px] font-mono font-bold text-[#112E51]">{paymentReference || 'Order Confirmed'}</p>
                            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-4 mb-1">Target</p>
                            <p className="text-[14px] font-semibold text-[#112E51]">3 Selected Job Links</p>
                        </div>

                        <p className="text-[15px] font-medium text-[#112E51] mb-8 bg-[#EEF7FF] py-3 px-6 rounded-xl inline-block">
                            <span className="font-bold text-[#1E6EA1]">Next step:</span> Check your email within 48 hours for the completion report and screenshots.
                        </p>

                        <button onClick={() => navigate('/')} className="w-full md:w-auto bg-[#112E51] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0a1e36] transition-colors">
                            Return Home
                        </button>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        
                        {/* Progress Indicator */}
                        <div className="flex border-b border-gray-100">
                            <div className={`flex-1 text-center py-4 font-bold text-[13px] uppercase tracking-wider ${step === 'intake' ? 'bg-[#EEF7FF] text-[#1E6EA1] border-b-2 border-[#29AEE1]' : 'text-gray-400'}`}>
                                1. Requirements
                            </div>
                            <div className={`flex-1 text-center py-4 font-bold text-[13px] uppercase tracking-wider ${step === 'payment' ? 'bg-[#EEF7FF] text-[#1E6EA1] border-b-2 border-[#29AEE1]' : 'text-gray-400'}`}>
                                2. Secure Checkout
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {step === 'intake' && (
                                <form onSubmit={handleFormSubmit} className="space-y-6 animate-in fade-in duration-300">
                                    
                                    <div className="bg-[#f0f9ff] p-5 rounded-xl border border-[#bae6fd] mb-8">
                                        <h3 className="text-[15px] font-extrabold text-[#112E51] uppercase tracking-wide mb-1">Included in $59 USD</h3>
                                        <ul className="text-[14px] text-[#0284c7] font-medium space-y-1 mt-3">
                                            <li>• Full translation & formatting into Korean HR styling</li>
                                            <li>• Account generation on Korean portals (PASS bypass)</li>
                                            <li>• Manual 1-on-1 submissions with screenshot proof</li>
                                        </ul>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide">Legal Name</label>
                                            <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#29AEE1] focus:ring-2 focus:ring-[#29AEE1]/20 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide">Notification Email</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#29AEE1] focus:ring-2 focus:ring-[#29AEE1]/20 outline-none transition-all" placeholder="hello@appliedkorea.com" />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide">Upload English Resume (PDF)</label>
                                        <input type="file" accept=".pdf" required onChange={(e) => setEnglishResumeFile(e.target.files?.[0] || null)} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-[14px] file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-[#29AEE1] file:text-white file:font-semibold hover:file:bg-[#1E95C3] cursor-pointer" />
                                    </div>

                                    <div className="pt-2 border-t border-gray-100 mt-6">
                                        <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide mt-6">Target Job Link 1 (Required)</label>
                                        <input type="url" required value={formData.jobLink1} onChange={(e) => setFormData({...formData, jobLink1: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#29AEE1] outline-none" placeholder="https://www.saramin.co.kr/..." />
                                        
                                        <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide mt-4">Target Job Link 2 (Optional)</label>
                                        <input type="url" value={formData.jobLink2} onChange={(e) => setFormData({...formData, jobLink2: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#29AEE1] outline-none" placeholder="https://www.jobkorea.co.kr/..." />
                                        
                                        <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide mt-4">Target Job Link 3 (Optional)</label>
                                        <input type="url" value={formData.jobLink3} onChange={(e) => setFormData({...formData, jobLink3: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#29AEE1] outline-none" placeholder="Company career page URL" />
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-bold text-[#112E51] mb-2 uppercase tracking-wide mt-6">Special Instructions (Optional)</label>
                                        <textarea value={formData.brief} onChange={(e) => setFormData({...formData, brief: e.target.value})} className="w-full min-h-[80px] bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-[#29AEE1] outline-none" placeholder="Any specific details we should know..." />
                                    </div>

                                    {errorMsg && <p className="text-red-500 font-bold text-sm bg-red-50 p-3 rounded-lg">{errorMsg}</p>}

                                    <div className="pt-6">
                                        <button type="submit" className="w-full bg-[#29AEE1] hover:bg-[#1f9bc9] text-white font-extrabold text-[18px] py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                            Continue to Payment ($59.00)
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 'payment' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[14px] font-bold text-[#556987]">Service</span>
                                            <span className="text-[14px] font-extrabold text-[#112E51]">Application Proxy (3 Links)</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <span className="text-[14px] font-bold text-[#556987]">Applicant Email</span>
                                            <span className="text-[14px] font-extrabold text-[#112E51]">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 mt-1">
                                            <span className="text-[18px] font-bold text-[#112E51]">Total Payment</span>
                                            <span className="text-[28px] font-black text-[#29AEE1]">${PRICE_USD} <span className="text-[14px] text-[#556987] font-semibold">USD</span></span>
                                        </div>
                                    </div>

                                    {errorMsg && <p className="text-red-500 font-bold text-sm bg-red-50 p-3 rounded-lg">{errorMsg}</p>}

                                    <div className="min-h-[150px] relative">
                                        {loading && (
                                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-10 h-10 border-4 border-[#29AEE1] border-t-transparent rounded-full animate-spin mb-3"></div>
                                                    <p className="font-bold text-[#112E51]">Processing proxy request...</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="px-4">
                                            {paypalClientId ? (
                                                <PayPalScriptProvider options={{ clientId: paypalClientId, currency: 'USD', intent: 'capture' }}>
                                                    <ProxyPayPalButtons
                                                        amountUsd={PRICE_USD}
                                                        description="Applied Korea - Application Proxy Service"
                                                        disabled={loading}
                                                        onApproved={handlePaymentComplete}
                                                        onError={(msg) => setErrorMsg(msg)}
                                                    />
                                                </PayPalScriptProvider>
                                            ) : (
                                                <div className="text-red-500 font-semibold p-4 bg-red-50 rounded-xl text-center">PayPal Client ID is not configured on the server.</div>
                                            )}
                                        </div>
                                    </div>

                                    <button onClick={() => setStep('intake')} disabled={loading} className="w-full text-center text-[14px] font-bold text-gray-400 hover:text-[#112E51] transition-colors">
                                        ← Go back to edit details
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
