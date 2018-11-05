import React from 'react'
import Input from './input'
import Info from './info'
import './dashbord.css'

export default class Dashbord extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={hidden:true}
    }
    handleClick(event)
    {
        this.setState({hidden:false})
    }
    handleClose(event)
    {
        if(event.target.classList[0]==='info'){
            this.setState({hidden:true})
        }
    }
    render(){
        return <div className="dashbord">
            <div className="title">A better way<br/>to enjoy every day.</div>
            <div className="desc">Be the first to know when we launch</div>
            <Input className="join" handleClick={(...args)=>this.handleClick(...args)} type="button" value="Request an invite"/>
            <Info handleClose={(...args)=>this.handleClose(...args)} hidden={this.state.hidden}/>
        </div>
    }
}