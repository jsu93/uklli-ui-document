import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TableHeader} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.checkObj = this.checkObj.bind(this);
    this.state={
      check :true,
    }
  }

   checkObj(obj) {
     this.setState({
       check:obj,
     })
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var {check} = this.state;
    var keyMapper =[
      {
        key: 'checkbox',
        title:'title1',
      },
      {
        key: '1',
        title:'title2',
      },
    ]
    var record = ['aa','bb','cc'];
    return (
      <div className="avator">
        <div className="item-title"><a name="tableHeader">TableHeader组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;TableHeader} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明(待定)</div>
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
                <td>表头值</td>
                <td>array</td>
                <td>  var keyMapper =[&#123;<br/>
                      &nbsp; key: 'check',<br/>
                      &nbsp; title:'title1',<br/>
                    &nbsp;},<br/>
                    &nbsp;&#123;<br/>
                      &nbsp; key: 1,<br/>
                      &nbsp; title:'title2',<br/>
                    &nbsp;}]</td>
              </tr>
              <tr>
                <td>allCheck</td>
                <td>是否全选</td>
                <td>bool</td>
                <td>allCheck=&#123;true}</td>
              </tr>
              <tr>
                <td>onCheckAll</td>
                <td>改变选项时出发回调函数</td>
                <td>func</td>
                <td>onCheckAll=&#123;(...args)=>console.log(...args)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用TableHeader组件</div>
            <div className="item-border">
                <TableHeader  keyMapper={keyMapper} allCheck={check} onCheckAll={this.checkObj}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.checkObj = this.checkObj.bind(this);<br/>
                   &nbsp;this.state=&#123;<br/>
                   &nbsp;  check :true,<br/>
                   &nbsp;}<br/>
                   }<br/>

                   checkObj(obj) &#123;<br/>
                   &nbsp;console.log(obj);<br/>
                   }<br/>

                   render() &#123;<br/>
                 &nbsp;var &#123;check} = this.state;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<TableHeader'} keyMapper=&#123;['0','1','2']} allCheck=&#123;check} onCheckAll=&#123;checkObj}/><br/>
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
