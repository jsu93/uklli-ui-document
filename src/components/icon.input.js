import React, {Component} from 'react';
import propTypes from 'prop-types';
import {IconInput} from 'ukelli-ui';
import ICON_MAPPER from './icon.mapper.js';
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);
  }
  componentDidMount(){
    PR.prettyPrint();
    window.ICON_MAPPER = ICON_MAPPER ;
  }
   printObj() {
     console.log('button');
   }

  render() {
    var printObj = this.printObj;
    var inputProps1 = {
      className: 'form-control input-sm',
      defaultValue: 'AGGame',
      type: 'text'
    }
    var inputProps2 = {
      className: 'form-control input-sm',
      defaultValue: 'game'
    }
    var inputProps3 = {
      className: 'form-control input-sm',
      defaultValue: 'account'
    }
    var inputProps4 = {
      className: 'form-control input-sm',
      defaultValue: 'helpers'
    }
    var inputProps5 = {
      className: 'form-control input-sm',
      defaultValue: 'activity'
    }
    var inputProps6 = {
      className: 'form-control input-sm',
      defaultValue: 'recharge'
    }
    var inputProps7 = {
      className: 'form-control input-sm',
      defaultValue: 'gifts'
    }
    var inputProps8 = {
      className: 'form-control input-sm',
      defaultValue: 'systemMsg'
    }
    var inputProps9 = {
      className: 'form-control input-sm',
      defaultValue: 'report'
    }
    var inputProps10 = {
      className: 'form-control input-sm',
      defaultValue: 'userManager'
    }
    var inputProps11 = {
      className: 'form-control input-sm',
      defaultValue: 'createUser'
    }
    var inputProps12 = {
      className: 'form-control input-sm',
      defaultValue: 'daili'
    }
    var inputProps13 = {
      className: 'form-control input-sm',
      defaultValue: 'wanjia,'
    }
    var inputProps14 = {
      className: 'form-control input-sm',
      defaultValue: 'customer'
    }
    var inputProps15 = {
      className: 'form-control input-sm',
      defaultValue: 'gateSelector'
    }
    var inputProps16 = {
      className: 'form-control input-sm',
      defaultValue: 'android'
    }
    var inputProps17 = {
      className: 'form-control input-sm',
      defaultValue: 'iOS'
    }
    var inputProps18 = {
      className: 'form-control input-sm',
      defaultValue: 'windows'
    }
    var inputProps19 = {
      className: 'form-control input-sm',
      defaultValue: 'iMac'
    }
    var inputProps20 = {
      className: 'form-control input-sm',
      defaultValue: 'spec'
    }
    var inputProps21 = {
      className: 'form-control input-sm',
      defaultValue: 'normal'
    }
    var inputProps22 = {
      className: 'form-control input-sm',
      defaultValue: 'pokerGames'
    }
    var inputProps23 = {
      className: 'form-control input-sm',
      defaultValue: 'slotGames'
    }
    var inputProps24 = {
      className: 'form-control input-sm',
      defaultValue: 'tableGames'
    }
    var inputProps25 = {
      className: 'form-control input-sm',
      defaultValue: 'allGames'
    }
    var inputProps26 = {
      className: 'form-control input-sm',
      defaultValue: 'agIcon'
    }
    var inputProps27 = {
      className: 'form-control input-sm',
      defaultValue: 'warn'
    }
    var inputProps28 = {
      className: 'form-control input-sm',
      defaultValue: 'error'
    }
    var inputProps29 = {
      className: 'form-control input-sm',
      defaultValue: 'circleCheck'
    }
    var inputProps30 = {
      className: 'form-control input-sm',
      defaultValue: 'loginPwd'
    }
    var inputProps31 = {
      className: 'form-control input-sm',
      defaultValue: 'secQuestion'
    }
    var inputProps32 = {
      className: 'form-control input-sm',
      defaultValue: 'rite'
    }
    var inputProps33 = {
      className: 'form-control input-sm',
      defaultValue: 'fundPwd'
    }
    var inputProps34 = {
      className: 'form-control input-sm',
      defaultValue: 'greeting'
    }
    var inputProps35 = {
      className: 'form-control input-sm',
      defaultValue: 'online'
    }
    var inputProps36 = {
      className: 'form-control input-sm',
      defaultValue: 'uper'
    }
    return (
      <div className="avator">
        <div className="item-title"><a name="button">IconInput组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;IconInput} from 'ukelli-ui'; <br/>
            {'<link '}href="https://vg06.net/css/icon.css/external.css" rel="stylesheet"><br/>
            import ICON_MAPPER from './icon.mapper.js';<br/>
            设置：window.ICON_MAPPER = ICON_MAPPER ;获取icon名字
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
                <td>iconClassName</td>
                <td>icon的ClassName</td>
                <td>string</td>
                <td>iconClassName=&#123;ICON_MAPPER.AGGame}<br/>
                 图标类型: AGGame, game, account, helpers, activity, recharge, gifts,
                 systemMsg, report, userManager, createUser, daili, wanjia, customer, gateSelector,
                 android, iOS, windows, iMac, spec, normal, pokerGames, slotGames, tableGames, allGames, agIcon,
                 warn, error, circleCheck, loginPwd, secQuestion, rite, fundPwd, greeting, online, uper

               </td>
              </tr>
              <tr>
                <td>iconName</td>
                <td>icon的类型</td>
                <td>string</td>
                <td>iconClassName=&#123;ICON_MAPPER.AGGame}</td>
              </tr>
              <tr>
                <td>inputProps</td>
                <td>对input组件进行配置</td>
                <td>object</td>
                <td>var inputProps = &#123;<br/>
                    &nbsp;className: 'form-control input-sm', (默认类)<br/>
                    &nbsp;defaultValue: 'AGGame'<br/>
                    &nbsp;type: 'password/text'<br/>
                    }</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Button组件</div>
            <div className="item-border">
              <span className="icon-span"><IconInput inputProps={inputProps1} iconName={'icon'} iconClassName={ICON_MAPPER.AGGame}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps2} iconName={'icon'} iconClassName={ICON_MAPPER.game}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps3} iconName={'icon'} iconClassName={ICON_MAPPER.account}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps4} iconName={'icon'} iconClassName={ICON_MAPPER.helpers}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps5} iconName={'icon'} iconClassName={ICON_MAPPER.activity}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps6} iconName={'icon'} iconClassName={ICON_MAPPER.recharge}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps7} iconName={'icon'} iconClassName={ICON_MAPPER.gifts}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps8} iconName={'icon'} iconClassName={ICON_MAPPER.systemMsg}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps9} iconName={'icon'} iconClassName={ICON_MAPPER.report}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps10} iconName={'icon'} iconClassName={ICON_MAPPER.userManager}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps11} iconName={'icon'} iconClassName={ICON_MAPPER.createUser}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps12} iconName={'icon'} iconClassName={ICON_MAPPER.daili}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps13} iconName={'icon'} iconClassName={ICON_MAPPER.wanjia}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps14} iconName={'icon'} iconClassName={ICON_MAPPER.customer}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps15} iconName={'icon'} iconClassName={ICON_MAPPER.gateSelector}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps16} iconName={'icon'} iconClassName={ICON_MAPPER.android}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps17} iconName={'icon'} iconClassName={ICON_MAPPER.iOS}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps18} iconName={'icon'} iconClassName={ICON_MAPPER.windows}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps19} iconName={'icon'} iconClassName={ICON_MAPPER.iMac}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps20} iconName={'icon'} iconClassName={ICON_MAPPER.spec}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps21} iconName={'icon'} iconClassName={ICON_MAPPER.normal}/></span>
{/*              <span className="icon-span"><IconInput inputProps={inputProps22} iconName={'icon'} iconClassName={ICON_MAPPER.pokerGames}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps23} iconName={'icon'} iconClassName={ICON_MAPPER.slotGames}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps24} iconName={'icon'} iconClassName={ICON_MAPPER.tableGames}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps25} iconName={'icon'} iconClassName={ICON_MAPPER.allGames}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps26} iconName={'icon'} iconClassName={ICON_MAPPER.agIcon}/></span>*/}
              <span className="icon-span"><IconInput inputProps={inputProps27} iconName={'icon'} iconClassName={ICON_MAPPER.warn}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps28} iconName={'icon'} iconClassName={ICON_MAPPER.error}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps29} iconName={'icon'} iconClassName={ICON_MAPPER.circleCheck}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps30} iconName={'icon'} iconClassName={ICON_MAPPER.loginPwd}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps31} iconName={'icon'} iconClassName={ICON_MAPPER.secQuestion}/></span>
              {/*
                <span className="icon-span"><IconInput inputProps={inputProps32} iconName={'icon'} iconClassName={ICON_MAPPER.rite}/></span>*/}
              <span className="icon-span"><IconInput inputProps={inputProps33} iconName={'icon'} iconClassName={ICON_MAPPER.fundPwd}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps34} iconName={'icon'} iconClassName={ICON_MAPPER.greeting}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps35} iconName={'icon'} iconClassName={ICON_MAPPER.online}/></span>
              <span className="icon-span"><IconInput inputProps={inputProps36} iconName={'icon'} iconClassName={ICON_MAPPER.online}/></span>

               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>
                   }<br/>

                   printObj() &#123;<br/>
                   &nbsp;console.log('button');<br/>
                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var inputProps1 = &#123;<br/>
                   &nbsp; className: 'form-control input-sm',<br/>
                   &nbsp; defaultValue: 'AGGame',<br/>
                   &nbsp; type: 'text'<br/>
                   &nbsp;}<br/>
                   &nbsp;return (<br/>
                  &nbsp; {'<IconInput '} inputProps=&#123;inputProps1} iconName=&#123;ICON_MAPPER.AGGame} iconClassName=&#123;ICON_MAPPER.AGGame}/><br/>
                &nbsp;)<br/>
                  }
                </code>
              </pre>
            </div>
        </div>
      </div>
    )
  }
}
