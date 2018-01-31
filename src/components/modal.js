import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Modal, ModalHelper} from 'ukelli-ui';

export default class ModalExample extends  ModalHelper {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    PR.prettyPrint();
  }

  render() {
    const {modalSetting} = this.state;
    var errCode = {
    Desc: 'aaa'
    }
    var {title} = this.state;
    return (
      <div className="avator">
        <div className="item-title"><a name="modal">Modal组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Modal, ModalHelper} from 'ukelli-ui'; <br/>
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
                <td>标题。</td>
                <td>string</td>
                <td>title=&#123;'title'} </td>
              </tr>
              <tr>
                <td>width</td>
                <td>宽度。</td>
                <td>string</td>
                <td> width=&#123;'500px'}</td>
              </tr>
              <tr>
                <td>marginTop</td>
                <td>距上距离。</td>
                <td>string</td>
                <td>marginTop=&#123;'1%'} </td>
              </tr>
              <tr>
                <td>className</td>
                <td>添加类名</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>clickBgToClose</td>
                <td>点击背景关闭窗口。</td>
                <td>bool</td>
                <td>clickBgToClose=&#123;true}</td>
              </tr>
              <tr>
                <td>maxHeight</td>
                <td>最大高度。</td>
                <td>string</td>
                <td>maxHeight=&#123;'100px'}</td>
              </tr>
              <tr>
                <td>onCloseModal</td>
                <td>点击窗口触发回调函数。</td>
                <td>func</td>
                <td>onCloseModal=&#123;this.closeModal.bind(this)}</td>
              </tr>
              <tr>
                <td>showCloseBtn</td>
                <td>显示关闭按钮</td>
                <td>bool</td>
                <td>showCloseBtn=&#123;true}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-thititle">继承的方法</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">setModal:</div>
              设置Modal的状态。
              示例: this.setModal(&#123;<br/>
                   &nbsp;isOpen: true,<br/>
                   &nbsp;id: 'Modal1',<br/>
                   &nbsp;children: (<br/>
                   &nbsp;  {'<div>'}我是Modal的内容{'</div>'}<br/>
                   &nbsp;)<br/>
                  })  <br/><br/>
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Modal组件</div>
            <div className="item-border">
              <span className="btn theme flat" onClick={e => {
                  this.setModal({
                    isOpen: true,
                    id: 'Modal1',
                    children: (
                      <div>我是Modal的内容</div>
                    )
                  })
                }}>打开Modal</span>
               <Modal
                 {...modalSetting}
                 width={'500px'}
                 bgColor={'#fff'}
                 onCloseModal={this.closeModal.bind(this)}
                 maxHeight={'100px'}
                 marginTop={'1%'}
                 clickBgToClose={true}
                 showCloseBtn={true}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props)&#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;}<br/>
                   }<br/>
                   render() &#123;<br/>
                   const &#123;modalSetting} = this.state;<br/>
                   &nbsp;return (<br/>
                   &nbsp;{' <Modal'}<br/>
                   &nbsp;    &#123;...modalSetting}<br/>
                   &nbsp;    width=&#123;'500px'}<br/>
                   &nbsp;    bgColor=&#123;'#fff'}<br/>
                   &nbsp;    onCloseModal=&#123;this.closeModal.bind(this)}<br/>
                   &nbsp;    maxHeight=&#123;'100px'}<br/>
                   &nbsp;    marginTop=&#123;'1%'}<br/>
                   &nbsp;    clickBgToClose=&#123;true}<br/>
                   &nbsp;    showCloseBtn=&#123;true}/><br/>
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
