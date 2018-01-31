import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as CommonComponents from 'ukelli-ui';
import {ChartCom} from 'ukelli-ui';

const type = {
  type: 'bar',
};

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

const options = {
  scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
}
export default class BallExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isOpening: true,
    }
  }

  stopNow(){
    this.setState({
      isOpening :false,
    })
  }
  opening(){
    this.setState({
      isOpening :true,
    })
  }
  componentDidMount(){
    PR.prettyPrint();
  }
  render() {
    var  {isOpening} = this.state;
    const self = this;
    return (
      <div className="avator">
        <div className="item-title"><a name="charts">图表组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import * as CommonComponents from 'matrix-web-basic-components';<br/>
              import &#123;Ball{'}'}  from 'ukelli-ui';
            </code>
          </pre>
        </div>
        <div className="item-thititle">参数说明(待定)</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              <div className="item-fourtitle">data:</div>
              图表数据。 参数类型: object 示例: <br/>
              <div className="item-fourtitle">options:</div>
              参数类型: object 示例: <br/>
              <div className="item-fourtitle">type:</div>
              参数类型: string 示例: <br/>
            </code>
          </pre>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用随机数组件</div>
            <div className="item-border">
              <ChartCom data={data} options={options} type={"bar"}/>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.state = &#123;<br/>
                   &nbsp; isOpening: true,<br/>
                   &nbsp;}<br/>
                   }<br/>

                   stopnow()&#123;<br/>
                   &nbsp;this.setState(&#123;<br/>
                   &nbsp; isOpening :false,<br/>
                   &nbsp;})<br/>
                   }<br/>
                   &nbsp;opening()&#123;<br/>
                   &nbsp;this.setState(&#123;<br/>
                   &nbsp; isOpening :true,<br/>
                   &nbsp;})<br/>
                   }<br/>

                   render() &#123;<br/>
                     var  &#123;isOpening} = this.state;<br/>
                     const self = this;<br/>
                     return (<br/>
                       {' <Ball animate='}&#123;true} animateTimer=&#123;500} isOpening=&#123;isOpening} openCode=&#123;'51829'} activeFilter=&#123;'xxooo'}/><br/>
                       {' <span className="btn"'} onClick=&#123;() => self.opening()}>开始{'</span>'}<br/>
                       {' <span className="btn"'} onClick=&#123;() => self.stopNow()}>停止{'</span>'}<br/>
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
