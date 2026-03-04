import { Helmet } from 'react-helmet-async';

interface BlogSEOProps {
    title: string;
    description: string;
    url: string;
    image?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
    author?: string;
}

export function BlogSEO({
    title,
    description,
    url,
    image,
    type = 'article',
    publishedTime,
    modifiedTime,
    tags = [],
    author = 'Applied Korea Studio'
}: BlogSEOProps) {
    const fullUrl = `https://arthurian.studio${url}`;
    const fullImageUrl = image ? `https://arthurian.studio${image}` : 'https://arthurian.studio/logo.png';
    const siteTitle = `${title} | Applied Korea Studio`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="Applied Korea Studio" />

            {type === 'article' && publishedTime && (
                <>
                    <meta property="article:published_time" content={publishedTime} />
                    {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
                    {author && <meta property="article:author" content={author} />}
                    {tags.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional SEO */}
            <meta name="keywords" content={tags.join(', ')} />

            {/* Structured Data */}
            {type === 'article' && publishedTime && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: title,
                        description: description,
                        image: fullImageUrl,
                        datePublished: publishedTime,
                        dateModified: modifiedTime || publishedTime,
                        author: {
                            '@type': 'Organization',
                            name: author
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Applied Korea Studio',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://arthurian.studio/logo.png'
                            }
                        },
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': fullUrl
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
}
