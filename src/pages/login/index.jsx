import React from 'react'
import { Button, Checkbox, Form, Input, Col, Row, Space } from 'antd';
 
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row type="flex" align="middle" style={{minHeight:'100vh'}}>
        <Col span={10} offset={6}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>
 
            <Form.Item style={{textAlign:'center'}} wrapperCol={{ offset: 8, span: 16 }}>
              <Space size={20}>
                <Button type="primary" htmlType="submit"> 提交 </Button>
                <Button type="primary" htmlType="reset"> 重置 </Button>
              </Space> 
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Login