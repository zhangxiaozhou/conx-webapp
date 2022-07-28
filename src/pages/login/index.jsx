import React from 'react';
import { Button, Form, Input, Col, Row, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { loginApi, actions } from '../../redux/features/user/userInfoSlice'
import { useNavigate } from "react-router-dom";

export default function Login() {

  const userInfo = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()

  const formRef = React.createRef()
  
  let navigate = useNavigate()
  
  const submitLogin = async ()=>{
    const loginParam = {
      username: formRef.current.getFieldValue("username"),
      password: formRef.current.getFieldValue('password')
    }
    
    await dispatch(loginApi(loginParam))

    if(userInfo.userToken != null){
      sessionStorage.setItem('userToken', userInfo.userToken)
      navigate('/', {replace: true})
    } 
  }

  return (
    <Row type="flex" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={10} offset={6}>
        <Form
          ref={formRef}
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

          <Form.Item style={{ textAlign: 'center' }} wrapperCol={{ offset: 8, span: 16 }}>
            <Space size={20}>
              <Button type="primary" htmlType="submit" onClick={() => (submitLogin())}> 提交 </Button>
              <Button type="primary" htmlType="reset"> 重置 </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
