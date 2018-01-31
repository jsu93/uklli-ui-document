import React, {Component} from 'react';
import propTypes from 'prop-types';
import {FormHelper} from 'ukelli-ui';
export default class FormLayoutExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);

    this.formOptions = [
        {
          ref: 'RefName1', // 与服务器通讯的对应的字段
          type: 'input',
          defaultValue: '',
          desc: '这里是描述',
          title: '输入名',
          required: true,
        },
        {
          ref: 'RefName2', // 与服务器通讯的对应的字段
          type: 'select',
          defaultValue: 0,
          values: {
            0: '是',
            1: '否'
          },
          title: '下拉菜单'
        },]
  }
    componentDidMount(){
      PR.prettyPrint();
    }
   printObj(obj) {
     console.log(obj);
   }
   onSubmitBtn(){
     console.log('onSubmit');
   }
  render() {
    var printObj = this.printObj;
    var btnConfig = [
      {
        action : this.onSubmitBtn,
        text: 'btnText1',
        className: 'theme1'
      }
    ]

    return (
      <div className="avator">
        <div className="item-title"><a name="formHelper">FormHelper组件</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;FormHelper} from 'ukelli-ui'; <br/>
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
                <td>formOptions</td>
                <td>参数配置</td>
                <td>array</td>
                <td>&nbsp;this.formOptions = [&#123;<br/>
                &nbsp;   ref: 'RefName1', // 与服务器通讯的对应的字段<br/>
                &nbsp;   type: 'input',<br/>
                &nbsp;   defaultValue: '默认值',<br/>
                &nbsp;   desc: '这里是描述',<br/>
                &nbsp;   title: '输入名',<br/>
                &nbsp;   required: true<br/>
                &nbsp; },<br/>
                &nbsp; &#123;<br/>
                &nbsp;  ref: 'RefName2', // 与服务器通讯的对应的字段<br/>
                &nbsp;  type: 'select',<br/>
                &nbsp;  defaultValue: 0,<br/>
                &nbsp;  values: &#123;<br/>
                &nbsp;   0: '是',<br/>
                &nbsp;   1: '否'<br/>
                &nbsp;  },<br/>
                &nbsp;  title: '下拉菜单'<br/>
                &nbsp; },]<br/>

                formOptions=&#123;Config}</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>回调函数。</td>
                <td>func</td>
                <td>onChange=&#123;(...args)=>console.log(...args)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用FormHelper组件(表单)</div>
            <div className="item-border">
              <FormHelper formOptions={this.formOptions}>
                <span className="btn theme flat">提交</span>
              </FormHelper>
               <pre className="prettyprint">
                 <code>
                   constructor(props) &#123;<br/>
                   &nbsp;super(props);<br/>
                   &nbsp;this.printObj = this.printObj.bind(this);<br/>

                   &nbsp;this.formOptions = [<br/>
                   &nbsp; &#123;<br/>
                   &nbsp;   ref: 'RefName1', // 与服务器通讯的对应的字段<br/>
                   &nbsp;   type: 'input',<br/>
                   &nbsp;   defaultValue: '默认值',<br/>
                   &nbsp;   desc: '这里是描述',<br/>
                   &nbsp;   title: '输入名',<br/>
                   &nbsp;   required: true<br/>
                   &nbsp; },<br/>
                   &nbsp; &#123;<br/>
                   &nbsp;  ref: 'RefName2', // 与服务器通讯的对应的字段<br/>
                   &nbsp;  type: 'select',<br/>
                   &nbsp;  defaultValue: 0,<br/>
                   &nbsp;  values: &#123;<br/>
                   &nbsp;   0: '是',<br/>
                   &nbsp;   1: '否'<br/>
                   &nbsp;  },<br/>
                   &nbsp;  title: '下拉菜单'<br/>
                   &nbsp; },]<br/>

                   }<br/>

                   render() &#123;<br/>
                   &nbsp;var printObj = this.printObj;<br/>

                   &nbsp;return (<br/>
                   &nbsp; {'<FormHelper'} formOptions = &#123;this.formOptions} />
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
