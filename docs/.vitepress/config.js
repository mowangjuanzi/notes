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
            copyright: 'Copyright © 2022-present 魔王卷子'
        },
        nav: [
            { text: 'C语言', link: '/c/index', activeMatch: '/c/'},
        ],
        sidebar: {
            "/c/": [
                {
                    text: "C语言",
                    items: [
                        {
                            text: "开始", link: "/c/index"
                        }
                    ]
                }
            ],
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/mowangjuanzi/notes'
            },
        ]
    }
}
