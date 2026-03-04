import { SEO } from '../components/SEO';
import { FAQ } from '../components/FAQ';

export function FAQPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <SEO title="FAQ" description="Frequently Asked Questions about Applied Korea Studio" />
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h1>
                    <p className="text-neutral-500">자주 묻는 질문들을 모았습니다.</p>
                </div>
                {/* Reusing existing FAQ component but we can pass more specific items if needed later */}
                <FAQ />
            </div>
        </div>
    );
}
