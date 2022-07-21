import React from 'react';

import { Link, Outlet } from 'react-router-dom' 
import { Button } from 'antd';

import './index.scss'
 
class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='section'>
                <div>
                    <nav>
                        <Link to='cross'>
                            <Button>横断面</Button>
                        </Link> 
                        <Link to='vertical'>
                            <Button>纵断面</Button>
                        </Link> 
                    </nav> 
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>
        )
    }
}

export default Section