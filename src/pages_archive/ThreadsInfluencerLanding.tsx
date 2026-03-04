import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Zap, TrendingUp, CheckCircle2, Users, FileText, Send, PieChart } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';

export function ThreadsInfluencerLanding() {
    const THREADS_FAQS = [
        {
            question: "인스타그램이나 트위터(X) 마케팅과 무엇이 다른가요?",
            answer: "스레드는 '텍스트 중심'의 소통이 활발하여, 단순 이미지 노출보다 훨씬 깊이 있는 정보 전달과 진정성 있는 설득이 가능합니다. 특히 구매 전 꼼꼼히 정보를 탐색하는 고관여 제품군에 효과적입니다."
        },
        {
            question: "팔로워가 많은 크리에이터만 섭외하나요?",
            answer: "아닙니다. 스레드 알고리즘은 팔로워 수보다 '소통 지수'를 중요하게 여깁니다. 아서리안은 실제 도달률(Reach)과 댓글 반응률이 높은 '진성 인플루언서'를 데이터 기반으로 선정합니다."
        },
        {
            question: "원고 작성도 대행해주시나요?",
            answer: "네, 전문 카피라이터가 브랜드 가이드라인을 바탕으로 스레드 감성에 맞는 '읽히는 원고'를 직접 기획 및 작성해 드립니다."
        },
        {
            question: "캠페인 진행 기간은 어느 정도 소요되나요?",
            answer: "일반적으로 기획 및 섭외 1주, 원고 제작 1주, 업로드 및 모니터링 1주로 총 3주~4주 정도 소요됩니다."
        }
    ];

    return (
        <div className="bg-neutral-900 text-white min-h-screen">
            <SEO
                title="Threads Influencer Marketing"
                description="Leverage the power of text-based influence on Threads."
                keywords={['스레드 마케팅 대행', '텍스트 인플루언서', '진정성 마케팅', '스레드 관리', 'SNS 대행사']}
            />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">Applied Korea Service</span>
                            <div className="h-px bg-neutral-800 w-20"></div>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight mb-8 leading-none">
                            Threads<br />Influencer.
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-12">
                            텍스트로 설득하고, 팬덤으로 증명합니다.<br />
                            가장 진정성 있는 리뷰와 소통으로 브랜드의 가치를 전달하세요.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <NavLink to="/apply/brand" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                                Start Campaign
                            </NavLink>
                            <NavLink to="/creators" className="px-8 py-4 border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
                                Find Creators
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-neutral-800 rounded-full blur-[120px] opacity-20 pointer-events-none" />
            </section>

            {/* Market Opportunity Section */}
            <section className="py-24 bg-black border-b border-neutral-800">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Threads?</h2>
                            <p className="text-xl text-neutral-400 leading-relaxed font-light mb-8">
                                스레드는 출시 5일 만에 1억 명의 가입자를 돌파하며 역사상 가장 빠르게 성장한 소셜 플랫폼입니다.
                                이미 <span className="text-white font-bold">월간 활성 사용자(MAU) 1억 3천만 명</span>을 넘어섰으며,
                                텍스트 중심의 깊이 있는 소통이 가능한 유일한 메인스트림 채널입니다.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">130M+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest">Monthly Users</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">High</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest">Engagement Rate</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 relative overflow-hidden">
                            <Users className="w-16 h-16 text-neutral-700 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">The Power of "Reading"</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                이미지나 영상보다 텍스트는 정보 전달력이 월등히 높습니다.
                                Threads 유저들은 콘텐츠를 '읽을' 준비가 되어 있으며,
                                이는 브랜드 메시지를 정확하게 전달할 수 있는 최고의 환경을 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-neutral-900">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Process</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Strategy",
                                icon: <Zap className="mb-6 text-neutral-500" size={32} />,
                                desc: "브랜드 톤앤매너에 맞는 스레드(Threads) 화법과 밈(Meme)을 분석하여 최적의 콘텐츠 전략을 수립합니다."
                            },
                            {
                                step: "02",
                                title: "Drafting",
                                icon: <FileText className="mb-6 text-neutral-500" size={32} />,
                                desc: "단순 광고가 아닌, 유저들의 공감을 이끌어낼 수 있는 스토리텔링형 원고를 기획하고 감수합니다."
                            },
                            {
                                step: "03",
                                title: "Posting",
                                icon: <Send className="mb-6 text-blue-500" size={32} />,
                                desc: "가장 반응이 좋은 골든 타임에 맞춰 콘텐츠를 업로드하고, 초기 댓글 대응을 통해 확산을 유도합니다."
                            },
                            {
                                step: "04",
                                title: "Reporting",
                                icon: <PieChart className="mb-6 text-neutral-500" size={32} />,
                                desc: "도달수, 좋아요, 리포스트, 인용 등 정량적 지표와 함께 유저들의 실제 반응(댓글)을 분석하여 제공합니다."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-black/50 p-8 rounded-2xl border border-neutral-800 relative group hover:bg-black transition-colors">
                                <div className="absolute top-8 right-8 text-4xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors">{item.step}</div>
                                {item.icon}
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ items={THREADS_FAQS} dark={true} />

            {/* Contact Section */}
            <div className="bg-white text-black">
                <Contact />
            </div>
        </div>
    );
}
