import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Iframe} from 'ukelli-ui';
export default class InputExample extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    PR.prettyPrint();
  }
  render() {
    return (
      <div className="avator">
        <div className="item-title"><a name="iframe">Iframe组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Iframe} from 'ukelli-ui'; <br/>
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
                <td>iframeLink</td>
                <td>内联框架</td>
                <td>string</td>
                <td>iframeLink=&#123;'https://hulufei.gitbooks.io/react-tutorial/content/introduction.html'}</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Iframe组件</div>
            <div className="item-border">
              <Iframe iframeLink={'https://hulufei.gitbooks.io/react-tutorial/content/introduction.html'}/>
              <br/>
              <br/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<Iframe'} iframeLink=&#123;'https://hulufei.gitbooks.io/react-tutorial/content/introduction.html'}/><br/>
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
