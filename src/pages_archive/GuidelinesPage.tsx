import { SEO } from '../components/SEO';

export function GuidelinesPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6">
            <SEO title="Guidelines" description="Applied Korea Community and Brand Safety Guidelines" />
            <div className="max-w-[800px] mx-auto">
                <h1 className="text-4xl font-bold mb-12">Guidelines</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Brand Safety</h2>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                        아서리안은 파트너 브랜드의 가치를 최우선으로 보호합니다.
                        모든 크리에이터는 캠페인 참여 전 엄격한 브랜드 세이프티 교육을 이수하며,
                        제작되는 모든 콘텐츠는 브랜드의 평판을 해치지 않도록 사전 모니터링됩니다.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                        <li>폭력적, 차별적 언어 사용 금지</li>
                        <li>과장 광고 및 허위 사실 유포 금지</li>
                        <li>정치적/종교적 중립성 준수</li>
                        <li>타 브랜드 비방 금지</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Community Standards</h2>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                        건강한 크리에이터 생태계를 위해 우리는 상호 존중과 신뢰를 바탕으로 소통합니다.
                        커뮤니티 내에서의 비매너 행위나 계약 위반은 영구적인 활동 정지 사유가 될 수 있습니다.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                        <li>상호 비방 및 욕설 금지</li>
                        <li>계약 내용에 대한 기밀 유지</li>
                        <li>정당한 사유 없는 방송/업로드 지연 금지</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Content Quality</h2>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                        아서리안의 모든 콘텐츠는 최소한의 퀄리티 기준을 충족해야 합니다.
                        단순한 상품 노출을 넘어, 시청자에게 가치를 제공하고 구매 전환을 유도할 수 있는
                        기획된 콘텐츠를 지향합니다.
                    </p>
                </section>
            </div>
        </div>
    );
}
