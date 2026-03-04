import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import { Analytics } from '../utils/analytics';
import { Container } from './Container';

export function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative w-full overflow-hidden bg-white pt-44 pb-24 border-b border-neutral-100">
            {/* Atmosphere */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-neutral-200/50 blur-3xl" />
                <div className="absolute -bottom-40 left-10 h-[520px] w-[520px] rounded-full bg-neutral-100 blur-3xl opacity-80 animate-float" />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/60" />
            </div>

            <Container className="relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
                    {/* Left Column: Brand & Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        {/* Badge */}
                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-semibold tracking-wide uppercase text-neutral-600">
                                Korea's #1 Threads Platform
                            </span>
                        </div>

                        {/* Title with Gradient Effect */}
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-[0.9]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-800">
                                Applied Korea.
                            </span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight block mb-10">
                            The Power of <span className="text-neutral-400">Text.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    Analytics.track(Analytics.Events.HERO_CTA_CLICK, { type: 'creator' });
                                    navigate('/apply/creator');
                                }}
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold text-base hover:bg-neutral-800 transition-colors"
                            >
                                <Users size={18} />
                                스친이 신청하기
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    Analytics.track(Analytics.Events.HERO_CTA_CLICK, { type: 'brand' });
                                    navigate('/apply/brand');
                                }}
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold text-base border-2 border-neutral-200 hover:border-neutral-900 transition-colors"
                            >
                                <Building2 size={18} />
                                브랜드 문의하기
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                        {/* Mobile Description */}
                        <div className="mt-10 lg:hidden">
                            <p className="max-w-xl text-base md:text-lg leading-relaxed text-neutral-500 font-normal">
                                화려한 영상에 지친 시대 사람들은 다시 '텍스트'를 읽기 시작했습니다.
                                <br />
                                <br />
                                진정성 있는 글 한줄이 1분짜리 숏폼보다 강력한 구매전환을 만듭니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="hidden lg:flex flex-col items-center text-center pb-2"
                    >
                        <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-500 font-normal">
                            화려한 영상에 지친 시대<br />
                            사람들은 다시 '텍스트'를 읽기 시작했습니다<br />
                            <br />
                            진정성 있는 글 한줄이 1분짜리 숏폼보다<br />
                            강력한 구매전환을 만듭니다
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
