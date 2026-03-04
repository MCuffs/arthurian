import { SEO } from '../components/SEO';

export function HowItWorksPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6">
            <SEO title="How It Works" description="Learn how Applied Korea connects creators and brands." />
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">How Applied Korea Works</h1>
                <div className="space-y-16">
                    {[
                        { step: '01', title: '매칭', desc: '브랜드의 목표와 제품에 맞는 최적의 크리에이터를 AI와 데이터로 매칭합니다.' },
                        { step: '02', title: '기획', desc: '플랫폼 특성과 타겟 오디언스를 고려한 맞춤형 콘텐츠 전략을 수립합니다.' },
                        { step: '03', title: '실행', desc: '크리에이터가 브랜드의 메시지를 자신만의 언어로 전달하며 스레드 포스팅을 진행합니다.' },
                        { step: '04', title: '분석', desc: '실시간 성과 추적 및 상세 리포트를 제공하여 ROI를 명확히 측정합니다.' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-8 items-start">
                            <div className="text-6xl font-bold text-neutral-200 w-32 shrink-0">{item.step}</div>
                            <div>
                                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                                <p className="text-neutral-600 text-lg font-light leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
