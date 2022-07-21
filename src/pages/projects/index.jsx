import React from "react";
import { Divider, Card, Row, Col } from 'antd'

import './index.scss'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="projects">
                <div className="title">
                    <span>工程列表</span>
                </div>
                <Divider />
                <div className="project-item">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Test Project China Smart MC - 2" bordered={false}>
                                <div>TEMCJ</div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="TestProjectChinaSmartMC" bordered={false}>
                                <div>TESRB</div>
                            </Card>
                        </Col> 
                    </Row>
                </div>
            </div>
        )
    }
}

export default Projects