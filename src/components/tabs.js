import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Tabs, Tab} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }

   printObj() {
     console.log('切换面板');
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printObj = this.printObj;
    return (
      <div className="avator">
        <div className="item-title"><a name="tabs">Tabs组件</a></div>
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
                <td>label</td>
                <td>标签值</td>
                <td>string</td>
                <td>label=&#123;'label1'}</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>切换面板触发回调函数</td>
                <td>func</td>
                <td>onClick=&#123;() => console.log('切换面板')}</td>
              </tr>
              <tr>
                <td>inRow</td>
                <td>是否横向显示</td>
                <td>bool</td>
                <td>inRow=&#123;false}</td>
              </tr>
              <tr>
                <td>height</td>
                <td>面板高度</td>
                <td>string</td>
                <td>height=&#123;'50px'}</td>
              </tr>
              <tr>
                <td>activeTabIdx</td>
                <td>默认选中tab索引</td>
                <td>number</td>
                <td>activeTabIdx=&#123;0}</td>
              </tr>
              <tr>
                <td>className</td>
                <td>给组件添加类名</td>
                <td>string</td>
                <td>className=&#123;'tabName'}</td>
              </tr>
              <tr>
                <td>onChangeTab</td>
                <td>切换面板触发回调函数</td>
                <td>func</td>
                <td>onChangeTab=&#123;() => console.log('切换面板')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Tabs组件</div>
            <div className="item-border">
              <Tabs activeTabIdx={1} height={'50px'}>
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
                   &nbsp; {'<div>'}<br/>
                 &nbsp;  {'<Tabs'} activeTabIdx=&#123;1} ><br/>
                   &nbsp;   {'<Tab'} label=&#123;'label1'} onClick=&#123;printObj} onChangeTab=&#123;printObj}<br/>
                   &nbsp;     {'<div>'}<br/>
                   &nbsp;         {'<span>'}Label1 内容:{'</span>'}<br/>
                   &nbsp;         {'<input'} type="text" placeholder="label1" className="tab-input"/><br/>
                   &nbsp;     {'</div>'}<br/>
                   &nbsp;   {'</Tab>'}<br/>
                   &nbsp;   {'<Tab'} label={'Tab2'}><br/>
                   &nbsp;     {'<div>'}<br/>
                   &nbsp;         {'<span>'}Label2 内容:{'</span>'}<br/>
                   &nbsp;         {'<input'} type="text" placeholder="label2" className="tab-input"/><br/>
                   &nbsp;     {'</div>'}<br/>
                   &nbsp;   {'</Tab>'}<br/>
                   &nbsp; {'</Tabs>'}<br/>
                   &nbsp;{'</div>'}<br/>
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
