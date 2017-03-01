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
                <i-col span="2" offset="8">
                   
                        <i-button type="text" size="large">登陆/注册</i-button>
                   
                </i-col>
                        
                
            </row>    
        </Menu>

      
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>