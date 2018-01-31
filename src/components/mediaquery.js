import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Mediaquery} from 'ukelli-ui';
export default class RateInputExample extends Component {
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
        <div className="item-title"><a name="mediaquery">Mediaquery组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Mediaquery} from 'ukelli-ui'; <br/>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">queryStatus:</div>
              状态值。 参数类型: string
              示例: queryStatus=&#123;'loading'}  <br/>
              <div className="item-fourtitle">hasMask:</div>
              参数类型: bool 示例: hasMask=&#123;true}<br/>
              <div className="item-fourtitle">errCode:</div>
              参数类型: object 示例:<br/>
              <div className="item-fourtitle">scale:</div>
              参数类型: scale 示例: <br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Input组件</div>
            <div className="item-border">
              {/*  <Mediaquery/>*/}
               <pre className="prettyprint">
                 <code>
                   constructor(props)&#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;var printTime = this.printTime;<br/>
                     return (<br/>
                     &nbsp;{'<Mediaquery'} queryStatus=&#123;'loading'} hasMask=&#123;true} errCode=&#123;errCode} scale=&#123;'dsdsdsds'}/><br/>
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
