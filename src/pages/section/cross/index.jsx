import { Row, Col, Form, Input, Button, Select } from "antd";
import React from "react";

const { Option } = Select;
 
class CrossSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} offset={8}>
                        <Form layout='inline' >
                            <Form.Item name="gender" label="模型" rules={[{ required: true }]}>
                                <Select
                                    placeholder="请选择模型" 
                                    allowClear
                                >
                                    <Option value="male">malemalemalemalemale</Option>
                                    <Option value="female">female</Option> 
                                </Select>
                            </Form.Item>

                            <Form.Item name="" label="横切位置" rules={[{ required: true }]}>
                                <Input placeholder="请输入位置" />
                            </Form.Item>
                            <Form.Item  >
                                <Button type="primary">查询</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row> 
            </div>
        )
    }
}

export default CrossSection