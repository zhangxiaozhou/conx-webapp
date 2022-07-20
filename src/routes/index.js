import Login from '../pages/login'
import Home from '../pages/home'

import Section from '../pages/section' 
import CrossSection from '../pages/section/cross'
import VerticalSection from '../pages/section/vertical'

import Demo from '../pages/demo'

let routes = [
    {
        path: '/login', element: <Login />
    },
    {
        path: "/", element: <Home />,
        children: [
            {
                path: "section", element: <Section />,
                children: [
                    {
                        path: "cross", element: <CrossSection />
                    },
                    {
                        path: "vertical", element: <VerticalSection />
                    }
                ]
            },
            { path: "demo", element: <Demo /> }
        ],
    }
]

export default routes