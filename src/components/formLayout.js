import React, {Component} from 'react';
import propTypes from 'prop-types';
import {FormLayout, FormHelper} from 'ukelli-ui';
export default class FormLayoutExample extends Component {
  constructor(props) {
    super(props);
    this.printObj = this.printObj.bind(this);

    this.state = {
      hasErr: false,   //提交状态
      resDesc: '成功',  //
      submiting: false
    }

    this.formOptions = [
      {
        ref: 'RefName1', // 与服务器通讯的对应的字段
        type: 'input',
        defaultValue: '',
        desc: '这里是描述',
        title: '输入名',
        required: true
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
      },
      {
        ref: 'RefName3', // 与服务器通讯的对应的字段
        type: 'radio',
        defaultValue: 0,
        values: [{
          text: '是',
          value: 0
        }, {
          text: '否',
          value: 1
        }],
        title: '单选'
      },
    ]
  }

   printObj(val, ref) {
     console.log(val, ref);
   }
   componentDidMount(){
     PR.prettyPrint();
   }
   onSubmitBtn(formRef) {
     console.log(formRef, '表单数据');
     const checkFromResult = formRef.checkForm();
     console.log(checkFromResult, '表单验证结果');
     if(!checkFromResult.isPass) {
       return this.setState({
         hasErr: true,
         resDesc: checkFromResult.desc + '不正确',
       })
     } else {
       /**
        * 这里做与服务器的数据传送
        * @type {Boolean}
        */
       console.log(formRef.value, '表单里的 values');
       this.setState({
         submiting: true
       });
       /**
        * 服务器通讯成功
        * @param {[type]} this   [description]
        * @param {[type]} render [description]
        */
       setTimeout(() => {
         this.setState({
           submiting: false,
           hasErr: false,
           resDesc: '提交成功',
         });
       }, 2000);
     }
   }
  render() {
    const {submiting, hasErr, resDesc} = this.state;
    var printObj = this.printObj;
    var btnConfig = [
      {
        action : this.onSubmitBtn.bind(this),
        text: 'btnText1',
        className: 'blue'
      },
      {
        action : this.onSubmitBtn.bind(this),
        text: 'btnText2',
        className: 'red'
      },
    ]
    return (
      <div className="avator">
        <div className="item-title"><a name="formHelper">FormLayout组件(表单布局与交互)</a></div>
        <div className="item-sectitle">使用</div>
        <div className="item-thititle">引入</div>
        <div className="item-content">
          <pre className="prettyprint">
            <code>
              import &#123;FormLayout} from 'ukelli-ui'; <br/>
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
                <td>表单元素配置。</td>
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
              <tr>
                <td>btnConfig</td>
                <td>按钮设置。</td>
                <td>array</td>
                <td></td>
              </tr>
              <tr>
                <td>btnConfig</td>
                <td>按钮设置。</td>
                <td>array</td>
                <td>var btnConfig = [&#123;<br/>
                    &nbsp; action : this.onSubmitBtn,<br/>
                    &nbsp; text: 'btnText1',<br/>
                    &nbsp; className: 'theme1'<br/>
                  &nbsp;}]<br/>
                btnConfig=&#123;btnConfig}</td>
              </tr>
              <tr>
                <td>onSubmit</td>
                <td>提交时候触发回调函数。</td>
                <td>array</td>
                <td>onSubmitBtn()</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>是否是缓冲状态。</td>
                <td>bool</td>
                <td>loading=&#123;true}</td>
              </tr>
              <tr>
                <td>hasErr</td>
                <td>是否有错误。</td>
                <td>bool</td>
                <td>hasErr=&#123;true}</td>
              </tr>
              <tr>
                <td>resDesc</td>
                <td>提示信息。</td>
                <td>string</td>
                <td>resDesc=&#123;'成功'}</td>
              </tr>
              <tr>
                <td>childrenBeforeForm</td>
                <td>在表单之前插入元素。</td>
                <td>any</td>
                <td>childrenBeforeForm=&#123;'this is childrenBeforeForm'}</td>
              </tr>
              <tr>
                <td>childrenAfterForm</td>
                <td>在表单之后插入元素。</td>
                <td>any</td>
                <td>childrenAfterForm=&#123;'this is childrenAfterForm'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="item-thititle">按钮配置</div>
        <div className="item-content">
          <div className="item-describe">为表单添加按钮</div>
          <pre className="prettyprint">
            <code>
              var btnConfig = [<br/>
                &#123;<br/>
                &nbsp;action : this.onSubmitBtn.bind(this),<br/>
                &nbsp;  text: 'btnText1',<br/>
                &nbsp;  className: 'blue'<br/>
                },<br/>
                &#123;<br/>
                &nbsp;action : this.onSubmitBtn.bind(this),<br/>
                &nbsp;text: 'btnText2',<br/>
                &nbsp;className: 'red'<br/>
                },
              ]
            </code>
          </pre>
        </div>
        <div className="item-thititle">提交处理</div>
        <div className="item-content">
          <div className="item-describe">处理提交的表单数据</div>
          <pre className="prettyprint">
            <code>
              &nbsp;onSubmitBtn(formRef) &#123;<br/>
              &nbsp;  console.log(formRef, '表单数据');<br/>
              &nbsp;  const checkFromResult = formRef.checkForm();<br/>
              &nbsp;  console.log(checkFromResult, '表单验证结果');<br/>
              &nbsp;  if(!checkFromResult.isPass) &#123;<br/>
              &nbsp;    return this.setState(&#123;<br/>
              &nbsp;      hasErr: true,<br/>
              &nbsp;      resDesc: checkFromResult.desc + '不正确',<br/>
              &nbsp;    })<br/>
              &nbsp;  } else &#123;<br/>
              &nbsp;    /**<br/>
              &nbsp;     * 这里做与服务器的数据传送<br/>
              &nbsp;     * @type &#123;Boolean}<br/>
              &nbsp;   &nbsp;*/<br/>
              &nbsp;    console.log(formRef.value, '表单里的 values');<br/>
              &nbsp;    this.setState(&#123;<br/>
              &nbsp;      submiting: true<br/>
              &nbsp;    });<br/>
              &nbsp;    /**<br/>
              &nbsp;     * 服务器通讯成功<br/>
              &nbsp;     * @param &#123;[type]} this   [description]<br/>
              &nbsp;     * @param &#123;[type]} render [description]<br/>
              &nbsp;     */<br/>
              &nbsp;    setTimeout(() => &#123;<br/>
              &nbsp;      this.setState(&#123;<br/>
              &nbsp;        submiting: false,<br/>
              &nbsp;        hasErr: false,<br/>
              &nbsp;        resDesc: '提交成功',<br/>
              &nbsp;      });<br/>
              &nbsp;    }, 2000);<br/>
              &nbsp;  }<br/>
              &nbsp;}
            </code>
          </pre>
        </div>
        <div className="item-thititle">实例</div>
        <div className="item-content">
          <div className="item-describe">使用FormHelper组件(表单)</div>
            <div className="item-border">
              <FormLayout
                tipInfo={{
                  title: '使用说明',
                  texts: [
                    '第一条',
                    '第二条',
                    '第三条',
                  ]
                }}
                loading={submiting}
                hasErr={hasErr}
                resDesc={resDesc}
                formOptions={this.formOptions}
                onChange={printObj}
                btnConfig={btnConfig}
                loading={false}
                childrenBeforeForm={'this is childrenBeforeForm'}
                childrenAfterForm={'this is childrenAfterForm'}/>
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

                   printObj(obj) &#123;<br/>
                   &nbsp;console.log(obj);<br/>
                   }<br/>

                   onSubmitBtn() &#123;<br/>
                   &nbsp;console.log('onSubmit');<br/>
                   }<br/>
                   render() &#123;<br/>
                   &nbsp;const &#123;submiting, hasErr, resDesc} = this.state; <br/>
                   &nbsp;var printObj = this.printObj;<br/>
                   &nbsp;var btnConfig = [<br/>
                   &nbsp; &#123;<br/>
                   &nbsp;  action : this.onSubmitBtn.bind(this),<br/>
                   &nbsp;  text: 'btnText1',<br/>
                   &nbsp;  className: 'blue'
                   &nbsp; },<br/>
                   &nbsp; &#123;<br/>
                   &nbsp;  action : this.onSubmitBtn.bind(this),<br/>
                   &nbsp;  text: 'btnText2',<br/>
                   &nbsp;  className: 'red'<br/>
                   &nbsp; },<br/>
                   ]<br/>
                   &nbsp;return (<br/>
                   &nbsp; {'<FormLayout'}<br/>
                   &nbsp;   tipInfo=&#123;&#123;<br/> &nbsp;
                   &nbsp;   title: '使用说明',<br/>
                   &nbsp;   texts: [<br/>
                   &nbsp;   '第一条',<br/>
                   &nbsp;   '第二条',<br/>
                   &nbsp;   '第三条',
                   &nbsp;     ]<br/>
                   &nbsp;   }}<br/>
                   &nbsp;    loading=&#123;submiting}<br/>
                   &nbsp;    hasErr=&#123;hasErr}<br/>
                   &nbsp;    resDesc=&#123;resDesc}<br/>
                   &nbsp;    formOptions=&#123;this.formOptions}<br/>
                   &nbsp;    onChange=&#123;printObj}<br/>
                   &nbsp;    btnConfig=&#123;btnConfig}<br/>
                   &nbsp;    loading=&#123;false}<br/>
                   &nbsp;    childrenBeforeForm=&#123;'this is childrenBeforeForm'}<br/>
                    &nbsp;   childrenAfterForm=&#123;'this is childrenAfterForm'}/><br/>
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
