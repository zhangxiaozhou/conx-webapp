import Login from '../pages/login'
import Home from '../pages/home'

import Section from '../pages/section' 
import CrossSection from '../pages/section/cross'
import VerticalSection from '../pages/section/vertical'

import Projects from '../pages/projects'
import Demo from '../pages/demo'

let routes = [
    {
        path: '/login', element: <Login />
    },
    {
        path: "/", element: <Home />,
        children: [ 
            { index: true, element: <Projects /> },
            {
                path: "section", element: <Section />,
                children: [
                    {
                        index: true,
                        element: <CrossSection />
                    },
                    {
                        path: 'cross',
                        element: <CrossSection />
                    },
                    {
                        path: "vertical", 
                        element: <VerticalSection />
                    }
                ]
            },
            { path: 'projects', element: <Projects /> },
            { path: 'demo', element: <Demo/>}
        ],
    }
]

export default routes