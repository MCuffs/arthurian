import { useParams, NavLink } from 'react-router-dom';
import { Star, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function CreatorProfilePage() {
    const { id } = useParams();

    // Restored mock profile data (no Threads API dependency)
    const jamie = {
        name: 'Jamie Lee',
        handle: '@jamie.writes',
        platform: 'Threads',
        image: '',
        category: 'Lifestyle',
        followers: '85K',
        avgViewers: 'N/A',
        conversionRate: 'High',
        tags: ['Writing', 'Daily'],
        about: '일상의 소소한 순간을 글로 풀어내는 에세이스트형 크리에이터입니다. 깊이 있는 텍스트로 높은 공감을 이끌어냅니다.',
        portfolio: [
            { brand: 'Book Company A', result: '300 Books Sold' },
            { brand: 'Cafe B', result: 'Viral Post (5K Likes)' }
        ]
    };

    const arthur = {
        name: '아서',
        handle: '@arthur_threads',
        platform: 'Threads',
        image: '/influencers/KakaoTalk_20260125_204145544.jpg',
        category: 'Tech / Insight',
        followers: '120K+',
        avgViewers: 'N/A',
        conversionRate: '8.2%',
        tags: ['Tech', 'Startup', 'Insight'],
        about: '스레드 초창기부터 활동하며 테크/스타트업 씬에서 독보적인 영향력을 구축했습니다. 논리 정연한 텍스트로 신뢰를 얻고 있습니다.',
        portfolio: [
            { brand: 'SaaS Platform', result: 'Sign-ups +200%' },
            { brand: 'Tech Gear', result: 'Sold out via Link' },
            { brand: 'Service Launch', result: '1M Reach' }
        ]
    };

    const yoa = {
        name: '요아🎀',
        handle: '@7.rosie_s',
        platform: 'Threads',
        image: '/influencers/요아.jpg',
        category: 'Lifestyle / Fashion',
        followers: '',
        avgViewers: 'N/A',
        conversionRate: 'N/A',
        tags: ['뷰티', '패션', '디저트', '여행', '푸드'],
        about: '일상 속 감각적인 순간을 공유하는 라이프스타일 크리에이터입니다. 뷰티, 패션부터 맛집과 여행까지 다채로운 콘텐츠로 높은 공감을 이끌어냅니다.',
        portfolio: []
    };

    const x_ox_o__z = {
        name: 'x_ox_o__z',
        handle: '@x_ox_o__z',
        platform: 'Threads',
        image: '/influencers/x_ox_o__z.png',
        category: 'Food / Lifestyle',
        followers: '',
        avgViewers: 'N/A',
        conversionRate: 'N/A',
        tags: ['파워 블로거', '식품', '라이프스타일'],
        about: '솔직하고 맛있는 리뷰로 신뢰받는 푸드 & 라이프스타일 크리에이터입니다.',
        portfolio: []
    };

    const creator = id === '1' ? arthur : id === '2' ? yoa : id === '3' ? x_ox_o__z : jamie;

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <SEO title={`${creator.name} - Creator Profile`} description={`Collaborate with ${creator.name} on Applied Korea.`} />
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-12 mb-16">
                    <div className="md:w-1/3">
                        <div className="aspect-[3/4] bg-neutral-100 rounded-2xl relative overflow-hidden shadow-lg">
                            {creator.image ? (
                                <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">Profile Image</div>
                            )}
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded-sm">Threads</span>
                            <span className="text-neutral-500 text-sm font-medium">Connected Creator</span>
                            <div className="flex ml-auto text-yellow-500">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">{creator.name}</h1>
                        <p className="text-xl text-neutral-400 font-light mb-8">{creator.handle}</p>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 border-y border-neutral-100 py-8">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold mb-1">{creator.followers}</div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide">Followers</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold mb-1">{creator.avgViewers}</div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide">Avg. Viewers</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold mb-1 text-red-600">{creator.conversionRate}</div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide">Conv. Rate</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {creator.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600 border border-neutral-200">#{tag}</span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <NavLink to="/apply/brand" className="flex-1 md:flex-none px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors text-center">
                                Request Collaboration
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-200 pt-16">
                    <h2 className="text-2xl font-bold mb-8">About & Performance</h2>
                    <p className="text-neutral-600 leading-relaxed max-w-2xl mb-12 font-light text-lg">{creator.about}</p>

                    <h3 className="text-lg font-bold mb-6">Campaign History</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {creator.portfolio.map((item, i) => (
                            <div key={i} className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors">
                                <h4 className="font-bold mb-2 text-lg">{item.brand}</h4>
                                <div className="text-sm text-green-600 flex items-center gap-2 font-medium">
                                    <CheckCircle2 size={16} /> {item.result}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
