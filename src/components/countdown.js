import React, {Component} from 'react';
import propTypes from 'prop-types';
//import Countdown from '../example/countdown/countdown.js';
import {Countdown} from 'ukelli-ui';
export default class CountdownBgExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }

   printObj() {
     console.log('倒计时结束');
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printObj = this.printObj;
    var self = this;
    return (
      <div className="avator">
        <div className="item-title"><a name="countdownBg">Countdown组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Countdown} from 'ukelli-ui'; <br/>
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
                <td>start</td>
                <td>倒计时时间，单位毫秒。</td>
                <td>number</td>
                <td>freq=&#123;60}</td>
              </tr>
              <tr>
                <td>freq</td>
                <td>动画频率。</td>
                <td>number</td>
                <td>start=&#123;30000}</td>
              </tr>
              <tr>
                <td>needBg</td>
                <td>背景动画。</td>
                <td>bool</td>
                <td>needBg=&#123;true} </td>
              </tr>
              <tr>
                <td>onTimeout</td>
                <td>当倒计时结束后触发回调函数。</td>
                <td>func</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Countdown组件</div>
            <div className="item-border">
              <Countdown start={20000} freq={30000} needBg={true} needProgress={false} onTimeout = {printObj}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>
                   }<br/>

                   printObj() &#123;<br/>
                   &nbsp;console.log('倒计时结束');<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<Countdown'} start= &#123;30000} freq= &#123;60} needBg= &#123;true} needProgress= &#123;false} onTimeout = &#123;printObj}/><br/>
                    &nbsp;)<br/>
                   }<br/>
                </code>
              </pre>
            </div>
        </div>
      </div>
    )
  }
}
