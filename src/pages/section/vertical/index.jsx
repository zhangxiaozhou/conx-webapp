import { Row, Col, Form, Input, Button, Select } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRefModels, getVerticalSectionByStation } from '../../../service/http'

import './index.scss'

export default function VerticalSection(){
    const { Option } = Select;

    const formRef = React.createRef()

    const projects = useSelector((state) => state.userInfo.projects)

    const [models, setModels] = useState([]);

    const [crossSectionData, setCrossSectionData] = useState({ cgPoints: [] })

    const selectProject = (item) => {
        console.log('select project' + item)

        setModels([])

        const queryRefModelParam = { 'projectUuid': item }
        getRefModels(queryRefModelParam).then(res => {
            setModels(res)
        })
    }

    const getCrossSection = (item) => {

        setCrossSectionData({ cgPoints: [] })

        const selectedProjectUUID = formRef.current.getFieldValue('project')
        const selectedModelUUID = formRef.current.getFieldValue('model')

        let selectedProject = null
        for (let [index, val] of projects.entries()) {
            if (val.uuid === selectedProjectUUID) {
                selectedProject = val
                break;
            }
        }

        let selectedModel = null
        for (let [index, val] of models.entries()) {
            if (val.uuid === selectedModelUUID) {
                selectedModel = val
                break;
            }
        }

        const getVertiaclSectionParam = {
            companyProject: selectedProject,
            refModel: selectedModel,
            dOffset: formRef.current.getFieldValue("dOffset"),
            deltaS: 3
        }

        console.log(getVertiaclSectionParam)

        getVerticalSectionByStation(getVertiaclSectionParam).then(res => {
            console.log(res)

            setCrossSectionData(res)
        })
    }

    const calColor = (passCount) => { 
        let color = '#DDDDDD'

        if (passCount === 1) {
            color = '#DDDDDD'
        } else if (passCount === 2) {
            color = '#FFFC54'
        } else if (passCount === 3) {
            color = '#9EF64D'
        } else if (passCount <= 4 && passCount >= 5) {
            color = '#F0855B'
        } else if (passCount >= 6) {
            color = '#001FC5'
        } 
        return color
    }

    return (
        <div className="crossSection">
            <Row>
                <Col offset={6} span={16}>
                    <Form layout='inline' ref={formRef} >
                        <Form.Item name="project" label="工程" rules={[{ required: true }]}>
                            <Select onChange={selectProject}
                                placeholder="请选择工程"
                                allowClear >
                                {
                                    projects.map((item, index) => {
                                        return (
                                            <Option key={item.uuid} value={item.uuid}> {item.name} </Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item name="model" label="模型" rules={[{ required: true }]}>
                            <Select placeholder="请选择模型" allowClear >
                                {
                                    models.map((item, index) => {
                                        return (
                                            <Option key={item.uuid} value={item.uuid}> {item.name} </Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item name="dOffset" label="纵切位置" rules={[{ required: true }]}>
                            <Input placeholder="请输入位置" />
                        </Form.Item>
                        <Form.Item  >
                            <Button type="primary" onClick={getCrossSection}>查询</Button>
                        </Form.Item>
                    </Form>
                </Col> 
            </Row>

            <div className="canvas"> 
                { 
                    crossSectionData.cgPoints.map((item, index) => {
                        return ( 
                            item.calWidth == 0 || item.calHeight == 0 ? '' :
                                <span
                                    key={item.name + ':' + index}
                                    style={{
                                        display:'inline-block',
                                        width: item.calWidth,
                                        height: item.calHeight,
                                        position: 'absolute',
                                        backgroundColor: calColor(item.passCount),
                                        left: item.xposition - crossSectionData.x0 + 10,
                                        top: item.yposition - crossSectionData.y0 + 200,  
                                        borderTop: '3px solid white', 
                                        borderRight: '1px solid white'
                                    }}> 
                                </span>
                        )
                    })
                }
            </div>

        </div>
    )
}
 