import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TipPanel} from 'ukelli-ui';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
  }

   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var btns = {
      0: {
        text :"aaa",
      }
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="TipPanel">TipPanel组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;TipPanel} from 'ukelli-ui'; <br/>
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
                <td>title</td>
                <td>主标题</td>
                <td>string</td>
                <td>title=&#123;'Title'}</td>
              </tr>
              <tr>
                <td>text</td>
                <td>小标题</td>
                <td>string</td>
                <td>text={'Text'}</td>
              </tr>
              <tr>
                <td>text</td>
                <td>内容</td>
                <td>array</td>
                <td>texts=&#123;['a','b','c']}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用TipPanel组件</div>
            <div className="item-border">
                <TipPanel title={'Title'} text={'Text'} texts={['a','b','c']}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<TipPanel'} title=&#123;'Title'} text=&#123;'Text'} texts=&#123;['a','b','c']}/><br/>
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
