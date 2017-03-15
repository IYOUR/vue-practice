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
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <Menu-item key="1">
                <Icon type="ios-navigate"></Icon>
                导航一
            </Menu-item>
            <Menu-item key="2">
                <Icon type="ios-keypad"></Icon>
                导航二
            </Menu-item>
            <Menu-item key="3">
                <Icon type="ios-analytics"></Icon>
                导航三
            </Menu-item>
            <Menu-item key="4">
                <Icon type="ios-paper"></Icon>
                导航四
            </Menu-item>
        </div>
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
		}
	}
}
</script>