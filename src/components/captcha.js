import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Captcha} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printTime = this.printTime.bind(this);
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   printTime(obj) {
     console.log(obj);
   }

  render() {
    var printTime = this.printTime;
    var btns = {
      0: {
        text :"aaa",
      }
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="captcha">CAPTCHA组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Captcha} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明 (待定)</div>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">onError:</div>
              参数类型: func
              示例:   <br/><br/>
            <div className="item-fourtitle">onChange:</div>
               参数类型: func 示例: <br/><br/>
              <div className="item-fourtitle">onBlur:</div>
               参数类型: func 示例:<br/><br/>
               <div className="item-fourtitle">scale:</div>
                参数类型: string 示例: <br/><br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">获取返回值函数</div>
        <div className="item-content">
          <div className="item-describe">获取返回值</div>
          <pre className="prettyprint">
            <code>
              printTime(obj) &#123;<br/>
              &nbsp;console.log(obj);<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Input组件</div>
            <div className="item-border">
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printTime = this.printTime.bind(this);<br/>
                   }<br/>

                   printTime(obj) &#123;<br/>
                   &nbsp;console.log(obj);<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printTime = this.printTime;<br/>
                   &nbsp;return (<br/>
                   &nbsp;{' <Tab '}label=&#123;'aaa'} idx=&#123;1} isDefault=&#123;false} onClick=&#123;printTime} onChangeTab=&#123;printTime} atRight=&#123;false}/><br/>
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
