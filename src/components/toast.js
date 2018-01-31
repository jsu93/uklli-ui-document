import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Toast} from 'ukelli-ui';
export default class toastExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errCode: {
        hasErr: false,
        resDesc: '提示'
      }
    }
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   printTime(obj) {
     console.log(obj);
   }

showResDes(resInfo) {
  this.toast.show(resInfo.resDesc, resInfo.hasErr ? 'error' : 'success');
}
  render() {
    const {errCode} = this.state;
    var printTime = this.printTime;
    var btns = {
      0: {
        text :"aaa",
      }
    }
    //  <Toast errCode={errCode} timeToHide={10000} toastId={Date.now()}/>
    return (
      <div className="avator">
        <div className="item-title"><a name="toast">Toast组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Toast} from 'ukelli-ui'; <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明 </div>
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
                <td>errCode</td>
                <td>标签配置</td>
                <td>obj</td>
                <td>errCode: &#123;
                    hasErr: false,
                    resDesc: '提示'
                  } <br/>
                hasErr为false: 正确提示标签。<br/>
              hasError为true: 错误提示标签。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-thititle">回调函数 </div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              showResDes(resInfo) &#123;<br/>
              &nbsp;this.toast.show(resInfo.resDesc, resInfo.hasErr ? 'error' : 'success');<br/>
              }<br/>
            </code>
          </pre>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content relative">
          <div className="item-describe">使用Toast组件</div>
            <div className="item-border">
                <div className="btn theme" onClick={e => this.showResDes(errCode)}>提示</div>
                <Toast ref = {toast => this.toast = toast}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.state = &#123;<br/>
                   &nbsp; errCode: &#123;<br/>
                   &nbsp; hasErr: false,<br/>
                   &nbsp; resDesc: '提示'<br/>
                   &nbsp; }<br/>
                   &nbsp;}<br/>
                   }<br/>

                   showResDes(resInfo) &#123;<br/>
                   &nbsp;this.toast.show(resInfo.resDesc, resInfo.hasErr ? 'error' : 'success');<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;return (<br/>
                  &nbsp; {'<div '}className="btn theme" onClick= &#123;e => this.showResDes(errCode)}>{'提示 </div>'}<br/>
                  &nbsp; {'<Toast ref ='}&#123;toast => this.toast = toast}/><br/>

                   }<br/>
                </code>
              </pre>
            </div>
        </div>
      </div>
    )
  }
}
