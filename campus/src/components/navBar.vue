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
            <div v-if="isLogin">
                <Badge count="3">
                 <Poptip title="欢迎，{{user.name}}" placement="bottom-start" width="150">
                  <img class="head-image" src="../static/images/head.jpg"/>
                  <div class="api" slot="content">
                     <ul class="option">
                        <li><Icon type="chatbox-working"></Icon><span>消息</span></li>
                        <li><Icon type="person"></Icon><span>个人中心</span></li>
                        <li><Icon type="power"></Icon><span>退出</span></li>
                     </ul>
                  </div>
                 </Poptip> 
                </Badge>
            </div>
            <div v-else="isLogin">
                <i-button type="primary" @click="loginModal">登陆</i-button>
                <i-button type="primary" @click="registerModal">注册</i-button>
            </div>                           
        </i-col>
    </row> 
  </Menu>   
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
		logout () {
			this.$Modal.confirm({
				title: '警告',
				content: '<p>确定退出当前账号？</p>',
				cancelText: '取消',
				okText: '安全退出',
				onOk: () => {
					this.$store.commit('logout');
					this.$route.router.go({name: 'login'});
				}
			})
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