import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, Loader2, Mail, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Analytics } from '../utils/analytics';

export function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'General',
        subject: '',
        message: ''
    });

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVlUlKAfA28JtpURhUByby2jWQ-wcVTic0RJHKOobAEa0aG7U6eCnjBVNC1h0J09WO/exec';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    formType: 'GeneralContact',
                    timestamp: new Date().toISOString()
                })
            });

            toast.success('메시지가 성공적으로 전송되었습니다.');

            Analytics.track(Analytics.Events.CONTACT_FORM_SUBMIT, {
                category: formData.category,
                subject_length: formData.subject.length,
                message_length: formData.message.length
            });

            setFormData({ name: '', email: '', category: 'General', subject: '', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO title="Contact" description="Get in touch with Applied Korea Studio for creator partnerships and brand collaborations." />

            <section className="pt-48 pb-24 px-6 md:px-12 bg-neutral-900 text-white min-h-[50vh] flex flex-col justify-center">
                <div className="max-w-[1200px] mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                    >
                        Let's Talk.
                    </motion.h1>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
                        궁금한 점이 있으신가요?<br />
                        아서리안 팀은 언제나 여러분의 연락을 기다립니다.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                        <div className="space-y-10">
                            <div className="flex items-start gap-5">
                                <div className="p-3 bg-neutral-100 rounded-full shrink-0">
                                    <Mail size={24} className="text-neutral-900" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-sm text-neutral-500 mb-2">비즈니스 제휴 및 일반 문의</p>
                                    <a href="mailto:alstnwjd0424@gmail.com" className="text-lg font-medium text-neutral-900 hover:underline underline-offset-4 transition-all">
                                        alstnwjd0424@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="p-3 bg-neutral-100 rounded-full shrink-0">
                                    <Clock size={24} className="text-neutral-900" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                                    <p className="text-sm text-neutral-500 mb-2">운영 시간 (주말 및 공휴일 휴무)</p>
                                    <p className="text-lg font-medium text-neutral-900">
                                        Mon - Fri<br />
                                        10:00 AM - 07:00 PM (KST)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-8 bg-[#FAE100]/10 rounded-3xl border border-[#FAE100]/20">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageCircle className="text-[#371D1E]" />
                                <h3 className="font-bold text-lg text-[#371D1E]">Live Chat Support</h3>
                            </div>
                            <p className="text-neutral-600 mb-8 text-sm leading-relaxed">
                                더 빠른 답변이 필요하신가요?<br />
                                카카오톡 채널을 통해 실시간으로 상담을 받으실 수 있습니다.
                            </p>
                            <a
                                href="https://open.kakao.com/o/s6pETmdi"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#FAE100] text-[#371D1E] rounded-xl font-bold text-sm hover:shadow-lg transition-all"
                                onClick={() => Analytics.track(Analytics.Events.EXTERNAL_LINK_CLICK, { link_name: 'kakao_channel', location: 'contact_page' })}
                            >
                                카카오톡 문의하기
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-100/50">
                        <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Inquiry Type</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors appearance-none"
                                    >
                                        <option value="General">일반 문의</option>
                                        <option value="Creator">크리에이터 지원 관련</option>
                                        <option value="Brand">브랜드 제휴 관련</option>
                                        <option value="Other">기타</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                                    placeholder="문의 제목을 입력해주세요"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    rows={6}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors resize-none"
                                    placeholder="문의 내용을 상세히 적어주세요."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? '전송 중...' : '메시지 보내기'}</span>
                                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
