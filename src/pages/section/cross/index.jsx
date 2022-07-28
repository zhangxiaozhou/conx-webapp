import { Row, Col, Form, Input, Button, Select } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRefModels, getCrossSectionByStation } from '../../../service/http'

import './index.scss'

export default function CrossSection() {

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

        const getCrossSectionParam = {
            companyProject: selectedProject,
            refModel: selectedModel,
            dStation: formRef.current.getFieldValue("dStation"),
            deltaS: 1
        }

        console.log(getCrossSectionParam)

        getCrossSectionByStation(getCrossSectionParam).then(res => {
            console.log(res)

            setCrossSectionData(res)
        })
    }

    const calColor = (passCount) => {
        if (passCount == 1) {
            return '#DDDDDD'
        } else if (passCount == 2) {
            return '#FFFC54'
        } else if (passCount == 3) {
            return '#9EF64D'
        } else if (passCount <= 4 && passCount >= 5) {
            return '#F0855B'
        } else if (passCount >= 6) {
            return '#001FC5'
        }
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

                        <Form.Item name="dStation" label="横切位置" rules={[{ required: true }]}>
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
                                <div
                                    key={item.name + ':' + index}
                                    style={{
                                        width: item.calWidth,
                                        height: item.calHeight,
                                        position: 'absolute',
                                        backgroundColor: calColor(item.passCount),
                                        left: item.xposition + 1300,
                                        top: item.yposition - 2100,
                                        border: '1px',
                                        borderColor: '#ffffff',
                                        borderStyle: "solid"
                                    }}>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
} 