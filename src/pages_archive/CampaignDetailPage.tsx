import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, Package, Users, CheckCircle2, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

export function CampaignDetailPage() {
    const { id } = useParams();

    // Mock Data
    const hu100 = {
        title: '후백 프리미엄 호두 강정',
        brand: 'Hu100 (후백)',
        status: 'Recruiting',
        dday: 7,
        pay: '제품 제공 + 원고료 협의',
        product: '프리미엄 호두 강정 답례품 세트',
        recruitCount: '5 Creators',
        vertical: 'threads',
        description: `
      "건강하고 맛있는 프리미엄 간식"
      
      기름에 튀기지 않고 오븐에 구워 바삭하고 담백한 프리미엄 호두 강정입니다.
      너무 달지 않아 부모님 간식이나 아이들 영양 간식으로 인기 있는 제품입니다.
      
      고급스러운 패키지로 답례품이나 명절 선물로도 제격인 후백 호두 강정의 매력을 솔직하고 진정성 있게 전달해주실 크리에이터님을 찾습니다.
    `,
        targetAudience: [
            '결혼/돌잔치 등 답례품을 고민 중이신 분',
            '부모님께 드릴 건강하고 고급스러운 간식을 찾는 분',
            '너무 달지 않은 영양 간식을 선호하시는 분',
            '명절/감사 선물을 준비하시는 분'
        ],
        requirements: [
            '스레드 팔로워 1k 이상 보유',
            '제품의 바삭함과 고급스러움을 잘 표현해주실 분',
            '선물/답례품 추천 컨텐츠 제작 가능자',
            '댓글 소통이 활발하신 분'
        ],
        storeLink: 'https://smartstore.naver.com/hu100/products/8959294188'
    };

    // For now, default to Hu100 for ID 1 or demo
    const campaign = id === '1' ? hu100 : hu100; // Extend later for more campaigns

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <SEO
                title={`${campaign.title} - Campaign Detail`}
                description={`Apply for ${campaign.brand}'s campaign on Applied Korea.`}
            />

            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                {/* Back Button */}
                <NavLink to="/brands" className="inline-flex items-center text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Campaigns
                </NavLink>

                <div className="grid md:grid-cols-12 gap-12">
                    {/* Left: Main Content */}
                    <div className="md:col-span-8">
                        <div className="mb-6">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                {campaign.status}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 leading-tight">
                                {campaign.title}
                            </h1>
                            <p className="text-lg text-neutral-500 font-medium">by {campaign.brand}</p>
                        </div>

                        {/* Key Info Grid (Mobile specific, or desktop prominent) */}
                        <div className="grid grid-cols-2 gap-4 mb-12 bg-neutral-50 p-6 rounded-2xl">
                            <div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Recruitment Ends</div>
                                <div className="flex items-center font-medium text-neutral-900">
                                    <Clock size={16} className="mr-2 text-neutral-400" /> D-{campaign.dday}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Recruiting</div>
                                <div className="flex items-center font-medium text-neutral-900">
                                    <Users size={16} className="mr-2 text-neutral-400" /> {campaign.recruitCount}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Compensation</div>
                                <div className="flex items-center font-medium text-neutral-900">
                                    <DollarSign size={16} className="mr-2 text-neutral-400" /> {campaign.pay}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Product Provided</div>
                                <div className="flex items-center font-medium text-neutral-900">
                                    <Package size={16} className="mr-2 text-neutral-400" /> {campaign.product}
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-neutral max-w-none mb-12">
                            <h3 className="font-bold text-2xl mb-4">About Campaign</h3>
                            <p className="whitespace-pre-line text-neutral-600 font-light leading-relaxed mb-8">
                                {campaign.description}
                            </p>

                            <h3 className="font-bold text-2xl mb-4">Recommended For</h3>
                            <ul className="grid md:grid-cols-2 gap-3 mb-12">
                                {/* @ts-ignore - targetAudience exists in hu100 object */}
                                {campaign.targetAudience?.map((target, i) => (
                                    <li key={i} className="flex items-center text-neutral-600 bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-100">
                                        <CheckCircle2 size={16} className="mr-2 text-green-600 shrink-0" />
                                        <span className="text-sm">{target}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-bold text-2xl mb-4">Requirements</h3>
                            <ul className="space-y-3 list-none pl-0">
                                {campaign.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start text-neutral-600 font-light">
                                        <CheckCircle2 size={18} className="mr-3 text-neutral-900 mt-1 shrink-0" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Sticky Sidebar */}
                    <div className="md:col-span-4">
                        <div className="sticky top-32 bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-2xl mb-2">Campaign Info</h3>
                            <p className="text-sm text-neutral-500 mb-8 font-light">
                                마감일 전에 지원하세요. 선착순으로 조기 마감될 수 있습니다.
                            </p>

                            <div className="space-y-3">
                                <button className="w-full py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg">
                                    Apply Now
                                </button>

                                {/* @ts-ignore */}
                                {campaign.storeLink && (
                                    <a
                                        href={campaign.storeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-colors"
                                    >
                                        Visit Store
                                        <ArrowUpRight size={16} className="ml-2" />
                                    </a>
                                )}
                            </div>

                            <p className="text-xs text-neutral-400 text-center mt-4">
                                * 지원 후 24시간 내 선정 여부 안내
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
