export default {
    lang: "zh-CN",
    title: '学习笔记',
    description: '学习笔记',
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/mowangjuanzi/notes/tree/main/docs/:path',
            text: '在 GitHub 编辑此页'
        },
        footer: {
            message: '<a href="https://beian.miit.gov.cn/">鲁ICP备13027795号-1</a>',
            copyright: 'Copyright © 2022-2023 魔王卷子'
        },
        nav: [
            { text: 'C 语言', link: '/c/index', activeMatch: '/c/' },
            { text: 'PHP', link: '/php/index', activeMatch: '/php/' },
        ],
        sidebar: {
            "/c/": [
                {
                    text: "C 语言",
                    items: [
                        {
                            text: "开始", link: "/c/start"
                        },
                        {
                            text: "基础", link: "/c/basic"
                        },
                        {
                            text: "类型", link: "/c/type"
                        }
                    ]
                }
            ],
            "/php/": [
                {
                    text: "PHP",
                    items: [
                        {
                            text: "开始", link: "/php/start"
                        },
                        {
                            text: "ZVAL", link: "/php/zval"
                        }
                    ]
                }
            ],
            "/rust/": [
                {
                    text: "Rust",
                    items: [
                        {
                            text: "开始", link: "/rust/start"
                        },
                        {
                            text: "安装", link: "/rust/install"
                        },
                        {
                            text: "基础", link: "/rust/basic"
                        },
                    ]
                }
            ],
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/mowangjuanzi/notes'
            },
        ],
        lastUpdatedText: '最后更新'
    },
    markdown: {
        lineNumbers: true
    }
}
