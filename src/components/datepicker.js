import React, {Component} from 'react';
import propTypes from 'prop-types';
import {DatetimePicker} from 'ukelli-ui';
export default class DatetimePickerExample extends Component {
  constructor(props) {
    super(props);
    this.printTime = this.printTime.bind(this);
  }

   printTime(obj) {

   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var printTime = this.printTime;
    return (
      <div className="avator">
        <div className="item-title"><a name="datetimePicker">日期选择组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;DatetimePicker} from 'ukelli-ui'; <br/>
             {'<link'} href="https://v6ccsj.edumf.cn/css/flatpickr.min.css" rel="stylesheet"><br/>
             {'<script'} src="https://v6ccsj.edumf.cn/js/flatpickr.min.js">{'</script>'}
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
                <td>id</td>
                <td>控件的唯一id。</td>
                <td>string</td>
                <td>id=&#123;'myId'}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>时间改变时获取返回值。</td>
                <td>func</td>
                <td>onChange=&#123;(...args)=>console.log(...args)}</td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>时间改变时获取返回值。</td>
                <td>func</td>
                <td> defaultValue=&#123;'2017-07-20'}</td>
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
          <div className="item-describe">使用时间改变组件</div>
            <div className="item-border">
              <DatetimePicker id={"myId"} onChange={printTime} needTime={true} defaultValue={'2017-07-20'}/>
              <div className="item-bordescribe">获取改变时间</div>
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
                   &nbsp; {'<DatetimePicker '}id=&#123;"myId"} onChange=&#123;printTime} needTime=&#123;true} defaultValue=&#123;'2017-07-20'}/><br/>
                   &nbsp; {'<div id="text-DatetimePicker" '}className="item-show">{'</div>'}<br/>
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
