<style scoped>
.demo-carousel{
    height:60vh;
    width:100%;
    background:#222;
}
</style>
<template>
    <Carousel autoplay v-model="value">
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>