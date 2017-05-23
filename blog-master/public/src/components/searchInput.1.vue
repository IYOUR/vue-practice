<style scoped>
.d7 form {
    width: auto;
    float: right;
    margin-right: 30px;
}
form {
    position: relative;
    width: 300px;
    margin: 0 auto;
}
.d7 input {
    width: 230px;
    height: 35px;
    padding-left: 15px;
    border-radius: 42px;
    border: 2px solid #324b4e;
    background: #f5f7f9;
    outline: none;
    position: relative;
    transition: .3s linear;
}
.d7 button {
    width: 42px;
    height: 42px;
    background: none;
    border: none;
    position: absolute;
    top: 12px;
    right: 0;
    font-size: 20px;
    line-height: 42px;
    outline:none;
    cursor: pointer;
}
.d7 input:focus {
    width: 260px;
}
</style>
<template>
<div class="search d7">
	<form>
	  <input type="text" placeholder="搜索从这里开始...">
	  <button type=""><Icon type="ios-search-strong"></Icon></button>
	</form>
</div>
</template>
<script>
export default {
	methods: {

	}
}
</script>