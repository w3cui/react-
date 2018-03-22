import React from 'react';
import { Lifecycle } from 'react-router'
import ReactQMap from 'react-qmap';

import { Form, Button, Input, InputPassword } from 'uiw';

/*表单组件*/


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: 'wui',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称' },
          { min: 5, message: '长度不够！' }
        ],
        password: [
          { required: true, message: '不能为空！' },
          { min: 6, message: '长度不够！' },
          { max: 14, message: '长度超出！' }
        ]
      }
    }
  }

  onChange(key, e, value) {
    const { form } = this.state;
    form[key] = value;
    this.setState({ form });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.form.validate((valid, dataValues) => {
      console.log("返回内容:", dataValues, valid)
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  render() {
    const { form, rules } = this.state;
    const FormItem = Form.Item;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        className: "colspanlab"
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
        className: "colspan"
      },
    };
    const wrapperCol = {
      wrapperCol: {
        xs: { span: 24, offset: 0, },
        sm: { span: 14, offset: 4, },
      },
    }
    const { labelCol } = formItemLayout;
    console.log(labelCol);
    return (
      <div>
        <Form style={{ width: 500, padding: "30px 0 0 0" }} className="sss" ref={(component) => { this.form = component }} model={form} rules={rules}>
          <FormItem label={<span>用户名</span>} field="name" {...formItemLayout} >
            <Input
              value={form.name}
              preIcon="user"
              placeholder="请输入用户名"
              onChange={this.onChange.bind(this, 'name')} />
          </FormItem>
          <FormItem label="密码" field="password" {...formItemLayout} >
            <InputPassword
              value={form.password}
              preIcon="unlock"
              type="password"
              placeholder="请输入密码"
              onChange={this.onChange.bind(this, 'password')}
              length={6}
            />
          </FormItem>
          <FormItem {...wrapperCol}>
            <Button size="small" type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
          </FormItem>

        </Form>
        <hr />
        <ReactQMap
          center={{ latitude: 39.96693, longitude: 116.49369 }}
          initialOptions={{ zoomControl: true, mapTypeControl: true }}
          apiKey="2U5BZ-6VEW3-HQF35-YQ2HK-GCXOF-SIFTZ"
          style={{ height: 300 }}
        />
      </div>
    );
  }
}


export default Forms;


