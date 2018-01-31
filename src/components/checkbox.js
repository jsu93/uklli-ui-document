import React, {Component} from 'react';
import propTypes from 'prop-types';
import {CheckboxHelper} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printTime = this.printTime.bind(this);
  }

   printTime(obj) {
     console.log(obj);
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printTime = this.printTime;
    return (
      <div className="avator">
        <div className="item-title"><a name="checkboxHelper">CheckboxHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;CheckboxHelper} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">values:</div>
              参数类型: array
              示例:  <br/>
              <div className="item-fourtitle">onChange:</div>
              参数类型: func 示例:<br/>
              <div className="item-fourtitle">needAllCheck:</div>
              参数类型: bool 示例:<br/>
              <div className="item-fourtitle">defaultValue:</div>
              参数类型: defaultValue 示例:<br/>
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
                {/*<CheckboxHelper/>*/}
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
                     return (<br/>
                    {' <Tab '}label=&#123;'aaa'} idx=&#123;1} isDefault=&#123;false} onClick=&#123;printTime} onChangeTab=&#123;printTime} atRight=&#123;false}/><br/>
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
