<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-key="1">
            <row> 
                <i-col span="6"><div class="layout-logo"></div></i-col>
                <i-col span="8">
                    <div> 
                        <i-input type="text" placeholder="请输入..." style="width: 40%;"></i-input>
                        <i-button type="primary" shape="circle" icon="ios-search"></i-button>
                    </div>
                </i-col>
                <i-col span="3" offset="7">
                   
                        <i-button type="primary" @click="modal_login = true">登陆</i-button>
                        <i-button type="primary" @click="modal_login = true">注册</i-button>
                  
                   
                </i-col>
                        
                
            </row>    
        </Menu>

      
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
        <Modal :visible.sync="modal_login" :mask-closable="false" width="360">
            <p slot="header" style="color:#0c6;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>登陆</span>
            </p>
            <div style="text-align:left">
                <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Form-item label="姓名" prop="name">
                        <i-input :value.sync="formValidate.name" placeholder="请输入用户名/邮箱"></i-input>
                    </Form-item>
                    <Form-item label="邮箱" prop="mail">
                        <i-input :value.sync="formValidate.mail" placeholder="请输入密码"></i-input>

                    </Form-item>
                    <Form-item prop="mail">
                            <Checkbox-group :model.sync="formItem.checkbox">
                            <Checkbox>记住登陆</Checkbox>
                        </Checkbox-group>
                    </Form-item>
                </i-form>
            </div>
            <div slot="footer">
                <i-button type="success" size="large" long :loading="modal_loading">登陆</i-button>
            </div>
        </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal_login: false,
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                  ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        }
    }
</script>