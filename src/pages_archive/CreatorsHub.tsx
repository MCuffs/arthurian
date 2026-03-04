import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';

// Mock Data (Threads Only) - restored
const MOCK_CREATORS = [
    {
        id: 1,
        name: 'Applied Korea',
        handle: 'arthurian_studio',
        vertical: 'threads',
        category: 'Lifestyle',
        followers: '',
        sales: 'High',
        image: '/influencers/KakaoTalk_20260125_204145544.jpg',
        tags: ['Threads', 'Writing', 'Lifestyle']
    },
    {
        id: 2,
        name: '요아🎀',
        handle: '7.rosie_s',
        vertical: 'threads',
        category: 'Beauty',
        followers: '',
        sales: '',
        image: '/influencers/요아.jpg',
        tags: ['뷰티', '패션', '디저트', '여행', '푸드']
    },
    {
        id: 3,
        name: 'x_ox_o__z',
        handle: 'x_ox_o__z',
        vertical: 'threads',
        category: 'Lifestyle',
        followers: '',
        sales: '',
        image: '/influencers/x_ox_o__z.png',
        tags: ['파워 블로거', '식품', '라이프스타일']
    }
];

export function CreatorsHub() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCreators = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return MOCK_CREATORS;
        return MOCK_CREATORS.filter((c) => {
            const name = (c.name || '').toLowerCase();
            const handle = (c.handle || '').toLowerCase();
            const tags = c.tags.join(' ').toLowerCase();
            return name.includes(q) || handle.includes(q) || tags.includes(q);
        });
    }, [searchQuery]);

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <SEO
                title="Partner Directory"
                description="Discover top-tier Threads partners."
                keywords={['인플루언서 리스트', '크리에이터 목록', '스레드 인플루언서 찾기', '스친이 현황']}
            />
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Partner Directory
                    </h1>
                    <p className="text-neutral-500 font-light max-w-2xl mx-auto text-lg">
                        아서리안이 검증한 상위 1% 스레드 스친이를 만나보세요.<br />
                        텍스트 기반의 강력한 팬덤을 보유한 인플루언서들입니다.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 bg-white/80 backdrop-blur-md p-4 rounded-2xl z-20 border border-neutral-100 shadow-sm">
                    {/* Filters */}
                    <div className="flex gap-4 w-full md:w-auto mx-auto">
                        <div className="relative flex-1 md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search partners..."
                                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {/* List Layout (Threads Style) */}
                {filteredCreators.length > 0 ? (
                    <div className="max-w-2xl mx-auto space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredCreators.map(creator => (
                                <motion.div
                                    layout
                                    key={creator.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group"
                                >
                                    <NavLink
                                        to={`/creators/${creator.id}`}
                                        className="flex items-center gap-4 p-5 bg-white border border-neutral-100 rounded-2xl hover:border-neutral-300 hover:shadow-md transition-all duration-300"
                                    >
                                        {/* Avatar */}
                                        <div className="relative shrink-0">
                                            <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200">
                                                {creator.image ? (
                                                    <img
                                                        src={creator.image}
                                                        alt={creator.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-neutral-200 text-neutral-400 font-bold text-xs">
                                                        IMG
                                                    </div>
                                                )}
                                            </div>
                                            {/* Threads Icon Badge (Optional, mimics story ring or status) */}
                                            <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full border-2 border-white">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1 mb-0.5">
                                                <h3 className="text-base font-bold text-neutral-900 truncate leading-none">{creator.name}</h3>
                                                <svg className="text-blue-500 w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-neutral-500 font-medium">@{creator.handle}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-medium text-neutral-600">
                                                    {creator.category}
                                                </span>
                                                {creator.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[10px] text-neutral-400">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div className="text-right shrink-0 pl-4 border-l border-neutral-100">
                                            <span className="block text-lg font-bold text-neutral-900 leading-none tabular-nums">
                                                {creator.followers}
                                            </span>
                                            <span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium">Followers</span>
                                            <div className="mt-2 flex justify-end">
                                                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors">
                                                    <ArrowUpRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-24 bg-neutral-50 rounded-3xl border border-dashed border-neutral-200">
                        <p className="text-lg text-neutral-500 mb-2">
                            No partners found matching your criteria.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); }}
                            className="text-neutral-900 underline underline-offset-4 hover:text-red-600"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
