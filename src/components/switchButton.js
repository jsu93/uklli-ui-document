import React, {Component} from 'react';
import propTypes from 'prop-types';
import {SwitchBtn} from 'ukelli-ui';
//import SwitchBtn from "../example/switch.button.js"
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.onSwitch = this.onSwitch.bind(this);
    this.state = {
      activeIdx : '0',
    }
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   onSwitch() {
     var activeIdx = this.state.activeIdx;
     switch (activeIdx) {
       case '0':
         activeIdx = '1';
         break;
       case '1':
          activeIdx = '0';
          break;
       default:
     }
     this.setState({
       activeIdx : activeIdx,
     })
     console.log(this.state.activeIdx);
   }
  render() {
    var onSwitch = this.onSwitch;
    var {activeIdx} = this.state;
    var btns = {
      0: 'btn1',
      1: 'btn2',
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="switchButton">SwitchButton组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;SwitchBtn} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明</div>
        <div className="item-content">
          <table className='item-table'>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>示例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>btns</td>
                <td>定义btn显示值</td>
                <td>object</td>
                <td>btns=&#123;btns}</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用。</td>
                <td>bool</td>
                <td>disabled=&#123;true}</td>
              </tr>
              <tr>
                <td>onSwitch</td>
                <td>改变选择返回值。</td>
                <td>func</td>
                <td>onSwitch=&#123;(...args)=>console.log(...args)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用SwitchBtn组件</div>
            <div className="item-border">
               <SwitchBtn btns={btns} unique={false} activeIdx={activeIdx} onSwitch={onSwitch}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.onSwitch = this.onSwitch.bind(this);<br/>
                   &nbsp;this.state = &#123;<br/>
                   &nbsp; activeIdx: '0',<br/>
                   &nbsp;}<br/>
                   }<br/>

                   onSwitch(obj) &#123;<br/>
                   &nbsp;var activeIdx = this.state.activeIdx;<br/>
                   &nbsp;switch (activeIdx) &#123;<br/>
                   &nbsp;  case '0':<br/>
                   &nbsp;    activeIdx = '1';<br/>
                   &nbsp;    break;<br/>
                   &nbsp;  case '1':<br/>
                   &nbsp;    activeIdx = '0';<br/>
                   &nbsp;    break;<br/>
                   &nbsp;  default:<br/>

                   &nbsp;this.setState(&#123;<br/>
                   &nbsp; activeIdx : activeIdx,<br/>
                   &nbsp;})<br/>
                   &nbsp;console.log(this.state.activeIdx);<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var &#123;activeIdx} = this.state;<br/>
                   &nbsp;var btns = [<br/>
                   &nbsp; &#123;0:'btn1'},<br/>
                   &nbsp; &#123;1:'btn2'},<br/>
                   ]<br/>
                   &nbsp;var onSwitch = this.onSwitch;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<SwitchBtn'} btns=&#123;btns} activeIdx=&#123;activeIdx} onSwitch=&#123;onSwitch}/><br/>
                  &nbsp;)<br/>
                 }
                </code>
              </pre>
            </div>
        </div>
      </div>
    )
  }
}
