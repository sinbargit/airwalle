import React from 'react'
import Input from './input'
import './info.css'

export default class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            confirm: "",
            btn: "Send",
            msg: "",
            canSend:"",
            allDone:false
        }
    }

    handleSend(confirm,msg)
    {
        this.setState(msg,()=>{
            if(confirm)
            {
                if(this.state.name&&this.state.email&&this.state.confirm)
                {
                    this.setState({canSend:"can-send"})
                }
            }
        })
    }
    send(){
        if(!this.state.canSend)
            return
        this.setState({btn:"Sending,please wait..."})
        fetch('http://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            //credentials: 'include',
            body: JSON.stringify({name:this.state.name,email:this.state.email}),
        }).then((res) => {
            return res.json()
        }).then((json)=>{
            console.log(JSON.stringify(text))
            if(json.code===200)
            {
                this.state({allDone:true});
            }
            else
            {
                this.handleSend(true,json.msg)
            }
        }).catch(err => console.log(err))
    }
    render() {
        if(this.state.allDone)
        {
            return <div className="info" onClick={this.props.handleClose} style={{visibility:this.props.hidden?'hidden':'visible'}}>
                <div className="container">
                    <div className="title">
                        <div className="msg">All done!</div>
                        <div className="line"></div>
                    </div>
                    <div className="desc">You will be one of the first to experience <br/> Brpccoli & Co. When we launch</div>
                    <Input type="button" handleClick={this.props.handleClose} className="btn" value="close"/>
                </div>
            </div>
        }
        return <div className="info" onClick={this.props.handleClose} style={{visibility:this.props.hidden?'hidden':'visible'}}>
                <div className="container">
                    <div className="title">
                        <div className="msg">Request an invite</div>
                        <div className="line"></div>
                    </div>
                    <Input type="text" handleSend={(...args)=>this.handleSend(...args)} check="name" placeholder="Full name" value={this.state.name}/>
                    <Input type="text" handleSend={(...args)=>this.handleSend(...args)} check="email" placeholder="Email"  value={this.state.email}/>
                    <Input type="text" handleSend={(...args)=>this.handleSend(...args)} check="confirm" confirm={this.state.email} placeholder="Confirm email" value={this.state.confirm}/>
                    <Input type="button" handleClick={()=>this.send()} className={`btn ${this.state.canSend}`} value={this.state.btn}/>
                    <div className="alert">{this.state.msg}</div>
                </div>
        </div>
    }
}