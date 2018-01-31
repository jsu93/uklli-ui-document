import React, {Component} from 'react';
import propTypes from 'prop-types';
import {DescHelper} from 'ukelli-ui';
export default class CountdownBgExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }

   printObj(obj) {
     console.log(obj);
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printObj = this.printObj;
    var keyMapper =[
      {
        key: 0,
        title:'title1',
      },
      {
        key: 1,
        title:'title2',
      }
    ]
    var record = {
      0: 'text1',
      1: 'text2'
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="descHelper">DescHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;DescHelper} from 'ukelli-ui'; <br/>
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
                <td>keyMapper</td>
                <td>小标题</td>
                <td>array</td>
                <td>  var keyMapper =[&#123;<br/>
                    &nbsp; key: 0,<br/>
                    &nbsp; title:'title1',<br/>
                    &nbsp;},<br/>
                    &nbsp;&#123;<br/>
                    &nbsp; key: 1,<br/>
                    &nbsp; title:'title2',<br/>
                    &nbsp;}]</td>
              </tr>
              <tr>
                <td>record</td>
                <td>对应内容</td>
                <td>object</td>
                <td>  var record = &#123;<br/>
                    &nbsp;0: 'text1',<br/>
                    &nbsp;1: 'text2'<br/>
                  }</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">DescHelper组件</div>
            <div className="item-border">
                <DescHelper keyMapper={keyMapper} record={record}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                    &nbsp;return (<br/>
                    &nbsp; {'<DescHelper'} keyMapper=&#123;keyMapper} record=&#123;record}/><br/>
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
