import React, {Component} from 'react';
import propTypes from 'prop-types';
import {ConditionHelper} from 'ukelli-ui';
export default class DropdownMenuExample extends Component {
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
    var Config = [
      {
        title :'title1',
      },
      {
        title :'title2',
      }
    ]
    return (
      <div className="avator">
        <div className="item-title"><a name="conditionHelper">ConditionHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;ConditionHelper} from 'ukelli-ui'; <br/>
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
                <td>conditionConfig</td>
                <td>标签值</td>
                <td>array</td>
                <td>var Config = [&nbsp;&#123;<br/>
                    &nbsp; title :'title1',<br/>
                    &nbsp;},<br/>
                    &nbsp;&#123;<br/>
                    &nbsp; title :'title2',<br/>
                    &nbsp;}]</td>
              </tr>
              <tr>
                <td>className</td>
                <td>设置类名。</td>
                <td>string</td>
                <td>className=&#123;'item-ConditionHelper'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用ConditionHelper组件</div>
            <div className="item-border">
              <ConditionHelper conditionConfig={Config}/>
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
                   &nbsp; {'<ConditionHelper'} conditionConfig=&#123;Config}}/><br/>
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
