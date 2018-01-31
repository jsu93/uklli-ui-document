import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Tabs, Tab} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }

   printObj() {
     console.log('click');
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printObj = this.printObj;
    var btns = {
      0: {
        text :"aaa",
      }
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="tab">Tabs组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Tabs, Tab} from 'ukelli-ui'; <br/>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">label:</div>
              标签值。 参数类型: string
              示例: label=&#123;'label'}  <br/><br/>
               <div className="item-fourtitle">onChangeTab:</div>
                改变标签时回调函数。参数类型: func 示例: onChangeTab=&#123;(...args)=>console.log(...args)}<br/><br/>
               <div className="item-fourtitle">onClick:</div>
                点击触发回调函数。参数类型: func 示例: onClick=&#123;()=>console.log('click')}<br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">获取返回值函数</div>
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
          <div className="item-describe">使用Tabs组件</div>
            <div className="item-border">
              <Tabs>
                <Tab label={'label1'} onClick={printObj} onChangeTab={printObj}>
                  <div>
                    <span>Label1 内容:</span>
                    <input type="text" placeholder="label1" className="tab-input"/>
                  </div>
                </Tab>
                <Tab label={'label2'} onClick={printObj} onChangeTab={printObj}>
                  <div>
                    <span>Label2 内容:</span>
                    <input type="text" placeholder="label1" className="tab-input"/>
                  </div>
                </Tab>
              </Tabs>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>
                   }<br/>

                   printObj(obj) &#123;<br/>
                   &nbsp;console.log(obj);<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {' <Tab '}label=&#123;'aaa'} idx=&#123;1} isDefault=&#123;false} onClick=&#123;printObj} onChangeTab=&#123;printObj} atRight=&#123;false}/><br/>
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
