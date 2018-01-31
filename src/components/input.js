import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Input} from 'ukelli-ui';
export default class InputExample extends Component {
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
        <div className="item-title"><a name="input">数字Input组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Input} from 'ukelli-ui'; <br/>
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
                <td>defaultValue=&#123;'123'}</td>
              </tr>
              <tr>
                <td>numRange</td>
                <td>输入的数字的最大范围。</td>
                <td>array</td>
                <td>numRange=&#123;[0,1000]}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>数字改变时返回值。</td>
                <td>func</td>
                <td>onChange=&#123;(...args)=>console.log(...args)}</td>
              </tr>
              <tr>
                <td>needCN</td>
                <td>是否需要显示汉字。</td>
                <td>bool</td>
                <td>needCN=&#123;true}</td>
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
          <div className="item-describe">使用Input组件</div>
            <div className="item-border">
              <Input defaultValue={"123"} onChange={printObj} needCN={true} numRange={[0,1000]} onFocus={printObj}/>
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
                   &nbsp; {'<Input'} defaultValue=&#123;"123"} onChange=&#123;printObj} needCN=&#123;true} numRange=&#123;[0,1000]}/><br/>
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
