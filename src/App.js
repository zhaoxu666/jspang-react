import React, {Component} from "react";

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{ false ? 'JSPang.com': '技术胖'}</li>
                <li>I Love React</li>
            </ul>
        )
    }
}

export default App