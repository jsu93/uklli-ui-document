import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as CommonComponents from 'ukelli-ui';
import {Ball} from 'ukelli-ui';
window.G_F_Random = function([start,end]){
  return  Math.floor(Math.random() * (end - start) + start);
}
export default class BallExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isOpening: true,
    }
  }

  stopNow(){
    this.setState({
      isOpening :false,
    })
  }
  opening(){
    this.setState({
      isOpening :true,
    })
  }

  componentDidMount(){
    PR.prettyPrint();
  }
  render() {
    var  {isOpening} = this.state;
    var extendTxt = ['A', 'B', 'C', 'D','E'];
    const self = this;
    return (
      <div className="avator">
        <div className="item-title"><a name="random">随机数字组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Ball{'}'}  from 'ukelli-ui';
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
                <td>openCode</td>
                <td>随机结果号码。</td>
                <td>string</td>
                <td>openCode=&#123;'51829'}</td>
              </tr>
              <tr>
                <td>animate</td>
                <td>动画效果。</td>
                <td>bool</td>
                <td>animate=&#123;true}</td>
              </tr>
              <tr>
                <td>animateTimer</td>
                <td>随机结束延迟时间</td>
                <td>number</td>
                <td>animateTimer=&#123;500}</td>
              </tr>
              <tr>
                <td>activeFilter</td>
                <td>设置高亮。</td>
                <td>string</td>
                <td>activeFilter=&#123;'xxooo'} 注: 'x':无高亮, 'o':高亮。</td>
              </tr>
              <tr>
                <td>isOpening</td>
                <td>是否结束。</td>
                <td>bool</td>
                <td>isOpening=&#123;isOpening} 注: isOpening 为 true - 正在随机。 false - 停止随机。</td>
              </tr>
              <tr>
                <td>extendTxt</td>
                <td>在随机数上添加额外文字。</td>
                <td>string</td>
                <td>extendTxt=&#123;extendTxt}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="item-thititle">产生动画效果随机数</div>
        <div className="item-content">
          <div className="item-describe">设置window函数，返回随机数。</div>
          <pre className="prettyprint">
            <code>
              window.G_F_Random = function([start,end])&#123;<br/>
              &nbsp;return  Math.floor(Math.random() * (end - start) + start);<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用随机数组件</div>
            <div className="item-border">
              <Ball animate={true} animateTimer={500} isOpening={isOpening} openCode={'51829'} activeFilter={'xxooo'}  />
              <span className="btnThis" onClick={() => self.opening()}>开始</span>
              <span className="btnThis" onClick={() => self.stopNow()}>停止</span>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp; this.state = &#123;<br/>
                   &nbsp; isOpening: true,<br/>
                   &nbsp;}<br/>
                   }<br/>

                   stopnow()&#123;<br/>
                   &nbsp; this.setState(&#123;<br/>
                   &nbsp; isOpening :false,<br/>
                   &nbsp;})<br/>
                   }<br/>
                   &nbsp;opening()&#123;<br/>
                   &nbsp; this.setState(&#123;<br/>
                   &nbsp; isOpening :true,<br/>
                   &nbsp;})<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var &#123;isOpening} = this.state;<br/>
                   &nbsp;const self = this;<br/>
                   &nbsp;return (<br/>
                   &nbsp;{' <Ball animate='}&#123;true} animateTimer=&#123;500} isOpening=&#123;isOpening} openCode=&#123;'51829'} activeFilter=&#123;'xxooo'}/><br/>
                   &nbsp;{' <span className="btn"'} onClick=&#123;() => self.opening()}>开始{'</span>'}<br/>
                   &nbsp;{' <span className="btn"'} onClick=&#123;() => self.stopNow()}>停止{'</span>'}<br/>
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
