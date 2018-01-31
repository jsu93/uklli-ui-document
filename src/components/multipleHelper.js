import React, {Component} from 'react';
import propTypes from 'prop-types';
import {MultipleHelper} from 'ukelli-ui';
export default class MultipleHelperExample extends Component {
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
    return (
      <div className="avator">
        <div className="item-title"><a name="multipleHelper">MultipleHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;MultipleHelper} from 'ukelli-ui'; <br/>
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
                <td>defaultValue</td>
                <td>默认值。</td>
                <td>any</td>
                <td>defaultValue=&#123;'9'}</td>
              </tr>
              <tr>
                <td>basicUnit</td>
                <td>每次改变跨度。</td>
                <td>array</td>
                <td>basicUnit=&#123;10}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>数字改变时返回值。</td>
                <td>func</td>
                <td>onChange=&#123;(...args)=>console.log(...args)}</td>
              </tr>
              <tr>
                <td>inputable</td>
                <td>是否可以输入。</td>
                <td>bool</td>
                <td>inputable=&#123true}</td>
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
          <div className="item-describe">使用MultipleHelper组件</div>
            <div className="item-border">
               <MultipleHelper onChange={printObj} defaultValue={'9'} inputable={true} basicUnit={10}/>
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
                   &nbsp; {'<MultipleHelper '} onChange=&#123;printObj} defaultValue=&#123;'9'} range=&#123;['20']} inputable=&#123;true} basicUnit=&#123;10}/><br/>
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
