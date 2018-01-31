import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class build extends Component {
  componentDidMount(){
    PR.prettyPrint();
  }
  render() {
    return (
      <div className="build">
        <div className="item-title"><a name="head">概览</a></div>
        <div className="item-sectitle">安装</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
                npm i ukelli-ui --save
            </code>
          </pre>
        </div>
        <div className="item-sectitle">使用</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import * as CommonComponents from 'ukelli-ui';<br/>
              import &#123;Avatar{'}'}  from 'ukelli-ui';<br/>
              import 'ukelli-ui/style/index.scss';<br/>
            </code>
          </pre>
        </div>
        <div className="item-sectitle">所有组件</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              &#123;<br/>
              &nbsp;StatusBtn, Captcha, DatetimePicker, List, Loading, Modal, ModalHelper, PagingBtn<br/>
              &nbsp;Popover, QRCode, Tab, Tabs, TipBtn, Toast, Avatar, SwitchBtn, Ranger, RateInput,<br/>
              &nbsp;TableBody, TableHeader, CitySelector, ChartHelper, <br/>
              {'}'}
            </code>
          </pre>
        </div>
        <div className="item-sectitle">新添组件</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              1.在 ./src 里面新增一个对应的组件, 在 ./common.js 里面进行注册。<br/>
              2.修改 ./package.json 里面的版本号: "version": "0.0.6", 小修改最后一位 +1,<br/>
              &nbsp; 新增功能中间一位 +1, 重构在最前面版本号 +1。<br/>
              3.控制台运行 npm publish 提交到服务器。

            </code>
          </pre>
        </div>
      </div>
    )
  }
}
