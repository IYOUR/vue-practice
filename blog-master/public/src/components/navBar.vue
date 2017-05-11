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
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
        cursor:pointer;
    }  
    .option{
        color: #464c5b;
        font-size: 14px;
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
</style>
<template>
    <Row>
        <i-col span="1">col-12</i-col>
        <i-col span="4">col-12</i-col>
        <i-col span="15">col-12</i-col>
        <i-col span="4">
            <div v-if="isLogin" style="text-align:center;">
                <span>
                    <Badge count="3">
                        <Poptip  v-bind:title="'欢迎，'+userInfo.username" placement="bottom-start" width="150">
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
            <div v-else="isLogin" style="text-align:center;">
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
	}
}
</script>