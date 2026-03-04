import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Building2, ArrowRight } from 'lucide-react';

export function BrandsHub() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <SEO
                title="Brand Partners"
                description="Join the leading brands growing with Applied Korea's creator network."
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 mb-6 border border-neutral-200 rounded-full text-xs font-bold tracking-widest text-neutral-500 uppercase"
                    >
                        Our Partners
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                    >
                        Trusted by<br />Industry Leaders.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-500 font-light leading-relaxed"
                    >
                        아서리안은 국내외 최고의 브랜드들과 함께<br />
                        새로운 커머스 성공 사례를 만들어가고 있습니다.
                    </motion.p>
                </div>

                {/* Single Partner Product Section */}
                <section className="mb-32 text-center">
                    <h2 className="text-2xl font-bold mb-12">Strategic Partners</h2>
                    <NavLink to="/brands/1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-8 bg-neutral-50 rounded-3xl border border-neutral-100 max-w-2xl mx-auto hover:bg-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all cursor-pointer"
                        >
                            <div className="w-full max-w-lg mb-8 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                    src="/brands/hu100_product.png"
                                    alt="후백 명절 선물 세트"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">후백 (HU100)</h3>
                            <p className="text-lg text-neutral-500 font-medium">명절 선물 세트</p>
                            <div className="mt-6 px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium">
                                View Campaign
                            </div>
                        </motion.div>
                    </NavLink>
                </section>

                {/* CTA Section */}
                <section className="bg-black text-white rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Building2 className="w-12 h-12 mx-auto mb-8 text-neutral-500" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to join us?
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 font-light">
                            브랜드의 성장을 위한 최고의 파트너가 되어드리겠습니다.<br />
                            지금 바로 아서리안의 200만+ 트래픽과 만나보세요.
                        </p>
                        <NavLink
                            to="/apply/brand"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
                        >
                            <span>Become a Partner</span>
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px]" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-purple-600 rounded-full blur-[150px]" />
                    </div>
                </section>

            </div>
        </div>
    );
}
