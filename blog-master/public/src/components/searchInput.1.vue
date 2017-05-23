<style scoped>
.sb-search {
    position: relative;
    margin-top: 13px;
    width: 0%;
    min-width: 40px;
    height: 40px;
    float: right;
    overflow: hidden;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    transition: width 0.3s;
    -webkit-backface-visibility: hidden;
}
.sb-search-input {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    background: rgba(0,0,0,.2);
    width: 100%;
    height: 40px;
    margin: 0;
    z-index: 10;
    padding: 20px 65px 20px 20px;
    font-family: inherit;
    font-size: 20px;
    color: #2c3e50;
}
.sb-search-submit {
    background: #fff;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    color: transparent;
    border: none;
    outline: none;
    z-index: -1;
}
.sb-icon-search, .sb-search-submit {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.sb-icon-search {
    color: #fff;
    background: #e67e22;
    z-index: 90;
    font-size: 22px;
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
}
.sb-icon-search, .sb-search-submit {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.sb-icon-search:before {
    content: "\e000";
}
.sb-search.sb-search-open, .no-js .sb-search {
    width: 50%;
}
</style>
<template>
<div id="sb-search" class="sb-search sb-search-open">
    <form>
        <input class="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search">
        <input class="sb-search-submit" type="submit" value="">
        <span class="sb-icon-search"></span>
    </form>
</div>
</template>
<script>
export default {
	methods: {

	}
}
</script>