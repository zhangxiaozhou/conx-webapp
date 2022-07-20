import { Layout } from 'antd';
import React from 'react';

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
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home