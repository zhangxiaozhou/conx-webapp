import { Layout } from 'antd';
import React from 'react';
<<<<<<< HEAD
import { NavLink,Outlet } from "react-router-dom"
=======
import { Outlet } from 'react-router-dom';
>>>>>>> 4a1d160baf0d39e31269d8982c8ba0580d4c5b9b

const { Header, Footer, Sider, Content } = Layout;



class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
<<<<<<< HEAD
                    <Content> 
                        <Outlet></Outlet>
=======
                    <Content>
                        <Outlet/>
>>>>>>> 4a1d160baf0d39e31269d8982c8ba0580d4c5b9b
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home