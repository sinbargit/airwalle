import React from 'react';
import { render } from 'react-dom'
import Header from './header'
import Footer from './footer'
import Content from './content'
import './reset.css'

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    }
}
render(
    <div><Home /></div>,
    document.getElementById('root')
)

export default Home