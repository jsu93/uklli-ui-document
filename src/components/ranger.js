import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Ranger} from 'ukelli-ui';
window.ICON_MAPPER = 'ranger'
export default class QRCodeExample extends Component {
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
    var errCode = {
    Desc: 'aaa'
    }
    var printObj = this.printObj;
    return (
      <div className="avator">
        <div className="item-title"><a name="ranger">Ranger组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Ranger} from 'ukelli-ui'; <br/>
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
                <td>onChange</td>
                <td>改变时触发回调函数。</td>
                <td>func</td>
                <td>onChange=&#123;printObj}</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>默认值。</td>
                <td>number</td>
                <td>defaultValue=&#123;30}</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用组件。</td>
                <td>bool</td>
                <td>disabled=&#123;true}</td>
              </tr>
              <tr>
                <td>precent</td>
                <td>是否显示百分数。</td>
                <td>bool</td>
                <td>precent=&#123;true}</td>
              </tr>
              <tr>
                <td>range</td>
                <td>范围设置。</td>
                <td>array</td>
                <td>range={'['+0+','+100+']'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Ranger组件</div>
            <div className="item-border">
              <Ranger defaultValue={30} basicUnit={2} range={[0,100]} onChange={printObj} />
               <pre className="prettyprint">
                 <code>
                   constructor(props)&#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<Ranger'} defaultValue=&#123;30} basicUnit=&#123;2} range=&#123;[0,100]} onChange=&#123;printObj}/><br/>
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
