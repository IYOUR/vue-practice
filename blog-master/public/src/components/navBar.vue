<style scoped>
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
    .head-image{
        width: 40px;
        height: 40px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
        cursor:pointer;
    }  
    .option{
        color: #464c5b;
        font-size: 14px;
        text-align:left;
        cursor: pointer;
    }
    .option li{
        height: 30px;
        line-height: 30px; 
        padding-left: 10px;  
    } 
    .option li:hover{
        background:#f5f7f9;
    }
    .option li>span{
        padding-left: 5px;
    } 
    .navigation{
        text-align:center;
        height:65px;
        line-height:65px;
    }
    .logo{
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        font-size:25px;
    }
    .home{
         font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
         font-size:14px;
    }
</style>
<template>
    <Row class="navigation">
        <i-col span="3"><div style="height:65px;"><span class="logo">简书</span></div></i-col>
        <i-col span="2"><span class="home">首页</span></i-col>
        <i-col span="15">
            <span>
            <search-input></search-input>
            </span>    
        </i-col>
        <i-col span="4">
            <div v-if="isLogin">
                <span>
                    <Badge count="3">
                        <Poptip  v-bind:title="'欢迎，'+userInfo.username" placement="bottom" width="150">
                        <img class="head-image" src="../static/images/head.jpg"/>
                        <div class="api" slot="content">
                            <ul class="option">
                            <li><Icon type="chatbox-working"></Icon><span>消息</span></li>
                            <li @click="home"><Icon type="person"></Icon><span>个人中心</span></li>
                            <li @click="logOut"><Icon type="power"></Icon><span>退出</span></li>
                            </ul>
                        </div>
                        </Poptip> 
                    </Badge>
                </span>
            </div>
            <div v-else="isLogin">
                <span>
                    <Button-group shape="circle">
                        <i-button type="ghost" @click="loginModal">登录</i-button>
                        <i-button type="ghost" @click="registerModal">注册</i-button>
                    </Button-group>
                </span>

            </div>      
        </i-col>
    </Row> 
</template>
<script>
import searchInput from './searchInput.1'
export default {
	computed: {
		isLogin () {
			return this.$store.state.isLogin
		},
        userInfo () {
            return this.$store.state.user
        }
	},
	methods: {
		logOut () {
			this.$Modal.confirm({
				title: '警告',
				content: '<p>确定退出当前账号？</p>',
				cancelText: '取消',
				okText: '安全退出',
				onOk: () => {
                    localStorage.removeItem("access_token");
                    sessionStorage.removeItem("userInfo");
                    this.$store.commit('logout');
					this.$router.go('/index');
                    this.$http.post('/user/loginUserOut.go'
                    ).then((response) => {
                    }, (error) => {
                    });
				}
			})
		},
        home () {
            this.$router.go('/home');
        },
        loginModal () {
            this.$store.commit('setLoginModal', true);
        },
        registerModal () {
            this.$store.commit('setRegisterModal', true);
        }
	},
    components: {
    'search-input': searchInput
  }  
}
</script>