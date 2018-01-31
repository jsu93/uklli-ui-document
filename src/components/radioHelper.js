import React, {Component} from 'react';
import propTypes from 'prop-types';
import {RadioHelper} from 'ukelli-ui';
export default class PagingBtnExample extends Component {
  constructor(props) {
    super(props);
    this.setActives = this.setActives.bind(this);
    this.state = {
      active :0,
    }
  }

   setActives(obj) {
     this.setState({
       active: obj,
     })
   }
   componentDidMount(){
     PR.prettyPrint();
   }
  render() {
    var {active} = this.state;
    var values = [
      {
        text: '选项1',
        value: 0
      },
      {
        text: '选项2',
        value: 1
      },
      {
        text: '选项3',
        value: 2
      }
    ]
    return (
      <div className="avator">
        <div className="item-title"><a name="radioHelper">RadioHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;RadioHelper} from 'ukelli-ui'; <br/>
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
                <td>values</td>
                <td>选项内容</td>
                <td>array</td>
                <td> var values = [
                  &nbsp;&#123;<br/>
                  &nbsp; text: '选项1',<br/>
                  &nbsp; value: 0<br/>
                  &nbsp;},<br/>
                  &nbsp;&#123;<br/>
                  &nbsp; text: '选项2',<br/>
                  &nbsp; value: 1<br/>
                  &nbsp;},<br/>
                  &nbsp;&#123;<br/>
                  &nbsp; text: '选项3',<br/>
                  &nbsp; value: 2<br/>
                  &nbsp;}
                ]<br/>
                values=&#123;values} <br/><br/></td>
              </tr>
              <tr>
                <td>multiple</td>
                <td>是否能多选。</td>
                <td>bool</td>
                <td>multiple=&#123;true} </td>
              </tr>
              <tr>
                <td>defaultValue</td>
                <td>默认选中值。</td>
                <td>any</td>
                <td>defaultValue=&#123;'0'}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>改变选项时操作</td>
                <td>func</td>
                <td>onRequestClose=&#123;(...args)=>console.log(...args)} </td>
              </tr>
              <tr>
                <td>itemWidth</td>
                <td>选项宽度。</td>
                <td>any</td>
                <td>itemWidth=&#123;50}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">回调函数</div>
        <div className="item-content">
          <div className="item-describe">获取返回值</div>
          <pre className="prettyprint">
            <code>
              setActives(obj) &#123;<br/>
              &nbsp;console.log(obj);<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用RadioHelper组件</div>
            <div className="item-border">
              <RadioHelper values={values} onChange={this.setActives} multiple={true} defaultValue={0} itemWidth={50} value={active} checkAllBtn={true}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.setActives = this.setActives.bind(this);<br/>
                   &nbsp;this.state = &#123;<br/>
                   &nbsp; active :0,<br/>
                   &nbsp;}<br/>
                   }<br/>

                   setActives(obj) &#123;<br/>
                   &nbsp;this.setState(&#123;<br/>
                   &nbsp; active: obj,<br/>
                   &nbsp;})<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var &#123;active} = this.state;<br/>
                   &nbsp;var values = [<br/>
                     &nbsp;&#123;<br/>
                     &nbsp; text: '选项1',<br/>
                     &nbsp; value: 0<br/>
                     &nbsp;},<br/>
                     &nbsp;&#123;<br/>
                     &nbsp; text: '选项2',<br/>
                     &nbsp; value: 1<br/>
                     &nbsp;},<br/>
                     &nbsp;&#123;<br/>
                     &nbsp; text: '选项3',<br/>
                     &nbsp; value: 2<br/>
                     &nbsp;}<br/>
                   ]<br/>
                     &nbsp;return (<br/>
                     &nbsp; {'<RadioHelper '}values=&#123;values} onChange=&#123;setActives} multiple=&#123;true} defaultValue=&#123;0} value=&#123;active}/><br/>
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
