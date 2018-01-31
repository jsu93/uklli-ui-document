import React, {Component} from 'react';
import propTypes from 'prop-types';
import Avatar from './components/avatar.js';
import Build from "./components/build.js";
import BookMark from "./components/bookMark.js";
import Ball from './components/ball.js';
import ChartCom from './components/chartCom.js'
import DatepickerHelper from './components/datepicker.helper.js';
import Datepicker from './components/datepicker.js';
import DropdownMenu from './components/dropdownMenu.js';
import Input from './components/input.js';
import Iframe from './components/iframe.js';
import MultipleHelper from './components/multipleHelper.js';
import PagingBtn from './components/pageingBtn.js';
import Popover from './components/popover.js';
import RadioHelper from "./components/radioHelper.js";
import RateInput from "./components/rate.input.js";
import SwitchButton from "./components/switchButton.js";
import Tab from "./components/tab.js";
import TableBody from './components/tableBody.js';
import TableHeader from './components/tableHeader.js';
import Tabs from './components/tabs.js';
import TipPanel from './components/tipPanel.js';
import Toast from './components/toast.js';
import CitySelector from './components/citySelector.js';
import CAPTCHA from './components/captcha.js';
import BannerCarousel from './components/carousel.js';
import CheckboxHelper from './components/checkbox.js';
import CountdownBg from './components/countdown.js';
import DescHelper from './components/descHelper.js';
import ConditionHelper from './components/conditionHelper.js';
import FormHelper from './components/formHelper.js';
import FormLayout from './components/formLayout.js';
import LoadingDOM from './components/loading.js';
import Mediaquery from './components/mediaquery.js';
import QRCode from './components/qRCode.js';
import Ranger from './components/ranger.js';
import TipButton from './components/tipButton.js';
import Modal from './components/modal.js';
import StateButton from './components/button.js';
import RecordItemsHelper from './components/recordItemsHelper.js';
import IconInput from './components/icon.input.js';
import { BrowserRouter, Link, Route,} from 'react-router-dom';
import './scss/components.scss';
var Prism = require('prismjs');
export default class ComponentsGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollState:0,
    }
  }

  /**
   * [menuFixed: 菜单滚动固定]
   * @param  {[type]} id [sudo-top]
   * @return {[type]}    [description]
   */
  menuFixed(id) {
    let self = this;
    var obj = document.getElementById(id);
    var menuTop = obj.offsetTop + 150;
    window.onscroll = function (){
      self.changePos(obj,menuTop);
    }
  }
  /**
     * [changePos:滚动屏幕修时修改状态]
     * @param  {[type]} obj     [sudo-top 对象]
     * @param  {[type]} menuTop [对象对顶部距离]
     * @return {[type]}         [description]
     */
    changePos(obj, menuTop) {
      var scrollTop = document.body.scrollTop;
      var height = document.body.offsetHeight;
      if(scrollTop > menuTop) {
        this.setState({
          scrollState: 1,
        })
      } if(scrollTop < menuTop){
        this.setState({
          scrollState: 0,
        })
      }
    }


  render() {
    var {scrollState} = this.state;
    return (
      <div className="container-main">
        <div className="container-header" id="header">
          <span className="header-title">ukelli-ui</span>
          <div className="header-content">简易的UI库，提供配置式的表单，支持表单验证，支持统一表格格式。</div>
        </div>
        <div className="container-context">
          <div className="container-items">
            <div className="doc-item">
              <BrowserRouter>
                <div>
                  <BookMark />
                  <Route path='/' exact component={Build}/>
                  <Route path='/build' component={Build}/>
                  <Route path='/avatar' component={Avatar}/>
                  <Route path='/ball' component={Ball}/>
                  <Route path='/button' component={StateButton}/>
                  <Route path='/iconInput' component={IconInput}/>
                  <Route path='/bannerCarousel' component={BannerCarousel}/>
                  <Route path='/dataHelp' component={DatepickerHelper}/>
                  <Route path='/datetimePicker' component={Datepicker}/>
                  <Route path='/dropdownMenu' component={DropdownMenu}/>
                  <Route path='/input' component={Input}/>
                  <Route path='/iframe' component={Iframe}/>
                  <Route path='/multipleHelper' component={MultipleHelper}/>
                  <Route path='/pagingBtn' component={PagingBtn}/>
                  <Route path='/popover' component={Popover}/>
                  <Route path='/radioHelper' component={RadioHelper}/>
                  <Route path='/rateInput' component={RateInput}/>
                  <Route path='/switchButton' component={SwitchButton}/>
                  <Route path='/tableBody' component={TableBody}/>
                  <Route path='/tableHeader' component={TableHeader}/>
                  <Route path='/tabs' component={Tabs}/>
                  <Route path='/tipPanel' component={TipPanel}/>
                  <Route path='/toast' component={Toast}/>
                  {/*<Route path='/citySelector' component={CitySelector}/>*/}
                  <Route path='/countdownBg' component={CountdownBg}/>
                  <Route path='/descHelper' component={DescHelper}/>
                  <Route path='/conditionHelper' component={ConditionHelper}/>
                  <Route path='/FormHelper' component={FormHelper}/>
                  <Route path='/formLayout' component={FormLayout}/>
                  <Route path='/loadingDOM' component={LoadingDOM}/>
                  {/*<Route path='/qRCode' component={QRCode}/>*/}
                  <Route path='/ranger' component={Ranger}/>
                  <Route path='/tipButton' component={TipButton}/>
                  <Route path='/modal' component={Modal}/>
                  <Route path='/recordItemsHelper' component={RecordItemsHelper}/>
                </div>
              </BrowserRouter>
            </div>
         </div>

       </div>
    </div> //container-main
    )
  }
}
