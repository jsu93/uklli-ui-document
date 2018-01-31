import React, {Component} from 'react';
import propTypes from 'prop-types';
import {DatepickerHelper} from 'ukelli-ui';
//import DatepickerHelper from '../example/datePickerHelper.js'
export default class BallExample extends Component {
// const {DatepickerHelper, FormHelper} = CommonComponents;

  constructor(props) {
    super(props);
    this.printTime = this.printTime.bind(this);
  }

   printTime(e) {
     document.getElementById('text').innerHTML = e;
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printTime = this.printTime;
    return (
      <div className="avator">
        <div className="item-title"><a name="dataHelp">日期变换组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;DatepickerHelper{'}'}  from 'ukelli-ui';<br/>
              https://vg06.net/js/polyfillLib.min.js
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
                <td>onClick</td>
                <td>点击事件，返回改变值。</td>
                <td>func</td>
                <td>onClick=&#123;printTime}</td>
              </tr>
              <tr>
                <td>needTime</td>
                <td>是否包括时间。</td>
                <td>bool</td>
                <td>示例: needTime=&#123;true}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">获取返回值函数</div>
        <div className="item-content">
          <div className="item-describe">获取返回值</div>
          <pre className="prettyprint">
            <code>
              printTime(obj) &#123;<br/>
              &nbsp;document.getElementById("text").innerHTML = obj;<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用日期变换组件</div>
            <div className="item-border">
              <DatepickerHelper needTime={true} onClick={printTime}/>
              <div id="text" className="item-show"></div>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printTime = this.printTime.bind(this);<br/>
                   }<br/>

                   printTime(obj) &#123;<br/>
                   &nbsp;document.getElementById("text").innerHTML = obj;<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printTime = this.printTime;<br/>
                   &nbsp;return (<br/>
                   &nbsp;{' <DatepickerHelper'} needTime=&#123;true} onClick=&#123;printTime}/><br/>
                   &nbsp;{' <div id="text"'}className="item-show">{'</div>'}<br/>
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
