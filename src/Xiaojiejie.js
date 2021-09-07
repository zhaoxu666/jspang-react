import React, { Component, Fragment } from "react";
import './style.css'

// Fragment 标签表示无意义标签且在浏览器中不会渲染
class Xiaojiejie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                {/* 添加注释正确写法 */}
                {
                    // 单行注释写法  不推荐
                }
                <div>
                    <label htmlFor="jspang">增加服务</label>
                     {/* class 要用 className */}
                    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange}/>
                    <button onClick={this.handleAdd}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // dangerouslySetInnerHTML 用于解析html字符串
                                <li
                                  key={index}
                                  onClick={this.handleDelete.bind(this, index)}
                                  dangerouslySetInnerHTML={{__html: item}}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleAdd = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleDelete (index){
        // 不能直接操作 this.state.list, 会影响性能。
        const {list} = this.state
        list.splice(index, 1)
        this.setState(
            list
        )
    }
}

export default Xiaojiejie