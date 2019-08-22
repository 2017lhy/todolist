import React,{Component} from 'react'

class Test extends Component {
    // 当父组件的render被重新执行，子组件的render也会被重新执行
    render(){
        return(
        <div>{this.props.content}</div>
        )
    }
}

export default Test