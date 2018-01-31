import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Loading} from 'ukelli-ui';
//import Loading from '../loading.js'
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.printTime = this.printTime.bind(this);
  }

  loaded(loading = false) {
    this.setState({
      loading
    })
  }

  printTime(obj) {
    console.log(obj);
  }
  componentDidMount(){
    PR.prettyPrint();
  }
  render() {
    const {loading} = this.state;

    var printTime = this.printTime;
    return (
      <div className="avator">
        <div className="item-title">
          <a name="loading">Loading组件</a>
        </div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;loading} from 'ukelli-ui'; <br/>
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
                <td>是否展现缓冲动画。</td>
                <td>bool</td>
                <td>loading=&#123;'true'}</td>
              </tr>
              <tr>
                <td>inrow</td>
                <td>loading时上一条信息是否隐藏。</td>
                <td>bool</td>
                <td>inrow=&#123;'true'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Loading组件</div>
            <div className="item-border">
              <span className="btn blue flat" onClick={e => this.loaded(!loading)}>切换 Loading </span>
                <Loading loading={loading} inrow={false}>
                  loading 时内容消失
                </Loading>
                <Loading loading={loading} inrow={true}>
                  loading 时上一条内容不消失, loaded 后切换新内容
                </Loading>
               <pre className="prettyprint">
                 <code>
                   constructor(props)&#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<Loading'} loading=&#123;true} inrow=&#123;true}/><br/>
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
