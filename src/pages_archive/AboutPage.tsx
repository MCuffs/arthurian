import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Sparkles, MessageCircle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <div ref={containerRef} className="bg-white min-h-screen overflow-hidden">
            <SEO
                title="About"
                description="아서왕 전설에서 시작된 이야기. 텍스트의 마법으로 브랜드와 크리에이터를 연결합니다."
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
                {/* Background Elements */}
                <motion.div
                    className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"
                    style={{ y: y1 }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"
                    style={{ y: y2 }}
                />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-px h-24 bg-neutral-200 mx-auto mb-12 origin-top"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-neutral-400 font-light tracking-wide mb-8"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Once upon a time...
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mb-8"
                        >
                            <span
                                className="block text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                The Legend
                            </span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-neutral-300 tracking-tight mt-2">
                                of
                            </span>
                            <span
                                className="block text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-900 to-neutral-800"
                            >
                                Applied Korea
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-xl md:text-2xl text-neutral-500 font-light max-w-2xl mx-auto"
                        >
                            텍스트의 마법으로<br className="md:hidden" /> 새로운 시대를 열다
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 bg-neutral-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Story Section - 밝은 배경 버전 */}
            <section className="py-32 px-6 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium mb-8">
                                Origin Story
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-neutral-900">
                                왜{' '}
                                <span
                                    className="italic text-blue-600"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Applied Korea
                                </span>
                                <span className="text-neutral-400">인가?</span>
                            </h2>

                            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                                <p>
                                    아서왕 전설에서 가장 강력한 힘은
                                    <span className="text-neutral-900 font-medium"> 엑스칼리버가 아니었습니다.</span>
                                </p>
                                <p>
                                    진정한 힘은 <span className="text-neutral-900 font-medium">멀린의 지혜</span>였고,
                                    그 지혜는 언제나 <span className="text-blue-600 font-medium">'말'과 '글'</span>로 전해졌습니다.
                                </p>
                                <p>
                                    화려한 영상과 자극적인 콘텐츠가 범람하는 시대,<br />
                                    우리는 다시 <span className="text-neutral-900 font-medium">텍스트의 본질적인 힘</span>을 믿습니다.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square max-w-md mx-auto relative">
                                {/* Decorative rings */}
                                <div className="absolute inset-0 border border-neutral-200 rounded-full" />
                                <div className="absolute inset-4 border border-neutral-100 rounded-full" />
                                <div className="absolute inset-8 border border-neutral-50 rounded-full" />

                                {/* Background glow */}
                                <div className="absolute inset-12 bg-gradient-to-br from-blue-50 to-amber-50 rounded-full blur-2xl opacity-60" />

                                {/* Quote */}
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <blockquote className="text-center relative z-10">
                                        <p
                                            className="text-2xl md:text-3xl italic text-neutral-700 leading-relaxed"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            "The pen is mightier<br />than the sword."
                                        </p>
                                        <footer className="mt-6 text-sm text-neutral-400">
                                            — Edward Bulwer-Lytton
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mascot Section */}
            <section className="py-32 px-6 bg-white relative">
                {/* Subtle divider */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-neutral-200" />

                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            Meet Our Mascot
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            안녕, 나는{' '}
                            <span
                                className="text-blue-600"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                멀린
                            </span>
                            이야!
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Merlin Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            style={{ rotate }}
                            className="relative"
                        >
                            <div className="relative max-w-sm mx-auto">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-amber-200 rounded-3xl blur-3xl opacity-30 scale-110" />

                                {/* Image Container */}
                                <div className="relative bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 border border-neutral-100">
                                    <img
                                        src="/character/merlin.png"
                                        alt="멀린 - 아서리안 마스코트"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                    >
                                        ✨ 마법사
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [5, -5, 5] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                                        className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                    >
                                        📜 스토리텔러
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Merlin Description */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    아서왕의 현명한 조언자,<br />
                                    <span className="text-blue-600">이제는 당신의 마케팅 파트너</span>
                                </h3>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    전설 속 멀린이 아서왕에게 지혜를 전했듯이,
                                    우리의 멀린은 브랜드와 크리에이터에게
                                    <span className="font-medium text-neutral-900"> 텍스트의 마법</span>을 전합니다.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    {
                                        icon: "📜",
                                        title: "스토리의 힘을 믿어요",
                                        desc: "화려한 영상보다 진정성 있는 한 줄이 더 강력해요"
                                    },
                                    {
                                        icon: "🔮",
                                        title: "데이터로 예측해요",
                                        desc: "마법처럼 보이지만 사실 철저한 분석이에요"
                                    },
                                    {
                                        icon: "⭐",
                                        title: "성장을 함께해요",
                                        desc: "크리에이터와 브랜드 모두의 성공을 응원해요"
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.3 }}
                                        className="flex items-start gap-4 p-4 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors"
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{item.title}</h4>
                                            <p className="text-sm text-neutral-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6 bg-neutral-50 relative">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            우리가 스레드에서<br />
                            <span className="text-neutral-400">이루고자 하는 것</span>
                        </h2>
                        <p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto">
                            텍스트의 본질적인 힘을 믿고, 진정성 있는 연결을 만듭니다
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageCircle,
                                number: "01",
                                title: "진정성 있는\n소통",
                                desc: "자극적인 콘텐츠가 아닌, 진심이 담긴 텍스트로 소비자와 깊은 유대감을 형성합니다.",
                                color: "blue"
                            },
                            {
                                icon: Target,
                                title: "측정 가능한\n성과",
                                number: "02",
                                desc: "감이 아닌 데이터로 의사결정하고, 투명하게 성과를 공유합니다.",
                                color: "amber"
                            },
                            {
                                icon: Sparkles,
                                number: "03",
                                title: "지속 가능한\n성장",
                                desc: "일회성 바이럴이 아닌, 브랜드와 크리에이터 모두의 장기적 성장을 추구합니다.",
                                color: "emerald"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 hover:border-neutral-200 hover:shadow-xl transition-all"
                            >
                                <span className="text-7xl font-bold text-neutral-100 absolute top-4 right-4 group-hover:text-neutral-200 transition-colors">
                                    {item.number}
                                </span>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    item.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                                        'bg-emerald-100 text-emerald-600'
                                    }`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4 whitespace-pre-line">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - 부드러운 그라데이션 */}
            <section className="py-32 px-6 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-900 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 30% 70%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 70% 70%, #8b5cf6 0%, transparent 50%)"
                    }}
                />

                <div className="max-w-[800px] mx-auto text-center relative z-10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className="text-4xl md:text-6xl font-bold mb-8 text-white"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Ready to write<br />
                            <span className="text-neutral-400">your legend?</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12 font-light">
                            멀린과 함께 당신만의 이야기를 시작하세요
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/apply/creator')}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors"
                            >
                                스친이 신청하기
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/apply/brand')}
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border border-neutral-600 hover:border-neutral-400 transition-colors"
                            >
                                브랜드 문의하기
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
