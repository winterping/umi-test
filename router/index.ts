import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

export const IndexRoute = {
    path: '/',
    component: '@/layouts/index',
    routes: [
        { path: '/echart', component: '@/pages/echart/index', icon: PieChartOutlined, name: 'echart图表' },
        { path: '/g2', component: '@/pages/g2/index', icon: DesktopOutlined, name: 'g2图表' },
        { path: '/hooks', component: '@/pages/testhooks/index', icon: TeamOutlined, name: 'hooks的使用' },
        { path: '/demo', component: '@/pages/demo/index', icon: UserOutlined, name: '常用组件' },
        { path: '/drag', component: '@/pages/drag/index', icon: FileOutlined, name: '可视化拖拽' },
        { path: '/game', component: '@/pages/game/index', icon: FileOutlined, name: '俄罗斯方块' },
        { path: '/space', component: '@/pages/space/test', icon: FileOutlined, name: 'Space组件' },
        // { path: '/dataV', component: '@/pages/dataV/index', icon: FileOutlined, name: '数据大屏' },
        // { path: '/fullScreen', component: '@/pages/fullScreen/index', icon: FileOutlined, name: '全屏' },
    ],
}
