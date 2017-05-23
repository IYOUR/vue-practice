<style scoped>

.search-wrapper.active {}
.search-wrapper{
   margin-top: 8px;
}
 
.search-wrapper .input-holder {
    overflow: hidden;
    height: 50px;
    background: rgba(255,255,255,0);
    border-radius:6px;
    position: relative;
    width:70px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder {
    border-radius: 50px;
    width:450px;
    background: rgba(0,0,0,0.5);
    -webkit-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
}

.search-wrapper .input-holder .search-input {
    width:100%;
    height: 50px;
    padding:0px 0px 0px 20px;
    opacity: 0;
    position: absolute;
    top:-10px;
    left:0px;
    background: transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:none;
    outline:none;
    font-family:"Open Sans", Arial, Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    color:#FFF;
    -webkit-transform: translate(0, 60px);
    -moz-transform: translate(0, 60px);
    transform: translate(0, 60px);
    -webkit-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);

    -webkit-transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.search-wrapper.active .input-holder .search-input {
    opacity: 1;
    -webkit-transform: translate(0, 10px);
    -moz-transform: translate(0, 10px);
    transform: translate(0, 10px);
}

.search-wrapper .input-holder .search-icon {
    width:40px;
    height:40px;
    border:none;
    border-radius:6px;
    background: #FFF;
    padding:0px;
    outline:none;
    position: relative;
    z-index: 2;
    float:right;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder .search-icon {
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 30px;
}
.search-wrapper .input-holder .search-icon span {
    width:22px;
   
    display: inline-block;
    vertical-align: middle;
    position:relative;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    -moz-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);

}
.search-wrapper.active .input-holder .search-icon span {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.search-wrapper .input-holder .search-icon span::before, .search-wrapper .input-holder .search-icon span::after {
    position: absolute;
    content:'';
}
.search-wrapper .input-holder .search-icon span::before {
    width: 3px;
    height: 11px;
    left: 10px;
    top: 3px;
    border-radius: 2px;
    background: #666;
}
.search-wrapper .input-holder .search-icon span::after {
    width: 14px;
    height: 14px;
    left: 5px;
    top: -10px;
    border-radius: 16px;
    border: 2px solid #666;
}

@media screen and (max-width: 560px) {
    .search-wrapper.active .input-holder {width:200px;}
}
</style>
<template>
    <div class="search-wrapper active">
        <div class="input-holder">
            <input type="text" class="search-input" placeholder="Type to search" />
            <button class="search-icon"></button>
        </div>

    </div>
</template>
<script>
export default {
	methods: {

	}
}
</script>