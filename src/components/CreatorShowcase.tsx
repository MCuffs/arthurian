import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Sparkles } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Analytics } from '../utils/analytics';
import { Container } from './Container';

/* Partner Data */
const THREADS_CREATORS = [
    {
        id: 'threads-0',
        name: 'Applied Korea',
        handle: 'arthurian_studio',
        image: '/influencers/KakaoTalk_20260125_204145544.jpg',
        followers: '',
        isActive: true
    },
    {
        id: 'threads-1',
        name: '요아🎀',
        handle: '7.rosie_s',
        image: '/influencers/요아.jpg',
        followers: '',
        isActive: true
    },
    {
        id: 'threads-2',
        name: 'x_ox_o__z',
        handle: 'x_ox_o__z',
        image: '/influencers/x_ox_o__z.png',
        followers: '',
        isActive: true
    }
];

export function CreatorShowcase() {
    const navigate = useNavigate();

    return (
        <section className="bg-white border-b border-neutral-100">
            <Container className="py-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-neutral-900 tracking-tight"
                >
                    Featured Partners
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Partner Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="px-3 py-1 bg-neutral-900 text-white text-xs font-bold rounded-full">Threads</span>
                            <span className="text-sm text-neutral-500">Top Performing Partners</span>
                        </div>

                        {/* List Content */}
                        <div className="flex flex-col space-y-3">
                            {THREADS_CREATORS.map((creator, index) => (
                                <motion.div
                                    key={creator.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavLink
                                        to={`/creators/${creator.id === 'threads-0' ? '1' : creator.id === 'threads-1' ? '2' : '3'}`}
                                        onClick={() => {
                                            Analytics.track(Analytics.Events.SHOWCASE_CARD_CLICK, {
                                                creator_id: creator.id,
                                                creator_name: creator.name
                                            });
                                        }}
                                        className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 bg-white border-neutral-100 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        {/* Avatar */}
                                        <div className="relative shrink-0">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200">
                                                <img
                                                    src={creator.image}
                                                    alt={creator.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1">
                                                <h3 className="text-sm font-bold truncate leading-none text-neutral-900">
                                                    {creator.name}
                                                </h3>
                                                <svg className="text-blue-500 w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            </div>
                                            <p className="text-xs text-neutral-400 font-medium mt-0.5">@{creator.handle}</p>
                                        </div>

                                        {/* Arrow */}
                                        <div className="text-right shrink-0">
                                            <ArrowRight size={16} className="text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                                        </div>
                                    </NavLink>
                                </motion.div>
                            ))}

                            {/* Coming Soon Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100 border border-dashed border-neutral-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                                    <Sparkles size={20} className="text-neutral-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-neutral-700">더 많은 스친이가 곧 합류합니다</h3>
                                    <p className="text-xs text-neutral-500 mt-0.5">새로운 크리에이터들을 기대해주세요!</p>
                                </div>
                            </motion.div>

                            <div className="pt-2 pl-1">
                                <NavLink
                                    to="/creators"
                                    onClick={() => Analytics.track(Analytics.Events.NAV_CLICK, { location: 'showcase_view_all' })}
                                    className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-300 transition-colors"
                                >
                                    View All Partners <ArrowRight size={14} className="ml-2" />
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Interest Keyword Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-neutral-50 rounded-3xl p-8 md:p-12 sticky top-24 border border-neutral-100 h-full flex flex-col justify-center"
                    >
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-neutral-900">What are you looking for?</h3>
                            <p className="text-neutral-500 font-light">
                                당신의 비즈니스에 필요한 핵심 인사이트와 솔루션을 찾아보세요.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { icon: TrendingUp, title: "스레드 마케팅 효율", subtitle: "Threads Marketing Efficiency", path: "/threads" },
                                { icon: Users, title: "스친이 신청", subtitle: "Creator Partnership", path: "/apply/creator" },
                                { icon: DollarSign, title: "브랜드 제휴 문의", subtitle: "Brand Partnership", path: "/apply/brand" }
                            ].map((item, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => {
                                        Analytics.track(Analytics.Events.NAV_CLICK, { title: item.title, path: item.path });
                                        navigate(item.path);
                                    }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-neutral-200 hover:border-black hover:shadow-xl transition-all group text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-neutral-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{item.title}</h4>
                                            <p className="text-sm text-neutral-500 mt-1">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-neutral-300 group-hover:text-black transition-colors" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
