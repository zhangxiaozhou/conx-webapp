import React from 'react';

import { Layout, Avatar, Image, Row, Col } from 'antd';
import { Link, Outlet } from "react-router-dom"

import logoImg from '../../assets/images/red-logo@2x.png'
import './index.scss'

import ConxMenu from '../../components/menu'

const { Header, Footer, Sider, Content } = Layout;

class HomeLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout className='rootContent' >
                <Sider style={{margin: '0 3px 0 0'}}> 
                    <Link to="/"><div className='logo'>
                        <img alt={'山推'} src={logoImg} />
                    </div></Link>
 
                    < ConxMenu />
                </Sider>
                <Layout>
                    <Header style={{ height: 66 }}>
                        <Row>
                            <Col span={23} order={1}>
                                <span style={{fontSize: '20px', fontFamily:'serif'}}>山推智慧施工平台</span>
                            </Col>
                            <Col span={1} order={2}>
                                <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
                            </Col>
                        </Row>
                    </Header>
                    <Content className='rootContent'>
                        <Outlet />
                    </Content>
                    <Footer> 
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default HomeLayout