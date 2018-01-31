import React, {Component} from 'react';
import propTypes from 'prop-types';
import {QRCode} from 'ukelli-ui';

window.PLATFORM = 'v6';
window.DEVICE = 'browser';
window.HeaderMap = 'Header';
window.DataMap = 'Data';
window.G_F_GetRandomURL = function() {
  return 'https://gate.va01.net:37779';
}
window.SetGateUrl = function() {
  window.GATE_URL = 'https://gate.va01.net:37779/x';
  return 'https://gate01.99safe.org:27779/x';
}

export default class QRCodeExample extends Component {
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
    var errCode = {
    Desc: 'aaa'
    }
    var printTime = this.printTime;
    return (
      <div className="avator">
        <div className="item-title"><a name="qRCode">QRCode组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;QRCode} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">origin:</div>
              状态值。 参数类型: string
              示例:  <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用QRCode组件</div>
            <div className="item-border">
              <QRCode origin="google.com"/>
               <pre className="prettyprint">
                 <code>
                   window.PLATFORM = 'v6';
                   window.DEVICE = 'browser';
                   window.HeaderMap = 'Header';
                   window.DataMap = 'Data';
                   window.G_F_GetRandomURL = function() &#123;
                     return 'https://gate.va01.net:37779';
                   }
                   window.SetGateUrl = function() &#123;
                     window.GATE_URL = 'https://gate.va01.net:37779/x';
                     return 'https://gate01.99safe.org:27779/x';
                   }
                   constructor(props)&#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;var printTime = this.printTime;<br/>
                     return (<br/>
                     &nbsp;{'<QRCode'} /><br/>
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
