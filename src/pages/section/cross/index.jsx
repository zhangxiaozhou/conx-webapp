import { Row, Col, Form, Input, Button, Select } from "antd";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
  
export default function CrossSection() { 

    const { Option } = Select;

    const projects = useSelector((state) => state.userInfo.projects);

    const selectProject = (item)=>{
        console.log('select project' + item)
    }
    
    return (
        <div>
            <Row>
                <Col span={16} offset={6}>
                    <Form layout='inline' >

                        <Form.Item name="project" label="项目" rules={[{ required: true }]}>
                            <Select onChange={ selectProject }
                                placeholder="请选择工程" 
                                allowClear >  
                            {
                                projects.map( (item, key)=>{
                                    console.log('key   '  + key)
                                    return (
                                        <Option key={key} value={item.project.key}> {item.name} </Option>
                                    )
                                })
                            } 
                            </Select>
                        </Form.Item>

                        <Form.Item name="model" label="模型" rules={[{ required: true }]}>
                            <Select
                                placeholder="请选择模型"  allowClear > 
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