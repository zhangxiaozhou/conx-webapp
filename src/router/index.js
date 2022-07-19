import Login from '../pages/login'
import Home from '../pages/home'
import Section from '../pages/section'

let routes = [
    {
        path: "/login",
        component: Login,
        exact: true 
    },
    {
        path: "/home",
        component: Home,
        routes: [
            {
                path: '/home/section',
                component: Section
            }
        ]
    }
]

export default routes 