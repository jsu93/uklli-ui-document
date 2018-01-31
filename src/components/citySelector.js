import React, {Component} from 'react';
import propTypes from 'prop-types';
import {CitySelector} from 'ukelli-ui';

window.__SelectedBankCode = 'ICBC';
window.SCRIPT_CND_URL = '//cdn-ccs.mookee.cn';

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
        <div className="item-title"><a name="citySelector">CitySelector组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;CitySelector} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
               <div className="item-fourtitle">onChange:</div>
                点击触发回调函数。参数类型: func 示例: onClick=&#123;(...args)=>console.log(...args)}<br/><br/>
                window.__SelectedBankCode = 'ICBC';<br/><br/>
                window.SCRIPT_CND_URL = '//cdn-ccs.mookee.cn';
            </code>
          </pre>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用CitySelector组件</div>
            <div className="item-border">
                <CitySelector onChange={val => console.log(val)}/>
               <pre className="prettyprint">
                 <code>
                   window.__SelectedBankCode = 'ICBC';<br/>
                   window.SCRIPT_CND_URL = '//cdn-ccs.mookee.cn';<br/>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;return (<br/>
                   &nbsp;&nbsp;{'<CitySelector'} onChange=&#123;val => console.log(val)}/><br/>
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
