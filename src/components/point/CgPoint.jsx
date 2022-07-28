import React from "react";
import './CgPoint.module.sass'

class CgPoint extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            point: props.point,
            xTrans: props.xTrans,
            yTrans: props.yTrans,
            zoom: props.zoom
        }
    }

    calColor(passCount){
        if(passCount==1){
            return '#DDDDDD'
        }else if(passCount==2){
            return '#FFFC54'
        }else if(passCount==3){
            return '#9EF64D'
        }else if(passCount<=4 && passCount>=5){
            return '#F0855B'
        }else if(passCount>=6){
            return '#001FC5'
        }
    }

    render(){
        return (
            <div style={{position: absolution}}></div>
        )
    }
}