import React from "react";

/**
 * 服务器渲染：home constructor
 home componentWillMount
 home render

 客户端：从constructor走全程
 */
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log("home constructor")
        this.state = {
            text: "初始值",
        }
    }

    componentWillUnmount() {
        console.log("home componentWillUnmount")
    }

    componentWillMount() {
        console.log("home componentWillMount")
    }

    componentDidMount() {
        console.log("home didmount")

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("home componentDidUpdate")
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("home componentWillUpdate")
    }

    render() {
        console.log("home render")
        let {text} = this.state;
        return (
            <div>
                <span onClick={this.click}>{text}</span>
            </div>
        )
    }


    click = () => {
        this.setState(() => {
            return {
                text: "更新值了"
            }
        })
    }

}


/****
 现在的任务就是将它转换为html代码返回给浏览器。
 总所周知，JSX中的标签其实是基于虚拟DOM的，
 最终要通过一定的方法将其转换为真实DOM。
 *****/