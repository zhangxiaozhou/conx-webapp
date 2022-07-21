import { Layout } from 'antd';
import React from 'react'; 
import { NavLink,Outlet } from "react-router-dom"
  
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
                    <Content>
                        <Outlet/> 
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home