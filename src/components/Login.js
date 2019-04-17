import React from 'react'
import { Form, Icon, Input, Button } from 'antd'

class Login extends React.Component {
  handleSubmit = (e)=> {
    console.log(this)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginOrSignUp(values)
      }
    });
  }
  render() {
    console.log(this)
    const { getFieldDecorator } = this.props.form;
    let text = this.props.value == 1 ?'注册':'登录'
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {text}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const LoginWrapper = Form.create({})(Login);

export default LoginWrapper