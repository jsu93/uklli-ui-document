import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TipBtn} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }

   printObj() {
     console.log('TipBtn');
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printObj = this.printObj;

    return (
      <div className="avator">
        <div className="item-title"><a name="tipButton">TipButton组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;TipBtn} from 'ukelli-ui'; <br/>
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
                <td>onClick</td>
                <td>点击触发回调函数。</td>
                <td>func</td>
                <td>onClick=&#123;printObj}</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>关闭触发回调函数。</td>
                <td>func</td>
                <td>onClose=&#123;printObj}</td>
              </tr>
              <tr>
                <td>text</td>
                <td>按钮文字</td>
                <td>string</td>
                <td>text=&#123;'TipBtn'}</td>
              </tr>
              <tr>
                <td>showTip</td>
                <td>是否显示标签</td>
                <td>bool</td>
                <td>showTip=&#123;false} </td>
              </tr>
              <tr>
                <td>autoClose</td>
                <td>标签是否自动关闭。</td>
                <td>bool </td>
                <td>autoClose=&#123;true}</td>
              </tr>
              <tr>
                <td>position</td>
                <td>标签位置。</td>
                <td>string</td>
                <td>position= &#123;'right'} </td>
              </tr>
              <tr>
                <td>className:</td>
                <td>类名</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁止。</td>
                <td>bool</td>
                <td>disabled=&#123;true}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">回调函数</div>
        <div className="item-content">
          <div className="item-describe">获取返回值</div>
          <pre className="prettyprint">
            <code>
              printObj(obj) &#123;<br/>
              &nbsp;console.log(obj);<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用TipBtn组件</div>
            <div className="item-border">
               <TipBtn text={'TipBtn'} onClick={printObj} onClose={printObj} position= {'right'} />
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>
                   }<br/>
                   render() &#123;<br/>
                  &nbsp;return (<br/>
                  &nbsp; {'<TipBtn'} text=&#123;'TipBtn'} onClick=&#123;printObj} onClose=&#123;printObj} position=&#123;'right'} /><br/>
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
