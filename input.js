import React from 'react'

export default class Input extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = JSON.parse(JSON.stringify(this.props));
    }
    handleChange(event)
    {
        this.setState({value:event.target.value})
        if(this.props.check==="name")
        {
            const exp = new RegExp('^[A-Za-z]{3,}$')
            const msg = !event.target.value.match(exp)?"please check you name":"";
            this.props.handleSend(event.target.value.match(exp),{msg,"name":event.target.value})
        }
        if(this.props.check==="email")
        {
            const exp = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,8})$')
            const msg = !event.target.value.match(exp)?"please check you email":"";
            this.props.handleSend(event.target.value.match(exp),{msg,"email":event.target.value})
        }
        if(this.props.check==="confirm")
        {
            const msg = event.target.value!==this.props.confirm?"please check you confirm email":"";
            this.props.handleSend(event.target.value===this.props.confirm,{msg,"confirm":event.target.value})
        }

    }
    render(){
        if(this.props.type==="text")
        {
            return <div className={this.props.className}>
                <input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={(...args)=>{this.handleChange(...args)}}/>
            </div>
        }
        else if(this.props.type==="button")
        {
            return <div className={this.props.className} onClick={this.props.handleClick}>{this.props.value}</div>
        }
        return null;
    }
}
