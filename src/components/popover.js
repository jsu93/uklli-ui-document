import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Popover} from 'ukelli-ui';
export default class PagingBtnExample extends Component {
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
        <div className="item-title"><a name="popover">标签组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Popover} from 'ukelli-ui'; <br/>
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
                <td>open</td>
                <td>是否显示标签</td>
                <td>bool</td>
                <td>open=&#123;true}</td>
              </tr>
              <tr>
                <td>className</td>
                <td>添加类名</td>
                <td>string</td>
                <td>className=&#123;item-popover}</td>
              </tr>
              <tr>
                <td>onRequestClose</td>
                <td>点击关闭时返回值。</td>
                <td>func</td>
                <td>position=&#123;'right'}</td>
              </tr>
              <tr>
                <td>position</td>
                <td>箭头方向。</td>
                <td>any</td>
                <td>position=&#123;'right'}</td>
              </tr>
              <tr>
                <td>object</td>
                <td>初始化。</td>
                <td>object</td>
                <td>relativeElem=&#123;&#123;offsetTop:0}}</td>
              </tr>
            </tbody>
          </table>
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
          <div className="item-describe">使用Popover组件</div>
            <div className="item-border">
                <Popover relativeElem={{offsetTop:0}}  open={true} className="item-popover"  onRequestClose={printObj} position={'right'}/>
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
                   &nbsp; {'<Popover'}relativeElem=&#123;&#123;offsetTop:0}}  open=&#123;true} className="item-popover"  onRequestClose=&#123;printObj} position=&#123;'right'}/><br/>
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
