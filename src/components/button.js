import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Button} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   printObj() {
     console.log('button');
   }

  render() {
    var printObj = this.printObj;
    var errCode = {
      Code : '0',
      Desc :'成功啦',
    };
    var btnTextInfo = {
      'success' : '成功',
    };
    return (
      <div className="avator">
        <div className="item-title"><a name="button">Button组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;StatusBtn} from 'ukelli-ui'; <br/>
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
                <td>loading</td>
                <td>是否处于提交或其他禁用状态。</td>
                <td>bool</td>
                <td>loading=&#123;true}</td>
              </tr>
              <tr>
                <td>className</td>
                <td>按钮样式</td>
                <td>string</td>
                <td>className=&#123;theme}<br/>
                可选样式：theme red primary blue light-p<br/>
                default  important  warn black
                </td>
              </tr>
              <tr>
                <td>text</td>
                <td>按钮文字</td>
                <td>string</td>
                <td>text=&#123;theme}</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>func</td>
                <td>点击触发回调函数</td>
                <td>onClick=&#123;this.printObj}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Button组件</div>
            <div className="item-border">
               <Button className='theme' text='theme' onClick={this.printObj}/><span className="space"></span>
               <Button className='red' text='red' onClick={this.printObj}/><span className="space"></span>
               <Button className='primary' text='primary' onClick={this.printObj}/><span className="space"></span>
               <Button className='blue' text='blue' onClick={this.printObj}/><span className="space"></span>
               <Button className='light-p' text='light-p'onClick={this.printObj}/><span className="space"></span><br/><br/>
               <Button className='default' text='default'onClick={this.printObj}/><span className="space"></span>
               <Button className='important' text='important' onClick={this.printObj}/><span className="space"></span>
               <Button className='warn' text='warn' onClick={this.printObj}/><span className="space"></span>
               <Button className='black' text='black' onClick={this.printObj}/><span className="space"></span><br/><br/>
               <Button className='red' text='red-loading' loading={true} onClick={this.printObj}/><span className="space"></span>

               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>
                   }<br/>

                   printObj() &#123;<br/>
                 &nbsp;console.log('button');<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;return (<br/>
                  &nbsp; {'<StatusBtn lassName=red'}/><br/>
                &nbsp;)<br/>
                  }
                </code>
              </pre>
            </div>
        </div>
      </div>
    )
  }
}
