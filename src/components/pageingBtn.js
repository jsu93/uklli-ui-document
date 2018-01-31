import React, {Component} from 'react';
import propTypes from 'prop-types';
import {PagingBtn} from 'ukelli-ui';
export default class PagingBtnExample extends Component {
  constructor(props) {
    super(props);
    this.onPagin = this.onPagin.bind(this);
    this.state = {
        pagingInfo: {
        PageIndex: 0,
        AllCount: 20,
        PageSize: 5,
      }
    }
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   onPagin(pagingInfo) {
     this.setState ({
       pagingInfo
     })
     console.log(this.state.pagingInfo);
   }

  render() {
    var onPagin = this.onPagin;
    var {pagingInfo} = this.state;
    return (
      <div className="avator">
        <div className="item-title"><a name="pagingBtn">分页组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;PagingBtn} from 'ukelli-ui'; <br/>
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
                <td>pagingInfo</td>
                <td>参数设置</td>
                <td>object</td>
                <td>pagingInfo=&#123;&#123;PageIndex: 0, AllCount: 30, PageSize: 10}</td>
              </tr>
              <tr>
                <td>isNeedHelper</td>
                <td>是否显示翻页按钮。</td>
                <td>bool</td>
                <td>isNeedHelper=&#123;true}</td>
              </tr>
              <tr>
                <td>onPagin</td>
                <td>数字改变时返回值。</td>
                <td>func </td>
                <td>onPagin=&#123;onPagin}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">回调函数</div>
        <div className="item-content">
          <div className="item-describe">修改页面index</div>
          <pre className="prettyprint">
            <code>
              onPagin(pagingInfo) &#123;<br/>
              &nbsp;this.setState (&#123;<br/>
              &nbsp; pagingInfo<br/>
              &nbsp;})<br/>
              }
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用PagingBtn组件</div>
            <div className="item-border">
                <PagingBtn pagingInfo={pagingInfo} onPagin={onPagin} isNeedHelper={true}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.onPagin = this.onPagin.bind(this);<br/>
                   &nbsp;this.state = &#123;<br/>
                   &nbsp; pagingInfo: &#123;<br/>
                   &nbsp; PageIndex: 0,<br/>
                   &nbsp; AllCount: 20,<br/>
                   &nbsp; PageSize: 5,<br/>
                   &nbsp; }<br/>
                   &nbsp;}<br/>
                   }<br/>

                   onPagin(pagingInfo) &#123;<br/>
                   &nbsp;this.setState (&#123;<br/>
                   &nbsp; pagingInfo<br/>
                   &nbsp;})<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var onPagin = this.onPagin;<br/>
                   &nbsp;var &#123;pagingInfo} = this.state;<br/>
                   &nbsp;return (<br/>
                   &nbsp;{/*<PagingBtn*/} pagingInfo=&#123;pagingInfo} onPagin=&#123;onPagin} isNeedHelper=&#123;true}/><br/>
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
