module.exports = {
    base: '/docs/',
    title: 'docs',
    description: 'Vuepress blog demo',
    themeConfig: {
       /*
        可以放一些其他网站链接
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/olivivian/docs.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',*/
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/md/Hello.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/md/Hello.md', 'Hello Word']
        ]
    }
}
