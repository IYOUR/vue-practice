<style scoped>
    .layout{
       
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
    <nav-bar></nav-bar>
       <main-content></main-content>
    <div class="layout-copy">
        2011-2016 &copy; TalkingData
    </div>
</div>
  <Modal :visible.sync="modal_login" :mask-closable="false" @on-cancel="closeModal('loginValidate')" width="360">
    <p slot="header" style="color:#0c6;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>登陆</span>
    </p>
    <div style="text-align:left">
        <i-form v-ref:login-validate :model="loginValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="姓名" prop="name">
                <i-input :value.sync="loginValidate.name" placeholder="请输入用户名/邮箱">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <i-input type="password" :value.sync="loginValidate.password" placeholder="请输入密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>

            </Form-item>
            <Form-item>
                    <Checkbox-group>
                    <Checkbox :value.sync="loginValidate.auto">记住登陆</Checkbox>
                </Checkbox-group>
            </Form-item>
        </i-form>
    </div>
    <div slot="footer">
        <i-button type="success" @click="handleSubmit('loginValidate')" size="large" long :loading="loginButton.loading">{{loginButton.text}}</i-button>
    </div>
  </Modal>


  <Modal :visible.sync="modal_register" :mask-closable="false" @on-cancel="closeModal('registerValidate')" width="360">
    <p slot="header" style="color:#0c6;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>注册</span>
    </p>
    <div style="text-align:left">
        <i-form v-ref:register-validate :model="registerValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="用户名" prop="registerName">
                <i-input :value.sync="registerValidate.registerName" placeholder="请输入用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item label="邮箱" prop="mail">
                <i-input :value.sync="registerValidate.mail" placeholder="请输入邮箱">
                    <Icon type="ios-email-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <i-input type="password" :value.sync="registerValidate.password" placeholder="请输入密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>

            </Form-item>
            <Form-item label="重复密码" prop="password_confirmation">
                <i-input type="password" :value.sync="registerValidate.password_confirmation" placeholder="再次输入密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>

            </Form-item>                    
        </i-form>
    </div>
    <div slot="footer">
        <i-button type="success" @click="handleSubmit('registerValidate')" size="large" long :loading="registerButton.loading">{{registerButton.text}}</i-button>
    </div>
  </Modal>        
</template>
<script>
import navBar from '../components/navBar.vue'
import mainContent from '../components/mainContent.vue'
export default {
  computed: {
		modal_login () {
			return this.$store.state.loginModal;
		},
        modal_register () {
			return this.$store.state.registerModal;
		}
	},    
  data () {
    return {
        loginValidate: {
            name: '',
            password: '',
            mail: '',
            auto: false
        },
            registerValidate: {
            registerName: '',    
            password: '',
            password_confirmation:'',
            mail: '',
        }, 
        loginButton: {
            text: '登录',
            loading: false
        },
        registerButton: {
            text: '注册',
            loading: false
        },
        ruleValidate: {
            name: [
                { required: true, message: '用户名不能为空', trigger: 'blur' },
            ],
            registerName: [
                {required: true,validator: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('用户名不能为空'));
                    }
                //      else{
                //         var that = this;
                //         var isRepeat = function() {
                //             that.$http.post('/user/checkAccount.go', {
                //                 'username': value
                //              }).then((response) => {
                //                 if (response.data.errcode === false){
                //                     return true;
                //                  } else {
                //                      return false;
                //                  } 
                //              })
                //         }
                //         var check = function (callback) {
                //             var result = callback();
                //             if(result){
                //                 return callback(new Error('用户已存在'));
                //             }
                //         }

                //         return check(isRepeat);

                //   }
                return callback();
                }, trigger: 'blur'}
            ],
            password: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码不能少于六个字符', trigger: 'blur' }
            ],
            password_confirmation: [    
                {required: true,validator: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('请输入密码'));
                    }
                    if (value !== this.registerValidate.password) {
                        return callback(new Error('两次输入密码不一致'));
                    }
                    return callback();
                }, trigger: 'blur'}
            ],
            mail: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
            ]
        }
        
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {                     
          if (name === "loginValidate") {
                console.log(this.$store.state.isLogin)
                this.loginButton.text = "登陆中";
                this.loginButton.loading = true;
                this.$http.post('/user/login', {
                    'username': this.loginValidate.name,
                    'password': this.loginValidate.password
                }).then((response) => {
                    if (response.data.errcode == true) {
                        this.$store.commit('login');
                        localStorage.access_token = JSON.stringify({'username': this.loginValidate.name,'password': this.loginValidate.password});

                        this.$Message.destroy();
                        this.$Message.success('登陆成功!');
                        this.loginButton.text = "登陆";
                        this.loginButton.loading = false;
                        this.$refs[name].resetFields();
                        this.$store.commit('setLoginModal', false)
                        //this.$router.go('/home');
                        this.$store.commit('login');
                        this.$http.post('/user/getUserInfo.go'
                        ).then((response) => {
                        console.log(response);
                        this.$store.commit('setUser', response.data);
                        sessionStorage.setItem("userInfo", JSON.stringify(response.data));
                        }, (error) => {
                        redirect({name: 'login'});
                        });
                        //this.$router.redirect({name: 'home'});
                    }
                  else {
                       this.$Message.error('用户名不存在或密码错误!');
                       this.loginButton.text = "登陆";
                       this.loginButton.loading = false;
                  }
                },(error) => {
                    this.$Message.error('用户名不存在或密码错误!');
                    console.log(error);
                });

            }
            if (name === "registerValidate") {
                this.registerButton.text = "注册中";
                this.registerButton.loading = true;
                    this.$http.post('/user/register', {
                    'username': this.registerValidate.registerName,
                    'eMail': this.registerValidate.mail,
                    'password': this.registerValidate.password
                }).then((response) => {
                    console.log(response)
                if (response.data.errcode == true){                  
                    this.$Message.destroy();
                    this.$Message.success('注册成功,请登陆!');
                    this.$refs[name].resetFields();
                    this.registerButton.text = "注册";
                    this.registerButton.loading = false;
                    this.$store.commit('setRegisterModal', false);
                    this.$store.commit('setLoginModal', true);
                  }
                else {
                    this.$Message.error(response.data.errMsg);
                    this.registerButton.text = "注册";
                    this.registerButton.loading = false;
                }  
                },(error) => {
                    console.log(error);
                });                           
            }

        } else {
            this.$Message.error('表单验证失败!');
        }
    })
    },
    closeModal (name) {
        this.$refs[name].resetFields();
        (name === 'loginValidate')? this.$store.commit('setLoginModal', false):this.$store.commit('setRegisterModal', false);
    }
  },
  components: {
    'nav-bar': navBar,
    'main-content': mainContent
  }       
}
</script>