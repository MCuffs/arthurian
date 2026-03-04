import { SEO } from '../components/SEO';

export function TermsPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24 px-6">
            <SEO title="Terms of Service" description="Applied Korea Terms of Service" />
            <div className="max-w-[800px] mx-auto">
                <h1 className="text-4xl font-bold mb-12">Terms of Service</h1>

                <div className="space-y-8 text-neutral-600 text-sm leading-relaxed">
                    <section>
                        <h3 className="text-black font-bold text-lg mb-2">제1조 (목적)</h3>
                        <p>
                            본 약관은 아서리안(이하 "회사")이 제공하는 크리에이터 매칭 및 마케팅 서비스(이하 "서비스")의
                            이용조건 및 절차, 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-black font-bold text-lg mb-2">제2조 (용어의 정의)</h3>
                        <p>
                            1. "서비스"란 회사가 제공하는 인플루언서 마케팅 플랫폼 및 관련 제반 서비스를 의미합니다.<br />
                            2. "회원"이란 본 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자를 말합니다.<br />
                            3. "파트너"란 회사와 별도의 제휴 계약을 체결한 브랜드 또는 크리에이터를 의미합니다.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-black font-bold text-lg mb-2">제3조 (약관의 효력 및 변경)</h3>
                        <p>
                            회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 안에서
                            본 약관을 개정할 수 있으며, 개정된 약관은 서비스 내 공지사항을 통해 공지합니다.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-black font-bold text-lg mb-2">제4조 (서비스의 제공)</h3>
                        <p>
                            회사는 다음과 같은 업무를 수행합니다.<br />
                            1. 마케팅 캠페인 중개 및 운영 지원<br />
                            2. 크리에이터 발굴 및 육성<br />
                            3. 브랜드 광고/홍보 대행<br />
                            4. 기타 회사가 정하는 업무
                        </p>
                    </section>

                    <p className="pt-8 text-xs text-neutral-400">
                        공고일자: 2024년 2월 1일<br />
                        시행일자: 2024년 2월 8일
                    </p>
                </div>
            </div>
        </div>
    );
}
