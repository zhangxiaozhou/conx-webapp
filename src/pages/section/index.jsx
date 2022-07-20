import React from 'react';

import { Link } from 'react-router-dom' 
import { Outlet } from 'react-router-dom'
 
class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to='cross'>cross</Link> |{" "}
                    <Link to='vertical'>vertical</Link>  
                </nav> 

                <Outlet/>
            </div>
        )
    }
}

export default Section