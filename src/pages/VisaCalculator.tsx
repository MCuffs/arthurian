import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

export function VisaCalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  // Question State
  const [age, setAge] = useState<number | null>(null);
  const [education, setEducation] = useState<number | null>(null);
  const [topik, setTopik] = useState<number | null>(null);
  const [income, setIncome] = useState<number | null>(null);
  const [kiip, setKiip] = useState<number | null>(null);

  const calculateTotal = () => {
    return (age || 0) + (education || 0) + (topik || 0) + (income || 0) + (kiip || 0);
  };

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
    else setStep(7); // Result page
  };

  const renderProgress = () => (
    <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
      <div 
        className="bg-[#29AEE1] h-full transition-all duration-300" 
        style={{ width: `${(step / 6) * 100}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#112E51] font-sans">
      <Helmet>
        <title>F-2-7 Visa Point Calculator | Korea Immigration | Applied Korea</title>
        <meta name="description" content="Calculate your points for the Korean F-2-7 Resident Visa instantly. See if you qualify to live and work in South Korea long-term." />
        <link rel="canonical" href="https://www.arthrian.cloud/visa-calculator" />
      </Helmet>

      {/* Header */}
      <header className="border-b border-slate-100 bg-white sticky top-0 z-20">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-[#29AEE1] text-[20px]">APPLIED KOREA</Link>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="text-sm font-semibold text-slate-600 hover:text-[#112E51]">Blog</Link>
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-[#112E51]">Home</Link>
          </div>
        </div>
      </header>

      <main className="max-w-[700px] mx-auto px-6 py-12 md:py-20">
        
        {step === 1 && (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F7FA] text-[#00ACC1] mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight mb-4">F-2-7 Visa Calculator</h1>
            <p className="text-[#556987] text-[16px] md:text-[18px] leading-relaxed mb-10">
              The F-2-7 is the most sought-after resident visa for expats in Korea, granting long-term residency and ultimate freedom in employment. Find out if you meet the 80-point threshold.
            </p>
            <button 
              onClick={handleNext}
              className="w-full bg-[#29AEE1] hover:bg-[#1E95C5] text-white font-bold py-4 rounded-xl transition-colors text-[18px]"
            >
              Start Calculator
            </button>
          </div>
        )}

        {step > 1 && step < 7 && (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            {renderProgress()}
            
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[24px] font-extrabold mb-6">What is your current age?</h2>
                <div className="space-y-3">
                  {[
                    { label: '18 - 24 years old', val: 23 },
                    { label: '25 - 29 years old', val: 25 },
                    { label: '30 - 34 years old', val: 25 },
                    { label: '35 - 39 years old', val: 23 },
                    { label: '40 - 44 years old', val: 20 },
                    { label: '45 - 50 years old', val: 18 },
                    { label: '51+ years old', val: 15 },
                  ].map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => { setAge(opt.val); handleNext(); }}
                      className={`w-full text-left px-6 py-4 rounded-xl border ${age === opt.val ? 'border-[#29AEE1] bg-[#EEF7FF] text-[#1E6EA1]' : 'border-slate-200 hover:border-[#29AEE1]/50'} font-semibold transition-all`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[24px] font-extrabold mb-6">Highest Education Level Completed?</h2>
                <div className="space-y-3">
                  {[
                    { label: 'Ph.D. degree', val: 25 },
                    { label: 'Master\'s degree', val: 20 },
                    { label: 'Bachelor\'s degree', val: 15 },
                    { label: 'Associate degree (2-year)', val: 10 },
                    { label: 'High school or equivalent', val: 5 },
                  ].map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => { setEducation(opt.val); handleNext(); }}
                      className={`w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-[#29AEE1]/50 font-semibold transition-all`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[24px] font-extrabold mb-6">Korean Language Proficiency (TOPIK)</h2>
                <div className="space-y-3">
                  {[
                    { label: 'TOPIK Level 6', val: 20 },
                    { label: 'TOPIK Level 5', val: 18 },
                    { label: 'TOPIK Level 4', val: 16 },
                    { label: 'TOPIK Level 3', val: 14 },
                    { label: 'TOPIK Level 2', val: 12 },
                    { label: 'TOPIK Level 1 or None', val: 10 },
                  ].map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => { setTopik(opt.val); handleNext(); }}
                      className={`w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-[#29AEE1]/50 font-semibold transition-all`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[24px] font-extrabold mb-6">Annual Income (Before Tax)</h2>
                <p className="text-sm text-slate-500 mb-4">Based on GNI (Gross National Income) multipliers.</p>
                <div className="space-y-3">
                  {[
                    { label: 'Over 100M KRW', val: 60 },
                    { label: '70M - 100M KRW', val: 55 },
                    { label: '50M - 70M KRW', val: 50 },
                    { label: '40M - 50M KRW', val: 40 },
                    { label: '30M - 40M KRW', val: 30 },
                    { label: 'Under 30M KRW', val: 15 },
                  ].map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => { setIncome(opt.val); handleNext(); }}
                      className={`w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-[#29AEE1]/50 font-semibold transition-all`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[24px] font-extrabold mb-6">Have you completed the KIIP?</h2>
                <p className="text-sm text-slate-500 mb-4">Korea Immigration and Integration Program completion grants massive bonus points.</p>
                <div className="space-y-3">
                  {[
                    { label: 'Yes, Level 5 Completed', val: 10 },
                    { label: 'No, but tracking TOPIK', val: 0 },
                  ].map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => { setKiip(opt.val); handleNext(); }}
                      className={`w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-[#29AEE1]/50 font-semibold transition-all`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <button onClick={() => setStep(step - 1)} className="mt-8 text-sm font-semibold text-slate-400 hover:text-slate-600">
              ← Go Back
            </button>
          </div>
        )}

        {step === 7 && (
          <div className="animate-in zoom-in duration-500">
            <div className="bg-white p-8 md:p-12 rounded-t-3xl border-x border-t border-slate-200 text-center">
              <p className="text-[14px] font-bold text-slate-500 uppercase tracking-widest mb-4">Your F-2-7 Score Is</p>
              <div className="text-[72px] font-black text-[#112E51] leading-none mb-2">{calculateTotal()} <span className="text-[24px] text-slate-400 font-bold">/ 170</span></div>
              
              {calculateTotal() >= 80 ? (
                <div className="inline-flex items-center gap-2 text-[#059669] bg-[#D1FAE5] px-4 py-2 rounded-full font-bold mt-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Eligible for F-2-7 Visa!
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-[#DC2626] bg-[#FEE2E2] px-4 py-2 rounded-full font-bold mt-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  Under 80 Points Goal
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-[#29AEE1] to-[#1E6EA1] p-8 md:p-12 rounded-b-3xl text-white text-center shadow-xl">
              <h3 className="text-[28px] font-extrabold mb-4 mt-2">
                {calculateTotal() >= 80 
                  ? "You have the points. Now get the job." 
                  : "Need a better job to boost your points?"}
              </h3>
              <p className="text-[#E0F7FA] text-[16px] leading-relaxed mb-8 max-w-md mx-auto">
                {calculateTotal() >= 80 
                  ? "Your qualifications are perfect. Don't let a poorly formatted resume ruin your chances. Convert your English CV to the Korean HR standard in seconds."
                  : "Increasing your income is the fastest way to get the F-2-7. Upgrade your resume to the Korean standard and land a higher-paying corporate job."}
              </p>
              
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-white text-[#1E6EA1] hover:bg-[#F0FAFF] font-bold py-5 rounded-2xl transition-colors text-[20px] shadow-lg flex items-center justify-center gap-3"
              >
                Build My Korean Resume
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p className="mt-6 text-sm text-[#8BDDFB] opacity-80">
                * Note: This is an estimation based on general criteria. Official results may vary during immigration review.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <button onClick={() => {setStep(1); setAge(null); setEducation(null); setIncome(null); setTopik(null); setKiip(null);}} className="text-sm font-semibold text-slate-500 hover:text-slate-800 underline">
                Recalculate Score
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
