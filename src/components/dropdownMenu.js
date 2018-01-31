import React, {Component} from 'react';
import propTypes from 'prop-types';
import {DropdownMenu} from 'ukelli-ui';
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
    return (
      <div className="avator">
        <div className="item-title"><a name="dropdownMenu">下拉选框组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;DropdownMenu} from 'ukelli-ui'; <br/>
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
                <td>any</td>
                <td>any </td>
                <td>defaultValue=&#123;'0'}</td>
              </tr>
              <tr>
                <td>values</td>
                <td>下拉选矿具体值。<br/>注：如果是多选模式，value, defaultValue 必须为array，<br/>否则value, defaultValue必须为string</td>
                <td>string/array </td>
                <td> values=&#123;['javaScript','c','c++','.net']}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>时间改变时返回选择值。</td>
                <td>func </td>
                <td>onChange=&#123;(...args)=>console.log(...args)}</td>
              </tr>
              <tr>
                <td>isMultiple</td>
                <td>是否可复选。</td>
                <td>bool </td>
                <td>isMultiple=&#123;false}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">回调函数</div>
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
          <div className="item-describe">下拉选框组件</div>
            <div className="item-border">
              <DropdownMenu defaultValue={'0'} values={['javaScript','c','c++','.net']} onChange={printTime} isMultiple={false} isNum={true} offsetMode={true}/>
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
                   &nbsp; {'<DropdownMenu'} defaultValue=&#123;'0'} values=&#123;['javaScript','c','c++']} onChange=&#123;printTime} isMultiple=&#123;true} /><br/>
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
