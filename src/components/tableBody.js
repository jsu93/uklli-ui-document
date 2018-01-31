import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TableBody} from 'ukelli-ui';
export default class RateInputExample extends Component {
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
      },
      {
        key: 1,
      },
      {
        key: 2,
      }
    ]
    var record = ['111', '222', '335'];
    return (
      <div className="avator">
        <div className="item-title"><a name="tableBody">TableBody组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;TableBody} from 'ukelli-ui'; <br/>
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
                <td>匹配列</td>
                <td>string</td>
                <td> &nbsp;var keyMapper =[&#123;<br/>
                     &nbsp; key: 0,<br/>
                   &nbsp;},<br/>
                   &nbsp;&#123;<br/>
                     &nbsp; key: 1,<br/>
                   &nbsp;}<br/>
                   &nbsp;&#123;<br/>
                 &nbsp; key: 2,<br/>
                   &nbsp;}]<br/></td>
              </tr>
              <tr>
                <td>needCount</td>
                <td>是否计数。</td>
                <td>bool</td>
                <td>needCount=&#123;true}</td>
              </tr>
              <tr>
                <td>records</td>
                <td>array </td>
                <td>bool</td>
                <td>needCount=&#123;false}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用TableBody组件</div>
            <div className="item-border">
                <TableBody  keyMapper={keyMapper} records={record} needCount={true}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>

                   printObj(obj) &#123;<br/>
                   &nbsp;console.log(obj);<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var keyMapper =[<br/>
                     &nbsp;&#123;<br/>
                       &nbsp; key: 0,<br/>
                     &nbsp;},<br/>
                     &nbsp;&#123;<br/>
                       &nbsp; key: 1,<br/>
                     &nbsp;}<br/>
                     &nbsp;&#123;<br/>
                   &nbsp; key: 2,<br/>
                     &nbsp;}<br/>
                   ]<br/>
                 var record = ['111','222','335'];<br/>
                    &nbsp;return (<br/>
                    &nbsp; {'<TableBody'} keyMapper=&#123;keyMapper} records=&#123;record} needCount=&#123;false}/><br/>
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
