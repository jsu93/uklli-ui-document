import React, {Component} from 'react';
import propTypes from 'prop-types';
import {RateInput} from 'ukelli-ui';
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
    return (
      <div className="avator">
        <div className="item-title"><a name="rateInput">小数输入框组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;RateInput} from 'ukelli-ui'; <br/>
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
                <td>max</td>
                <td>最大输入数。</td>
                <td>any</td>
                <td>max=&#123;3} </td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>组件默认值。</td>
                <td>any</td>
                <td>max=&#123;3} </td>
              </tr>
            </tbody>
          </table>
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">max:</div>
              最大值。 参数类型: any
              示例: max=&#123;30}  <br/><br/>
              <div className="item-fourtitle">defaultValue:</div>
               组件默认值。 参数类型: any 示例: defaultValue=&#123;15}<br/><br/>
              <div className="item-fourtitle">style:</div>
               设置输入框样式。参数类型: objec 示例: style=&#123;&#123;'backgroundColor':"#ffd"}}<br/><br/>
              <div className="item-fourtitle">sm:</div>
               输入框大小。参数类型: bool 示例: sm=&#123;true}<br/><br/>
              <div className="item-fourtitle">object:</div>
               初始化。参数类型: object 示例: relativeElem=&#123;&#123;offsetTop:0}} <br/><br/>
               <div className="item-fourtitle">onChange:</div>
                改变选择返回值。参数类型: func 示例: onRequestClose=&#123;(...args)=>console.log(...args)}<br/>
            </code>
          </pre>
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
          <div className="item-describe">使用RateInput组件</div>
            <div className="item-border">
                <RateInput max={30} defaultValue={15} style={{'backgroundColor':"#ffd"}} sm={true} onChange={printObj}/>
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
                   &nbsp; {'<RateInput'} max=&#123;30} defaultValue=&#123;15} style=&#123;&#123;'backgroundColor':"#ffd"}} sm=&#123;true} onChange=&#123;printObj}/><br/>
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
