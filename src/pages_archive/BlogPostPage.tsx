import { useParams, NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowLeft, Calendar, Tag, CheckCircle2 } from 'lucide-react';

const POSTS = {
    'hu100-marketing-case': {
        title: '아서리안과 함께한 후백(Hu100)의 스레드 마케팅 후기',
        subtitle: '100세까지 건강하게, 진정성 있는 브랜드 스토리텔링의 힘',
        date: '2026. 02. 02',
        author: 'Hu100 Brand Manager',
        category: 'Client Success',
        content: (
            <div className="space-y-12">
                {/* Summary Box */}
                <div className="bg-neutral-50 border-l-4 border-[#FAE100] p-8 rounded-r-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-3">📌 3줄 요약</h3>
                    <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">1.</span>
                            <span>기존 퍼포먼스 마케팅의 <strong>단순 노출 위주 전략에서 한계</strong>를 느꼈습니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">2.</span>
                            <span>아서리안을 통해 <strong>'건강한 삶'이라는 브랜드 철학을 진정성 있게 전달</strong>했습니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">3.</span>
                            <span>단순 체험단이 아닌, <strong>실제 유저들의 공감을 이끌어내는 스토리텔링</strong>으로 팬덤을 확보했습니다.</span>
                        </li>
                    </ul>
                </div>

                <div className="prose prose-lg prose-neutral max-w-none">
                    <img
                        src="/blog/hu100/main.png"
                        alt="Hu100 Main Identity"
                        className="w-full rounded-2xl shadow-lg mb-8 border border-neutral-100"
                    />

                    <h3 className="text-2xl font-bold mt-12 mb-6">Introduction: 100세까지 건강하게, Hu100</h3>
                    <p className="lead text-xl leading-relaxed text-neutral-600">
                        안녕하세요, 프리미엄 건강 브랜드 <strong>후백(Hu100)</strong>입니다.<br />
                        Hu100은 <strong>'Healthy Until 100 years old'</strong>라는 철학을 바탕으로, 단순히 오래 사는 것이 아니라 '건강하게' 나이 드는 삶을 지향하는 브랜드입니다.
                    </p>
                    <p>
                        우리는 고객들에게 진정성 있는 건강 솔루션을 제공하고자 노력해왔지만, 치열한 건강기능식품 및 웰니스 시장에서 우리의 '진심'을 전달하는 것은 쉽지 않았습니다.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">Problem: "왜 우리 브랜드의 진심은 닿지 않을까?"</h3>
                    <p>
                        기존 마케팅은 주로 인스타그램과 유튜브 숏폼에 집중했습니다. 화려한 영상과 자극적인 문구로 시선을 끄는 데는 성공했지만, 정작 <strong>구매로 이어지는 '신뢰'</strong>를 쌓기에는 부족했습니다.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <img src="/blog/hu100/product1.jpeg" alt="Hu100 Product 1" className="rounded-xl shadow-md" />
                        <img src="/blog/hu100/product2.jpeg" alt="Hu100 Product 2" className="rounded-xl shadow-md" />
                    </div>
                    <p>
                        <em>"광고 같아서 그냥 넘겼어요."</em><br />
                        소비자들은 더 이상 뻔한 광고에 반응하지 않았습니다. 우리에겐 단순히 제품을 노출하는 것이 아니라, <strong>'왜 Hu100이어야 하는가'</strong>를 차분히 설명하고 설득할 수 있는 공간이 필요했습니다.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">Solution: 아서리안, 텍스트의 힘을 빌리다</h3>
                    <p>
                        고민 끝에 만난 파트너가 바로 <strong>아서리안(Applied Korea)</strong>이었습니다. 아서리안은 숏폼의 홍수 속에서 <strong>'텍스트(Text)'와 '스레드(Threads)'</strong>에 집중한다는 점이 인상적이었습니다.
                    </p>
                    <p>
                        아서리안의 솔루션은 명확했습니다.<br />
                        <strong>"보여주려 하지 말고, 들려주세요."</strong>
                    </p>
                    <img
                        src="/blog/hu100/arthurian-post.png"
                        alt="Applied Korea Marketing Post"
                        className="w-full rounded-2xl shadow-lg my-8 border border-neutral-100"
                    />
                    <p>
                        아서리안은 Hu100의 제품을 단순 홍보하는 대신, 건강에 진심인 크리에이터(파트너)들과 연결해주었습니다. 그들은 자신의 실제 건강 고민과 일상 속에서 Hu100이 어떻게 도움이 되었는지를 <strong>담백하고 솔직한 글로 풀어냈습니다.</strong>
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">Result: 진정성이 만든 팬덤</h3>
                    <p>
                        결과는 놀라웠습니다. 화려한 편집 없이 오직 '글'과 '사진'만으로 구성된 스레드 게시물에 사람들이 반응하기 시작했습니다.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-600 my-6">
                        <li><strong>체류 시간 증가:</strong> 고객들이 콘텐츠를 끝까지 읽고 브랜드 스토리를 이해하기 시작했습니다.</li>
                        <li><strong>질적인 댓글:</strong>단순한 "좋아요"가 아닌, 자신의 건강 고민을 나누고 제품을 문의하는 진성 유저들이 늘어났습니다.</li>
                        <li><strong>구매 전환율 상승:</strong> 스레드를 통해 유입된 고객은 일반 광고 유입 고객보다 구매 전환율이 월등히 높았습니다.</li>
                    </ul>
                    <p>
                        아서리안과의 협업을 통해 Hu100은 단순한 판매를 넘어, <strong>고객과 가치를 공유하는 브랜드</strong>로 자리 잡을 수 있었습니다. 진짜 마케팅이 무엇인지 고민하는 브랜드 담당자분들께 아서리안을 자신 있게 추천합니다.
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="bg-[#FAE100] text-[#371D1E] p-10 md:p-14 rounded-3xl mt-16 text-center shadow-xl relative overflow-hidden group">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Hu100처럼 브랜드의 '진심'을 전하고 싶다면?</h3>
                    <p className="mb-10 text-neutral-800 max-w-xl mx-auto leading-relaxed font-medium">
                        가장 강력한 마케팅은 화려한 기술이 아닌, <br />
                        소비자의 마음을 움직이는 <strong>진솔한 이야기</strong>입니다.
                    </p>
                    <div className="flex justify-center gap-4">
                        <NavLink
                            to="/apply/brand"
                            className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            아서리안과 상담하기
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    },
    'why-we-pivoted-to-threads': {
        title: '아서리안이 스레드(Threads) 전문 에이전시가 된 이유',
        subtitle: '도파민 중독의 시대에 던지는 우리의 대답',
        date: '2026. 02. 02',
        author: 'Applied Korea Team',
        category: 'Agency Insight',
        content: (
            <div className="space-y-12">
                {/* SEO: Featured Snippet Optimization */}
                <div className="bg-neutral-50 border-l-4 border-black p-8 rounded-r-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-3">📌 핵심 요약</h3>
                    <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">1.</span>
                            <span>영상 피로도(Video Fatigue) 증가로 <strong>텍스트 플랫폼이 다시 부상</strong>하고 있습니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">2.</span>
                            <span>스레드(Threads)는 <strong>'진정성 있는 리뷰'</strong>가 통하는 유일한 SNS입니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold">3.</span>
                            <span>단순 노출보다 <strong>실제 구매 전환(Conversion)</strong>에 집중한다면, 지금이 적기입니다.</span>
                        </li>
                    </ul>
                </div>

                <div className="prose prose-lg prose-neutral max-w-none">
                    <p className="lead text-xl leading-relaxed text-neutral-600">
                        안녕하세요, <strong>스레드 전문 마케팅 에이전시 아서리안(Applied Korea)</strong>입니다.<br />
                        최근 마케팅 업계에서 가장 뜨거운 감자는 단연 <strong>'숏폼 피로도(Short-form Fatigue)'</strong>입니다. 유튜브 쇼츠, 인스타그램 릴스, 틱톡까지... 하루에도 수백 개의 영상을 무의식적으로 소비하다 보니, 소비자들은 이제 '자극'에 무뎌지기 시작했습니다.
                    </p>
                    <p>
                        저희가 잘나가던 숏폼 비즈니스 모델을 과감히 수정하고, <strong className="text-black text-2xl" >'텍스트(Text)'와 '스레드(Threads)'</strong>에 올인하게 된 이유도 바로 여기에 있습니다.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">1. 도파민 디톡스와 '읽는 사람'의 귀환</h3>
                    <p>
                        화려한 영상 편집 기술과 후킹(Hooking) 멘트는 여전히 유효합니다. 하지만 <strong>'구매'</strong>라는 결정적인 순간, 소비자들은 다시 <strong>'글'</strong>을 찾습니다.
                    </p>
                    <p>
                        상세페이지를 정독하고, 블로그 후기를 찾아보고, 커뮤니티의 댓글을 확인합니다. 영상이 '흥미'를 유발한다면, <strong>글은 '확신'을 줍니다.</strong> 아서리안은 이 <strong>'설득의 본질'</strong>이 텍스트에 있다고 믿습니다. 특히 고관여 제품일수록 텍스트 마케팅의 효율은 압도적입니다.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">2. 스레드(Threads): 진정성이 알고리즘이 되는 곳</h3>
                    <p>
                        인스타그램이 '보여주기 위한 삶'을 전시한다면, 스레드는 <strong>'진짜 나의 생각'</strong>을 공유하는 공간입니다. 이곳에서의 마케팅은 광고가 아닌 <strong>'대화'</strong>여야 합니다.
                    </p>
                    <div className="my-8 p-6 bg-[#F5F5F7] rounded-2xl">
                        <p className="italic text-neutral-600 font-medium text-center">
                            "스레드에서는 가식적인 인플루언서보다,<br />
                            <strong>솔직한 옆집 언니의 추천</strong>이 더 강력한 힘을 발휘합니다."
                        </p>
                    </div>
                    <p>
                        아서리안 마케팅 팀이 분석한 데이터에 따르면, 스레드 내 <strong>광고성 게시글의 도달률은 일반 게시글 대비 1/10 수준</strong>입니다. 하지만 진정성 있는 후기(Seeding) 콘텐츠는 팔로워 수와 무관하게 폭발적인 <strong>바이럴(Viral)</strong>을 일으킵니다. 저희는 이 알고리즘의 핵심을 꿰뚫고 있습니다.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6">3. 압도적인 구매 전환율 (ROI)</h3>
                    <p>
                        브랜드 담당자님들께 묻고 싶습니다. <strong>조회수 100만 회와, 구매 전환 100건 중 무엇을 선택하시겠습니까?</strong>
                    </p>
                    <p>
                        숏폼의 조회수는 허수가 많습니다. 손가락 하나로 1초 만에 넘겨버리는 시청자를 '잠재 고객'이라 부르기 어렵습니다. 하지만 스레드의 긴 글을 끝까지 읽은 사람은 <strong>이미 당신의 브랜드에 설득된 사람</strong>입니다.
                    </p>
                    <p>
                        아서리안과 함께한 뷰티 브랜드 B사는 스레드 캠페인 시작 1주일 만에 <strong>ROAS(광고비 대비 매출액) 400%</strong>를 달성했습니다. 이는 맹목적인 노출이 아닌, <strong>타겟 오디언스에 맞춘 정교한 스토리텔링</strong> 덕분입니다.
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="bg-black text-white p-10 md:p-14 rounded-3xl mt-16 text-center shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-10 transition-opacity" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">텍스트의 시대를 선점하세요.</h3>
                    <p className="mb-10 text-neutral-300 max-w-xl mx-auto leading-relaxed">
                        남들이 숏폼에 매몰되어 있을 때, <br />
                        가장 구매력 높은 고객들이 모인 <strong>스레드(Threads)</strong>를 선점하는 브랜드가 시장을 주도합니다. <br />
                        아서리안이 그 길을 가장 정확하게 안내하겠습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <NavLink
                            to="/apply/brand"
                            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            브랜드 캠페인 문의하기
                        </NavLink>
                        <NavLink
                            to="/apply/creator"
                            className="px-8 py-4 border border-neutral-600 text-white rounded-full font-bold hover:bg-neutral-800 hover:border-neutral-500 transition-all flex items-center justify-center"
                        >
                            파트너 크리에이터 지원
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    },
    'why-threads-marketing-works': {
        title: '2026년, 브랜드가 스레드(Threads) 마케팅을 해야 하는 이유',
        subtitle: '숫자 뒤에 숨겨진 진짜 이야기, 그리고 지금 우리가 텍스트에 주목해야 하는 이유',
        date: '2026. 02. 02',
        author: 'Applied Korea Marketing Team',
        category: 'Marketing Insights',
        content: (
            <div className="space-y-12">
                {/* Summary Box */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-8 rounded-r-lg shadow-sm">
                    <h2 className="text-lg font-bold mb-3">📌 3줄 요약</h2>
                    <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">1.</span>
                            <span>피로한 영상 대신 <strong>'읽는 즐거움'</strong>을 찾는 사람들이 늘고 있습니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">2.</span>
                            <span>영혼 없는 좋아요보다 <strong>진짜 대화(Reply)</strong>가 오가는 유일한 곳입니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">3.</span>
                            <span>지금이 <strong>가장 적은 비용으로 가장 큰 팬덤</strong>을 만들 수 있는 골든타임입니다.</span>
                        </li>
                    </ul>
                </div>

                <div className="prose prose-lg prose-neutral max-w-none">
                    <p className="lead text-xl leading-relaxed text-neutral-600">
                        요즘 마케팅 담당자분들을 만나면 다들 이 이야기뿐입니다.<br />
                        <em>"스레드(Threads), 그거 진짜 해야 되나요? 그냥 유행 아니에요?"</em><br /><br />
                        솔직히 말씀드리면, 저도 처음엔 반신반의했습니다. '또 새로운 SNS가 나왔네, 관리할 채널만 늘어나는 거 아닌가' 하고요.<br />
                        하지만 직접 뛰어들어보고, 매일 터지는 피드들을 보면서 확신이 들었습니다.<br />
                        <strong>이건 단순한 유행이 아니라, '소통의 방식'이 바뀌고 있다는 신호</strong>라는 걸요.
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6 text-neutral-900">1. 사람들이 다시 '글'을 읽기 시작했어요</h2>

                    <p>
                        유튜브 쇼츠, 릴스, 틱톡... 하루 종일 영상만 보다 보면 머리가 멍해지는 기분, 다들 느껴보셨죠?
                        도파민에 지친 사람들이 이제 <strong>차분한 텍스트</strong>를 찾아 스레드로 모이고 있습니다.
                    </p>
                    <p>
                        실제로 주변을 둘러보면 인스타그램 스토리에 스레드 글을 캡쳐해서 올리는 친구들이 부쩍 늘었을 거예요.
                        "이 글 너무 공감된다", "내가 하고 싶었던 말이다" 하면서요.
                    </p>
                    <p>
                        현재 한국 일일 활성 사용자(DAU)가 300만을 넘었다는 건 단순한 숫자가 아닙니다.
                        사람들이 진짜 <strong>'노는 판'</strong>이 여기로 옮겨왔다는 뜻이죠.
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6 text-neutral-900">2. '영혼 없는 좋아요'는 이제 그만</h2>

                    <p>
                        인스타그램에서 '좋아요' 누르는 데 얼마나 걸리나요? 0.1초도 안 걸립니다.
                        예쁜 사진 보고 습관적으로 두 번 탭하고 넘어가죠. 브랜드 입장에서는 숫자는 올라가는데, 정작 <strong>내 물건을 사주는 '진짜 고객'</strong>인지는 알 길이 없습니다.
                    </p>
                    <p>
                        그런데 스레드는 다릅니다. 글을 읽어야 하고, 공감해야 하고, 댓글을 달려면 <strong>'생각'</strong>을 해야 하거든요.
                        그래서 스레드 마케팅을 해보면 <strong>댓글의 깊이</strong>가 다릅니다.
                    </p>
                    <div className="my-8 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                        <p className="italic text-neutral-700 font-medium">
                            "단순히 '예뻐요'가 아니라, '저도 이런 고민 있었는데 이 제품 쓰면 해결될까요?' 같은 <strong>진짜 대화</strong>가 오갑니다. 마케터 입장에서는 이보다 더 반가운 반응이 없죠."
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-16 mb-6 text-neutral-900">3. 영상은 '흥미'를 주지만, 글은 '확신'을 줍니다</h2>

                    <p>
                        3초 만에 휙휙 넘기는 숏폼 영상으로 우리 브랜드의 철학이나 제품의 장점을 온전히 설명하기란 쉽지 않습니다.
                        특히 <strong>건강기능식품, 화장품, 가전제품</strong>처럼 설명이 필요한 고관여 제품일수록 더더욱 그렇죠.
                    </p>
                    <p>
                        스레드에서는 차분하게 말을 걸 수 있습니다.
                        "우리가 왜 이 제품을 만들었냐면요...", "사실 이런 고민이 있었어요..." 하고 털어놓으면, 소비자들도 귀를 기울여줍니다.
                    </p>
                    <p>
                        긴 글을 끝까지 읽었다는 건, 이미 당신의 브랜드에 <strong>설득될 준비가 되었다</strong>는 뜻입니다.
                        그래서 스레드를 통해 유입된 고객들은 <strong>구매 전환율이 압도적으로 높을 수밖에 없습니다.</strong>
                    </p>

                    <h2 className="text-3xl font-bold mt-16 mb-6 text-neutral-900">4. 지금이 아니면 늦습니다</h2>

                    <p>
                        마지막으로 현실적인 이야기를 해볼까요?
                        인스타그램, 유튜브 광고비... 솔직히 너무 비쌉니다. 이제 웬만한 예산으로는 티도 안 나죠.
                        이미 레드오션입니다.
                    </p>
                    <p>
                        하지만 스레드는 아직 <strong>블루오션</strong>입니다.
                        아직 많은 경쟁사들이 "이거 해야 되나?" 간 보고 있을 때가 기회입니다.
                        지금 진입해야 <strong>적은 비용으로 '선점 효과'</strong>를 누릴 수 있습니다.
                        1년 뒤엔 누구나 다 하고 있을 테니까요. (그때는 이미 늦었겠죠?)
                    </p>

                    {/* Conclusion */}
                    <hr className="my-12 border-neutral-200" />
                    <p className="text-xl font-medium text-neutral-900">
                        결국 마케팅의 본질은 <strong>'사람의 마음을 움직이는 것'</strong>이잖아요.<br />
                        화려한 편집 기술이나 자극적인 썸네일보다,<br />
                        투박하더라도 <strong>진심이 담긴 글 한 줄</strong>이 더 강력할 때가 있습니다.
                    </p>
                    <p>
                        스레드가 바로 그런 공간입니다.<br />
                        더 늦기 전에, 아서리안과 함께 스레드에서 진짜 이야기를 시작해보세요.
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-10 md:p-14 rounded-3xl mt-16 text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">우리 브랜드도 스레드가 맞을까?</h3>
                    <p className="mb-10 text-purple-100 max-w-xl mx-auto leading-relaxed relative z-10">
                        고민만 하다가 타이밍을 놓치지 마세요.<br />
                        <strong className="text-white">가장 효과적인 스레드 진입 전략</strong>, 아서리안이 제안해드립니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <NavLink
                            to="/apply/brand"
                            className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            브랜드 캠페인 무료 상담
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
};

export function BlogPostPage() {
    const { slug } = useParams();
    const post = POSTS[slug as keyof typeof POSTS];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
                    <p className="text-neutral-500 mb-6">요청하신 페이지를 찾을 수 없습니다.</p>
                    <NavLink to="/blog" className="px-6 py-2 bg-black text-white rounded-full text-sm">목록으로 돌아가기</NavLink>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            <SEO title={post.title} description={post.subtitle} />

            {/* Header */}
            <div className="pt-32 pb-12 px-6 bg-neutral-50 border-b border-neutral-100">
                <div className="max-w-3xl mx-auto text-center">
                    <NavLink to="/blog" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-black mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> 모든 후기 보기
                    </NavLink>

                    <div className="flex items-center justify-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-[#371D1E]">
                        <span className="bg-[#FAE100] px-2 py-1 rounded-md">{post.category}</span>
                        <span className="flex items-center gap-1 text-neutral-400"><Calendar size={12} /> {post.date}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-neutral-900 break-keep">
                        {post.title}
                    </h1>
                    <p className="text-lg text-neutral-500 font-light">
                        {post.subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-8 p-2 bg-white rounded-full inline-flex border border-neutral-100 shadow-sm mx-auto">
                        <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                            <Tag size={14} />
                        </div>
                        <span className="text-sm font-bold text-neutral-900 pr-2">{post.author}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                {post.content}
            </div>
        </article>
    );
}
