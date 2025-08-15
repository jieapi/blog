import { BlogTheme as DefaultTheme } from '@sugarat/theme';

// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'


import type { Theme as ThemeConfig } from 'vitepress'
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export const BlogTheme: ThemeConfig = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(NolebaseGitChangelogPlugin)
    },
}


export default BlogTheme

