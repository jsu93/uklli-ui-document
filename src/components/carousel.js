import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Carousel} from 'ukelli-ui';
import Component1 from './component1.js'
import Component2 from './component2.js'
export default class RateInputExample extends Component {
  constructor(props) {
    super(props);
    this.printTime = this.printTime.bind(this);
  }
  componentDidMount(){
    PR.prettyPrint();
  }
   printTime(obj) {
     console.log(obj);
   }

  render() {
    var printTime = this.printTime;
    var config = [<Component1/>,<Component2/>];
    return (
      <div className="avator">
        <div className="item-title"><a name="bannerCarousel">BannerCarousel组件(轮播)</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;Carousel} from 'ukelli-ui'; <br/>
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
                <td>config</td>
                <td>轮播组件</td>
                <td>array</td>
                <td>var config = [{'<'}Component1/>,{'<'}Component2/>];</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用Carousel组件</div>
            <div className="item-border">
              <Carousel config={config}/><br/>

             <pre className="prettyprint">
                 <code>
                   render() &#123;<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<Carousel'} config=&#123;config}/><br/>
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
