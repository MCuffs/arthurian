import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
    keywords?: string[];
}

const DEFAULT_KEYWORDS = [
    '쓰레드 마케팅', '스레드 마케팅',
    '쓰레드 인플루언서', '스레드 인플루언서',
    '쓰레드 수익화', '스레드 수익화',
    '텍스트 커머스', '인플루언서 공동구매',
    '틱톡 라이브', '틱톡 에이전시',
    '인플루언서 마케팅', '크리에이터 수익화',
    'MCN', '라이브 커머스',
    '아서리안 스튜디오', 'Applied Korea Studio'
];

export function SEO({ title, description, url, image, keywords = [] }: SEOProps) {
    const siteUrl = 'https://www.arthrian.cloud';
    const fullUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;
    // Use local image if no full url provided, otherwise assume it's a full url or relative path
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/character/merlin.png`;

    const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])].join(', ');

    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Applied Korea Studio',
        alternateName: '아서리안 스튜디오',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        sameAs: [
            'https://www.instagram.com/arthurian.studio',
            'https://www.threads.net/@arthurian.studio',
        ],
        description: description,
        foundingDate: '2024',
        areaServed: 'KR',
        knowsLanguage: ['ko', 'en'],
    };

    const serviceData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Applied Korea Studio - Threads Marketing Agency',
        description: '한국 1위 스레드 인플루언서 마케팅 에이전시. 텍스트 기반 마케팅의 새로운 패러다임.',
        url: siteUrl,
        priceRange: '₩₩',
        areaServed: {
            '@type': 'Country',
            name: 'South Korea',
        },
        serviceType: ['Influencer Marketing', 'Social Media Marketing', 'Threads Marketing'],
    };

    const structuredData = [organizationData, serviceData];

    return (
        <Helmet>
            {/* Basic */}
            <title>{title} | Applied Korea Studio</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={fullUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content="Applied Korea Studio" />
            <meta property="og:locale" content="ko_KR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
