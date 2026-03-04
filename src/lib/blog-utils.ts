import matter from 'gray-matter';
import type { BlogPost, BlogMetadata, BlogCategory } from '../types/blog-types';

// Static blog posts data
// In a real implementation, this would read from markdown files
const blogPosts: BlogPost[] = [
    {
        slug: 'why-we-started-arthurian',
        title: '왜 아서리안을 만들었나: 막무가내 에이전시 문화를 깨기 위한 도전',
        description: '직접 라이브를 경험하며 본 에이전시들의 문제점. 단기 수익에만 집중하는 시장에서, 크리에이터와 함께 성장하는 새로운 모델을 만들기까지의 이야기.',
        date: '2026-01-30',
        category: 'studio-story',
        tags: ['창업 스토리', '에이전시 문화', '틱톡 라이브', '지속가능성'],
        thumbnail: '/blog/images/why-arthurian-thumbnail.jpg',
        readTime: '7 min read',
        author: 'Applied Korea Team',
        featured: true
    },
    {
        slug: 'new-creator-onboarding',
        title: '신규 크리에이터 온보딩 3달차 후기: 0원에서 수익화까지',
        description: '틱톡 라이브 초보자가 아서리안의 지원을 받아 3개월 만에 안정적인 수익을 창출하게 된 리얼 성장 스토리입니다.',
        date: '2026-01-26',
        category: 'growth-story',
        tags: ['틱톡 라이브 하는법', '수익화', '성장 후기'],
        thumbnail: '/blog/User Case/1st/1월.jpeg',
        readTime: '5 min read',
        featured: true
    },
    {
        slug: 'bbq-mukbang-success',
        title: 'BBQ 치킨 x 먹방: 가장 맛있는 소리를 담아낸 브랜디드 콘텐츠',
        description: '억지스러운 멘트 대신 리얼한 사운드와 표정으로 승부했습니다. 브랜드와 크리에이터 모두가 만족한 진정성 있는 협업 과정을 소개합니다.',
        date: '2026-02-01',
        category: 'industry-insights',
        tags: ['유튜브 마케팅', '브랜디드 콘텐츠', '먹방', '진정성'],
        thumbnail: '/cases/youtube-bbq.png',
        readTime: '3 min read',
        featured: true
    },
    {
        slug: 'why-threads-marketing-works',
        title: '2026년, 브랜드가 스레드(Threads) 마케팅을 해야 하는 이유',
        description: '한국 마켓 DAU 급증, 높은 참여율, 압도적인 전환율. 데이터로 증명하는 스레드 마케팅의 힘과 지금 시작해야 하는 이유를 알아보세요.',
        date: '2026-02-02',
        category: 'industry-insights',
        tags: ['스레드 마케팅', 'Threads', '마케팅 트렌드', 'ROI', '브랜드 캠페인'],
        thumbnail: '/blog/images/threads-marketing-power.png',
        readTime: '8 min read',
        author: 'Applied Korea Marketing Team',
        featured: true
    }
];

export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
    return blogPosts
        .filter(post => post.category === category)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts
        .filter(post => post.featured)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const currentPost = getPostBySlug(currentSlug);
    if (!currentPost) return [];

    return blogPosts
        .filter(post =>
            post.slug !== currentSlug &&
            (post.category === currentPost.category ||
                post.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

export function getCategoryLabel(category: BlogCategory): string {
    const labels: Record<BlogCategory, string> = {
        'studio-story': 'Studio Story',
        'growth-story': 'Creator Stories',
        'tiktok-tips': 'TikTok Tips',
        'industry-insights': 'Industry Insights'
    };
    return labels[category];
}

export function calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
}

export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

export function parseFrontmatter(markdown: string): { metadata: BlogMetadata; content: string } {
    const { data, content } = matter(markdown);
    return {
        metadata: data as BlogMetadata,
        content
    };
}
