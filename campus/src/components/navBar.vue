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
                <i-button type="primary" @click="loginModal">登陆</i-button>
                <i-button type="primary" @click="registerModal">注册</i-button>
        </i-col>
    </row> 
  </Menu>   
</template>
<script>
export default {
	computed: {
		username () {
			return this.$store.state.user.name;
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