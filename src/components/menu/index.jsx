import React from "react"; 
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const items = [
    { 
        label: '数据分析', 
        key: 'item-1',
        children: [
            { 
                label: <Link to="/section">路基分析</Link>, 
                key: 'submenu-item-1' 
            }], 
    },  
    { 
        label: <Link to="/demo">测试页面</Link>, 
        key: 'item-2' }
];

class ConxMenu extends React.Component {

    onClick = (e) => {
        console.log('click ', e);
    };
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){
        console.log('菜单加载前')
    }

    render() {
        return (
            <Menu onClick={this.onClick} mode="inline" items={items} />
        )
    }
}

export default ConxMenu



