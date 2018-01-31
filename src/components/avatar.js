import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as CommonComponents from 'ukelli-ui';
import {Avatar} from 'ukelli-ui';
export default class AvatarExample extends Component {

  constructor(props) {
    super(props);
    this.onAppResponse = this.onAppResponse.bind(this);
    this.state = {
      userConfig :{
        faceId: 1
      },
    }
  }
  componentDidMount(){
    PR.prettyPrint();
  }
  onAppResponse(obj){
    this.state.userConfig.faceId = obj.config.faceId;
  }
  render() {
    var  {userConfig} = this.state;
    var onAppResponse = this.onAppResponse;
    return (
      <div className="avator">
        <div className="item-title"><a name="avator">头像选择组件</a></div>
        <div className="item-sectitle">何时使用</div>
        <div className="item-thititle">图片存储格式</div>
        <div className="item-content">
          <div className="item-describe">
            文件夹结构：images/face <br/>
            图片存储命名规范 ：1.jpg  2.jpg 3.jpg ……
          </div>

        </div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint" >
            <code>
              import &#123;Avatar{'}'}  from 'ukelli-ui';
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
                <td>changeAvatarable</td>
                <td>是否可以改变头像</td>
                <td>bool</td>
                <td>changeAvatarable=&#123;true}</td>
              </tr>
              <tr>
                <td>onAppResponse</td>
                <td>改变头像触发回调函数</td>
                <td>func</td>
                <td>onAppResponse=&#123;onAppResponse}</td>
              </tr>
              <tr>
                <td>userConfig</td>
                <td>设置默认头像</td>
                <td>object</td>
                <td>  userConfig: &#123;<br/>
                  &nbsp;faceId: 1<br/>
                  }<br/></td>
              </tr>
              <tr>
                <td>text</td>
                <td>是否显示文字</td>
                <td>string</td>
                <td>text=&#123;'UK'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">设置状态state</div>
        <div className="item-content">
          <div className="item-describe">faceId 接收选择的头像序号</div>
          <pre className="prettyprint">
            <code>
              this.state = &#123; <br/>
              &nbsp;userConfig: &#123;<br/>
              &nbsp;faceId: 0 <br/>
              &nbsp;}, <br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">编写响应函数</div>
        <div className="item-content">
          <div className="item-describe">获取组件传出的对象，获取改变的faceId的值</div>
          <pre className="prettyprint">
            <code>
              onAppResponse(obj)&#123; <br/>
              &nbsp;this.state.userConfig.faceId = obj.config.faceId;<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">使用组件</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
            {'<Avatar changeAvatarable='}&#123;true} {'onAppResponse='}&#123;{'onAppResponse} userConfig='}&#123;{'userConfig} text='} &#123;'uk'}/>
            </code>
          </pre>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用头像选择组件</div>
            <div className="item-border">
              <Avatar changeAvatarable={true} onAppResponse={onAppResponse} userConfig={userConfig} text={'uk'}/>
            <pre className="prettyprint">
              <code>
                constructor(props) &#123;<br/>
                  &nbsp;super(props);<br/>
                  &nbsp;this.onAppResponse = this.onAppResponse.bind(this);<br/>
                  &nbsp;this.state = &#123;<br/>
                  &nbsp; userConfig: &#123;<br/>
                  &nbsp;&nbsp;faceId: 0<br/>
                  &nbsp; },<br/>
                &nbsp;}<br/>
                }<br/>

                onAppResponse(obj)&#123;<br/>
                &nbsp;this.state.userConfig.faceId = obj.config.faceId;<br/>
                }<br/>
                render()&#123;<br/>
                &nbsp;var&#123;userConfig} = this.state;<br/>
                &nbsp;var onAppResponse = this.onAppResponse;;<br/>
                &nbsp;return (<br/>
                &nbsp; {'<div className="item-border">'}<br/>
                &nbsp; {'  <Avatar changeAvatarable='}&#123;true} {'onAppResponse='}&#123;{'onAppResponse} userConfig='}&#123;{'userConfig}/>'}<br/>
                &nbsp; {'</div>'}<br/>
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
