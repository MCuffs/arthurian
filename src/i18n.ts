
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    KR: {
        translation: {
            nav: {
                home: 'Home',
                studio: 'For Creators',
                brand: 'For Brands',
                benefit: 'Pricing',
                creatorCase: 'Success Cases',
                application: 'Register'
            },
            hero: {
                badge: 'Creator Commerce Partnership Platform',
                title: 'Applied Korea',
                subtitle: '크리에이터와 브랜드가 만나는 오픈 플랫폼',
                desc: '자유롭게 등록하고, 투명하게 연결되세요. 아서리안은 소속이나 계약 없이, 기회와 성과를 연결하는 마켓플레이스입니다.',
                cta: {
                    creator: '크리에이터 등록하기',
                    brand: '브랜드 캠페인 시작'
                },
                stats: {
                    creators: '등록 파트너',
                    matches: '성공한 연결',
                    brands: '제휴 브랜드'
                }
            },
            tabs: {
                creators: {
                    title: 'Work Areas',
                    items: {
                        0: 'Channel Architecture: 채널의 근본적인 구조와 정체성 설계',
                        1: 'Live Commerce Operations: 고도화된 라이브 커머스 운영 시스템',
                        2: 'Revenue Structure Design: 단기 수익을 넘어선 지속 가능한 수익 모델'
                    }
                },
                brands: {
                    title: 'Partnerships',
                    items: {
                        0: 'Brand & Deal Negotiation: 브랜드와 대등한 위치에서의 전략적 협상',
                        1: 'Long-term Relations: 일회성 광고가 아닌 장기적인 브랜드 파트너십 구축',
                        2: 'Value Alignment: 철학이 일치하는 브랜드와의 깊은 연결'
                    }
                },
                studio: {
                    title: 'Platform Value',
                    items: {
                        0: '우리는 관리하지 않습니다. 기회를 연결합니다.',
                        1: '소속이나 계약 없이, 누구나 자유롭게 이용할 수 있습니다.',
                        2: '아서리안의 성장은 곧 플랫폼 참여자의 성공입니다.'
                    }
                },
                influencers: {
                    title: 'Verified Partners',
                    next: {
                        name: 'Who is next?',
                        role: 'You can be.'
                    }
                }
            },
            studio: {
                identity: 'Platform Identity',
                title: '아서리안은 에이전시가 아닙니다.',
                desc: '우리는 "관리"라는 이름으로 크리에이터를 통제하지 않습니다. 틱톡 라이브부터 유튜브 브랜디드 콘텐츠까지, 크리에이터가 주체적으로 활동할 수 있는 인프라와 기회를 제공합니다.',
                values: {
                    growth: { title: '오픈 파트너십', desc: '전속 계약 없이, 원하는 프로젝트에만 자유롭게 참여할 수 있습니다.' },
                    operation: { title: '데이터 기반 매칭', desc: '감에 의존한 영업이 아닌, 데이터와 성과 지표를 기반으로 브랜드를 연결합니다.' },
                    potential: { title: '커머스 인프라', desc: '단순 광고를 넘어, 실제 구매 전환을 일으키는 커머스 구조를 설계합니다.' }
                },
                partnership: {
                    title: '우리가 연결하는 방식',
                    desc: '투명한 플랫폼 구조 안에서, 크리에이터와 브랜드는 대등하게 만납니다.',
                    creators: { label: 'For creators', desc: '내 채널에 딱 맞는 브랜드 캠페인을 찾고, 정당한 수익을 창출하세요.' },
                    brands: { label: 'For brands', desc: '복잡한 대행사 없이, 검증된 크리에이터와 직접 협업을 시작하세요.' }
                }
            },
            brand: {
                collab: 'Campaign Process',
                title: '광고가 아닌 커머스를 만드는 플랫폼',
                desc: '단순 노출만으로는 부족합니다. 아서리안은 라이브 커머스, 소셜 공구, 브랜디드 콘텐츠 등 실제 구매 전환을 일으키는 크리에이터 풀을 보유하고 있습니다.',
                features: {
                    matching: { title: '쇼퍼블 콘텐츠', desc: '단순 홍보 영상이 아닌, 구매 링크와 연동된 커머스 특화 콘텐츠를 제작합니다.' },
                    performance: { title: '전환 성과 보장', desc: '조회수가 아닌 ROI와 ROAS를 핵심 KPI로 설정하여 성과를 증명합니다.' },
                    partnership: { title: '스케일업 시스템', desc: '성공한 캠페인은 즉시 규모를 키워 더 큰 매출로 연결합니다.' }
                },
                offering: {
                    title: '플랫폼 제공 기능',
                    brands: { label: 'For brands', desc: '캠페인 등록부터 크리에이터 선정, 성과 분석까지 원스톱으로 관리하세요.' },
                    creators: { label: 'For creators', desc: '수익화 가능한 캠페인을 실시간으로 확인하고 지원할 수 있습니다.' }
                },
                application: {
                    title: 'Start Campaign',
                    subtitle: '아서리안 플랫폼에서 성공적인 캠페인을 시작하세요.',
                    fields: {
                        company: '회사/브랜드명',
                        contact: '담당자 성함',
                        email: '이메일',
                        budget: '예상 예산',
                        budget_placeholder: '예산을 선택해주세요',
                        message: '캠페인 목표 및 문의사항'
                    },
                    submit: '캠페인 등록하기',
                    sending: '등록 중...',
                    success: '캠페인이 성공적으로 등록되었습니다!',
                    failure: '등록에 실패했습니다. 다시 시도해주세요.',
                    received: '캠페인이 등록되었습니다. 담당자가 검토 후 승인 알림을 드립니다.'
                }
            },
            benefit: {
                tabs: {
                    incentive: 'Incentive',
                    tools: 'Tools'
                },
                policy: 'Fee Structure',
                title: '모든 비용 구조는 투명하게 공개됩니다.',
                desc: '불투명한 수수료나 숨겨진 비용은 없습니다. 아서리안은 플랫폼 이용료와 매칭 수수료를 명확히 정의합니다.',
                values: {
                    transparency: { title: '투명한 수수료', desc: '매칭 성공 시에만 발생하는 합리적인 수수료 체계를 운영합니다.' },
                    return: { title: '성과 인센티브', desc: '목표 초과 달성 시, 추가 인센티브는 100% 크리에이터에게 지급됩니다.' },
                    trust: { title: '정산 리포트', desc: '모든 정산 내역은 대시보드를 통해 실시간으로 투명하게 공개됩니다.' }
                },
                principles: {
                    title: '플랫폼 운영 원칙',
                    support: { title: '자율성 보장', desc: '우리는 크리에이터의 콘텐츠 방향성에 개입하지 않습니다. 단지 최적의 브랜드를 제안할 뿐입니다.' },
                    profit: { title: '직거래 구조', desc: '중간 단계의 거품을 걷어내고, 브랜드와 크리에이터가 가장 효율적으로 만나는 직거래 구조를 지향합니다.' }
                },
                tools: {
                    title: '커머스를 위한 테크 솔루션',
                    desc: '구매 전환율을 높이는 다양한 라이브 커머스 도구를 무료로 제공합니다.',
                    soundboard: { title: 'Live Commerce Kit', desc: '구매 인증, 타임세일 카운트다운 등 커머스 전용 오버레이 제공' },
                    reactionboard: { title: 'Order Tracker', desc: '실시간 주문 현황을 방송 화면에 시각화하여 구매 심리 자극' }
                }
            },
            home: {
                platform: {
                    badge: 'How It Works',
                    title: '복잡한 절차 없이, 3단계로 끝내세요',
                    steps: [
                        {
                            title: 'Register',
                            description: '크리에이터나 브랜드로 플랫폼에 가입하세요.'
                        },
                        {
                            title: 'Match',
                            description: '최적의 파트너가 자동으로 매칭됩니다.'
                        },
                        {
                            title: 'Connect',
                            description: '직접 소통하며 프로젝트를 성공으로 이끄세요.'
                        }
                    ]
                },
                creators: {
                    badge: 'Partners',
                    title: '이미 많은 크리에이터가 수익을 만들고 있습니다',
                    subtitle: '소속은 중요하지 않습니다. 당신의 영향력을 비즈니스로 만드세요.',
                    cta: '파트너 리스트 보기',
                    platforms: {
                        tiktok: 'TikTok Live',
                        youtube: 'YouTube',
                        instagram: 'Instagram',
                        threads: 'Threads'
                    },
                    status: {
                        available: '협업 가능',
                        busy: '캠페인 진행중'
                    }
                },
                brands: {
                    badge: 'For Brands',
                    title: '가장 빠르고 효율적인 인플루언서 마케팅',
                    subtitle: '대행사 미팅, 견적 조율, 계약서 검토... 이 모든 과정을 클릭 몇 번으로 단축했습니다.',
                    values: [
                        {
                            title: 'Verified Data',
                            description: '허수가 제거된 실제 도달률과 전환 데이터를 제공합니다.'
                        },
                        {
                            title: 'Direct Connect',
                            description: '원하는 크리에이터에게 직접 제안하고 소통하세요.'
                        },
                        {
                            title: 'Safe Payment',
                            description: '에스크로 결제로 결과물이 확인될 때까지 예산이 보호됩니다.'
                        }
                    ],
                    cta: '브랜드 가입하기'
                },
                why: {
                    badge: 'Why Platform',
                    title: '왜 에이전시가 아닌 플랫폼인가요?',
                    comparison: [
                        {
                            label: '관계 정의',
                            old: '소속 및 관리 (전속계약)',
                            new: '오픈 파트너십 (자유이용)'
                        },
                        {
                            label: '수익 구조',
                            old: '높은 배분율 (5:5 등)',
                            new: '합리적 이용료 (수수료 제로)'
                        },
                        {
                            label: '일하는 방식',
                            old: '수동적 할당 (시키는 대로)',
                            new: '능동적 선택 (원하는 대로)'
                        },
                        {
                            label: '확장성',
                            old: '플랫폼 내 종속',
                            new: '멀티 채널 커머스'
                        }
                    ],
                    footer: '크리에이터 커머스의 미래는 "관리"가 아닌 "연결"에 있습니다.'
                },
                application: {
                    title: 'Join the Platform',
                    subtitle: '지금 바로 잃을 것 없는 기회를 잡으세요.',
                    desc: '가입비 없음. 전속 강요 없음. 오직 기회만 있습니다.',
                    fields: {
                        platform: '주 활동 채널',
                        category: '주력 카테고리',
                        experience: '커머스 경험 유무',
                        submit: '무료로 시작하기',
                        success: '등록이 완료되었습니다! 대시보드에서 매칭 현황을 확인하세요.'
                    },
                    platforms: ['TikTok', 'YouTube', 'Instagram', 'Threads', 'Other'],
                    categories: ['뷰티', '패션', '푸드', '라이프스타일', '테크', '게임', '기타']
                },
                about: {
                    badge: 'Our Philosophy',
                    items: [
                        { title: 'Transparency', description: '모든 데이터와 수익 구조를 투명하게 공개합니다.' },
                        { title: 'Data-Driven', description: '감과 인맥이 아닌, 데이터로 성과를 증명합니다.' },
                        { title: 'Borderless', description: '국경과 플랫폼의 경계 없이 커머스를 확장합니다.' }
                    ],
                    statement: '우리는 매니지먼트 회사가 아닙니다.<br/>우리는 <b>비즈니스 파트너십 플랫폼</b>입니다.'
                }
            }
        }
    },
    EN: {
        translation: {
            nav: {
                home: 'Home',
                studio: 'For Creators',
                brand: 'For Brands',
                benefit: 'Pricing',
                creatorCase: 'Success Cases',
                application: 'Register'
            },
            hero: {
                badge: 'Creator Commerce Partnership Platform',
                title: 'Applied Korea',
                subtitle: 'Where Creators Meet Brands',
                desc: 'An open platform connecting creators with opportunities and brands with real results. No exclusivity, just partnership.',
                cta: {
                    creator: 'Join as Creator',
                    brand: 'Start Campaign'
                },
                stats: {
                    creators: 'Registered Partners',
                    matches: 'Successful Connections',
                    brands: 'Partner Brands'
                }
            },
            tabs: {
                creators: {
                    title: 'Work Areas',
                    items: {
                        0: 'Channel Architecture: Designing fundamental identity and systems',
                        1: 'Live Commerce Operations: Advanced commerce operation systems',
                        2: 'Revenue Structure Design: Jointly co-creating sustainable profit models'
                    }
                },
                brands: {
                    title: 'Partnerships',
                    items: {
                        0: 'Brand & Deal Negotiation: Strategic negotiations for creators',
                        1: 'Long-term Relations: Building lasting partnerships, not one-off deals',
                        2: 'Value Alignment: Deep connection with philosophy-aligned brands'
                    }
                },
                studio: {
                    title: 'Platform Value',
                    items: {
                        0: 'We do not manage. We connect opportunities.',
                        1: 'Open to everyone without exclusivity or contracts.',
                        2: 'Applied Korea grows only when our partners succeed.'
                    }
                },
                influencers: {
                    title: 'Verified Partners',
                    next: {
                        name: 'Who is next?',
                        role: 'You can be.'
                    }
                }
            },
            studio: {
                identity: 'Platform Identity',
                title: 'Applied Korea is not an agency.',
                desc: 'We define ourselves as a platform, not a management firm. We provide the infrastructure for creators to lead their own business, from TikTok Live to YouTube Branded Content.',
                values: {
                    growth: { title: 'Open Partnership', desc: 'No exclusive contracts. Freely participate in projects you choose.' },
                    operation: { title: 'Data-Driven Matching', desc: 'We connect brands based on data and performance metrics, not gut feelings.' },
                    potential: { title: 'Commerce Infrastructure', desc: 'We design commerce structures that drive actual sales, not just exposure.' }
                },
                partnership: {
                    title: 'How We Connect',
                    desc: 'In a transparent platform structure, creators and brands meet on equal footing.',
                    creators: { label: 'For creators', desc: 'Find brand campaigns that fit your channel and earn fair revenue.' },
                    brands: { label: 'For brands', desc: 'Collaborate directly with verified creators without complex agency processes.' }
                }
            },
            brand: {
                collab: 'Campaign Process',
                title: 'A platform building commerce, not just ads.',
                desc: 'Exposure alone is not enough. Applied Korea holds a pool of creators who drive actual purchase conversions through Live Commerce, Social Group Buying, and Branded Content.',
                features: {
                    matching: { title: 'Shoppable Content', desc: 'We produce content linked to purchase points, not just promo videos.' },
                    performance: { title: 'Guaranteed ROI', desc: 'We prove performance with ROI and ROAS as key KPIs, not just views.' },
                    partnership: { title: 'Scale-Up System', desc: 'Successful campaigns are immediately scaled up for greater revenue.' }
                },
                offering: {
                    title: 'Platform Features',
                    brands: { label: 'For brands', desc: 'Manage everything from campaign registration to creator selection and performance analysis.' },
                    creators: { label: 'For creators', desc: 'View purchasable campaigns in real-time and apply instantly.' }
                },
                application: {
                    title: 'Start Campaign',
                    subtitle: 'Start a successful campaign on the Applied Korea Platform.',
                    fields: {
                        company: 'Company/Brand Name',
                        contact: 'Contact Person',
                        email: 'Email',
                        budget: 'Expected Budget',
                        budget_placeholder: 'Select range',
                        message: 'Campaign Goals & Inquiry'
                    },
                    submit: 'Register Campaign',
                    sending: 'Registering...',
                    success: 'Campaign registered successfully!',
                    failure: 'Registration failed. Please try again.',
                    received: 'Campaign registered. Our team will review and notify you.'
                }
            },
            benefit: {
                tabs: {
                    incentive: 'Incentive',
                    tools: 'Tools'
                },
                policy: 'Fee Structure',
                title: 'Transparent Cost Structure.',
                desc: 'No hidden fees or opaque costs. Applied Korea clearly defines platform usage fees and matching commissions.',
                values: {
                    transparency: { title: 'Transparent Fees', desc: 'Reasonable fee structure that only occurs upon successful matching.' },
                    return: { title: 'Performance Incentives', desc: '100% of excess incentives go to the creator when goals are exceeded.' },
                    trust: { title: 'Settlement Reports', desc: 'All settlement details are disclosed in real-time via the dashboard.' }
                },
                principles: {
                    title: 'Platform Principles',
                    support: { title: 'Autonomy Guaranteed', desc: 'We do not interfere with content direction. We only suggest optimal brands.' },
                    profit: { title: 'Direct Deal Structure', desc: 'We aim for a direct deal structure where brands and creators meet most efficiently.' }
                },
                tools: {
                    title: 'Tech Solutions for Commerce',
                    desc: 'We provide various live commerce tools to increase conversion rates for free.',
                    soundboard: { title: 'Live Commerce Kit', desc: 'Commerce-specific overlays like purchase verification and time-sale countdowns.' },
                    reactionboard: { title: 'Order Tracker', desc: 'Visualizes real-time order status on screen to stimulate purchase psychology.' }
                }
            },
            home: {
                platform: {
                    badge: 'How It Works',
                    title: 'Get started in 3 simple steps',
                    steps: [
                        {
                            title: 'Register',
                            description: 'Sign up as a creator or brand on the platform.'
                        },
                        {
                            title: 'Match',
                            description: 'Get automatically matched with the best partners.'
                        },
                        {
                            title: 'Connect',
                            description: 'Communicate directly and lead your project to success.'
                        }
                    ]
                },
                creators: {
                    badge: 'Partners',
                    title: 'Creators are already earning revenue',
                    subtitle: 'No exclusivity needed. Turn your influence into a business.',
                    cta: 'View Partner List',
                    platforms: {
                        tiktok: 'TikTok Live',
                        youtube: 'YouTube',
                        instagram: 'Instagram',
                        threads: 'Threads'
                    },
                    status: {
                        available: 'Available',
                        busy: 'Campaign Active'
                    }
                },
                brands: {
                    badge: 'For Brands',
                    title: 'Influencer marketing without the agency',
                    subtitle: 'Replace agency meetings and complex contracts with a few clicks.',
                    values: [
                        {
                            title: 'Verified Data',
                            description: 'We provide actual reach and conversion data with fake numbers removed.'
                        },
                        {
                            title: 'Direct Connect',
                            description: 'Propose directly to creators and communicate freely.'
                        },
                        {
                            title: 'Safe Payment',
                            description: 'Escrow payment protects your budget until results are confirmed.'
                        }
                    ],
                    cta: 'Register Brand'
                },
                why: {
                    badge: 'Why Platform',
                    title: 'Why Platform over Agency?',
                    comparison: [
                        {
                            label: 'Relationship',
                            old: 'Management (Exclusive)',
                            new: 'Open Partnership (Free)'
                        },
                        {
                            label: 'Revenue',
                            old: 'High Revenue Share',
                            new: 'Reasonable Platform Fee'
                        },
                        {
                            label: 'Work Style',
                            old: 'Passive (Do as told)',
                            new: 'Active (Choose what you want)'
                        },
                        {
                            label: 'Scalability',
                            old: 'Limited to Platform',
                            new: 'Multi-Channel Commerce'
                        }
                    ],
                    footer: 'The future of creator commerce lies in connection, not management.'
                },
                application: {
                    title: 'Join the Platform',
                    subtitle: 'Seize the opportunity with nothing to lose.',
                    desc: 'No fee. No exclusivity. Just opportunities.',
                    fields: {
                        platform: 'Main Channel',
                        category: 'Main Category',
                        experience: 'Commerce Experience',
                        submit: 'Start for Free',
                        success: 'Registration complete! Check your dashboard for matches.'
                    },
                    platforms: ['TikTok', 'YouTube', 'Instagram', 'Threads', 'Other'],
                    categories: ['Beauty', 'Fashion', 'Food', 'Lifestyle', 'Tech', 'Gaming', 'Other']
                },
                about: {
                    badge: 'Our Philosophy',
                    items: [
                        { title: 'Transparency', description: 'We disclose all data and revenue structures transparently.' },
                        { title: 'Data-Driven', description: 'We prove results with data, not gut feelings or connections.' },
                        { title: 'Borderless', description: 'We expand commerce beyond borders and platforms.' }
                    ],
                    statement: 'We are not a management company.<br/>We are a <b>Business Partnership Platform</b>.'
                }
            }
        }
    },
    // Minimal placeholders for RU/ID to avoid errors, mirroring EN for now to save space/time as user requested minimal effort on other langs
    RU: {
        translation: {
            nav: { home: 'Главная', studio: 'Студия', brand: 'Бренд', benefit: 'Преимущества', creatorCase: 'Кейсы', application: 'Подать заявку' },
            hero: { badge: 'Рост за пределами платформы', title: 'Applied Korea Studio', subtitle: 'Студия для авторов, растущих за пределами платформ.', desc: 'Мы общаемся прозрачно и честно с авторами и брендами.', stats: { views: 'Всего просмотров', collabs: 'Коллаборации' } },
            tabs: { creators: { title: 'Creators', items: { 0: 'Различные решения...', 1: 'Выплата стимулов...', 2: 'Поддержка брендов...' } }, brands: { title: 'Brands', items: { 0: 'Прямая связь...', 1: 'Коллаборации...', 2: 'Партнерства...' } }, studio: { title: 'Studio', items: { 0: 'Философия...', 1: 'Структура...', 2: 'Каналы роста...' } }, influencers: { title: 'Current Influencers', next: { name: 'Кто следующий?', role: 'Это можете быть вы.' } } },
            studio: { identity: 'Studio Identity', title: 'Applied Korea был запущен для устойчивого влияния.', desc: 'Мы снижаем нагрузку от ежедневных трансляций...', values: { growth: { title: 'Устойчивый рост', desc: 'Мы стремимся к росту каналов...' }, operation: { title: 'Работа без нагрузки', desc: 'Систематическая работа...' }, potential: { title: 'Раскрытие потенциала', desc: 'Мы развиваем уникальный потенциал...' } }, partnership: { title: 'Как мы строим партнерство', desc: 'Мы сотрудничаем глубоко...', creators: { label: 'Для авторов', desc: 'Вместе стратегии роста...' }, brands: { label: 'Для брендов', desc: 'Долгосрочные коллаборации...' } } },
            brand: { collab: 'Brand Collaboration', title: 'Естественное соединение брендов и авторов.', desc: 'Анализ характеристик канала...', features: { matching: { title: 'Точный подбор', desc: 'Тон контента, целевая аудитория...' }, performance: { title: 'Ориентация на результат', desc: 'Четкие цели и KPI...' }, partnership: { title: 'Долгосрочное партнерство', desc: 'Доверие к бренду...' } }, offering: { title: 'Что мы предлагаем', brands: { label: 'Для брендов', desc: 'Полный сервис...' }, creators: { label: 'Для авторов', desc: 'Направление коллабораций...' } } },
            benefit: { policy: 'Benefit Policy', title: 'Какие преимущества предлагает Applied Korea?', desc: 'Награды агентства делятся с авторами...', values: { transparency: { title: 'Полная прозрачность', desc: 'Четкое раскрытие деталей...' }, return: { title: 'Честный возврат', desc: 'Возврат результатов автору...' }, trust: { title: 'Работа на доверии', desc: 'Снижение расходов, доверие...' } }, principles: { title: 'Принципы Applied Korea', support: { title: 'Возврат поддержки', desc: 'Прозрачная структура...' }, profit: { title: '100% гарантия дохода', desc: 'Доход принадлежит автору...' } } }
        }
    },
    ID: {
        translation: {
            nav: { home: 'Beranda', studio: 'Studio', brand: 'Merek', benefit: 'Manfaat', creatorCase: 'Kasus Kreator', application: 'Daftar Sekarang' },
            hero: { badge: 'Pertumbuhan di Luar Platform', title: 'Applied Korea Studio', subtitle: 'Studio bagi kreator yang tumbuh melampaui platform.', desc: 'Kami berkomunikasi secara transparan dan jujur.', stats: { views: 'Total Tayangan', collabs: 'Kolaborasi Merek' } },
            tabs: { creators: { title: 'Creators', items: { 0: 'Berbagai solusi...', 1: 'Pembayaran insentif...', 2: 'Dukungan merek...' } }, brands: { title: 'Brands', items: { 0: 'Hubungan langsung...', 1: 'Kolaborasi produk...', 2: 'Kemitraan...' } }, studio: { title: 'Studio', items: { 0: 'Filosofi operasional...', 1: 'Struktur sistem...', 2: 'Saluran pertumbuhan...' } }, influencers: { title: 'Current Influencers', next: { name: 'Siapa selanjutnya?', role: 'Bisa jadi Anda.' } } },
            studio: { identity: 'Studio Identity', title: 'Applied Korea diluncurkan untuk influencing berkelanjutan.', desc: 'Kami mengurangi beban live streaming harian...', values: { growth: { title: 'Pertumbuhan Berkelanjutan', desc: 'Kami bertujuan untuk pertumbuhan jangka panjang...' }, operation: { title: 'Operasi Bebas Beban', desc: 'Melindungi energi kreator...' }, potential: { title: 'Memperluas Potensi', desc: 'Mengembangkan potensi unik...' } }, partnership: { title: 'Cara Kami Membangun Kemitraan', desc: 'Kolaborasi mendalam...', creators: { label: 'Untuk kreator', desc: 'Strategi pertumbuhan bersama...' }, brands: { label: 'Untuk merek', desc: 'Kolaborasi merek jangka panjang...' } } },
            brand: { collab: 'Brand Collaboration', title: 'Menghubungkan merek dan kreator secara alami.', desc: 'Analisis karakteristik saluran...', features: { matching: { title: 'Pencocokan Tepat', desc: 'Nada konten, target audiens...' }, performance: { title: 'Berorientasi Kinerja', desc: 'Tujuan kampanye jelas...' }, partnership: { title: 'Kemitraan Jangka Panjang', desc: 'Kepercayaan merek...' } }, offering: { title: 'Apa yang Kami Tawarkan', brands: { label: 'Untuk merek', desc: 'Layanan lengkap...' }, creators: { label: 'Untuk kreator', desc: 'Arah kolaborasi...' } } },
            benefit: { policy: 'Benefit Policy', title: 'Apa manfaat yang ditawarkan Applied Korea?', desc: 'Berbagi imbalan agensi dengan kreator...', values: { transparency: { title: 'Transparansi Penuh', desc: 'Pengungkapan detail...' }, return: { title: 'Pengembalian Adil', desc: 'Mengembalikan hasil ke kreator...' }, trust: { title: 'Operasi Berbasis Kepercayaan', desc: 'Mengurangi biaya, kepercayaan...' } }, principles: { title: 'Prinsip Applied Korea', support: { title: 'Pengembalian Pendapatan', desc: 'Struktur transparan...' }, profit: { title: 'Jaminan Pendapatan 100%', desc: 'Pendapatan milik kreator...' } } }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'KR', // default language
        fallbackLng: 'EN',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
