<template>
	<div class="VueHeader">
		<div class="content clearfix">
			<div class="logo">
				<nuxt-link to="/"><img src="~/assets/images/common/logo.png" alt=""></nuxt-link>
			</div>
			<ul>
				<li v-for="(navLi, index) in navList" :key="index">
                    <nuxt-link :to="navLi.nav_url">{{navLi.nav_title}}</nuxt-link>
                </li>
				<!-- <li><nuxt-link to="/">首页</nuxt-link></li>
				<li><nuxt-link to="/service">产品服务</nuxt-link></li>
				<li><nuxt-link to="/advantage">能力优势</nuxt-link></li>
				<li><nuxt-link to="/news">新闻中心</nuxt-link></li>
				<li><nuxt-link to="/about">关于我们</nuxt-link></li> -->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
        data(){
            return {
                navList: []
            }
        },
		methods: {
        },
        mounted() {
            this.$axios.get("/api")
            .then((response) => {
                // console.log(response);
                this.navList = response.data.nav;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
	};

</script>

<style lang="scss">
.VueHeader {
	width: 100%;
	height: 76px;
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	background-color: #0a0f2b;
	line-height: 76px;
	.logo {
		width: 190px;
		height: 58px;
		margin: 9px 0;
		float: left;
		img {
			width: 100%;
			height: 100%;
		}
	}
	ul {
		float: right;
		li {
            text-align: center;
			width: 104px;
			display: inline-block;
			line-height: 76px;
			a {
				color: #aaaaaa;
			}
            a.nuxt-link-exact-active {
                color: #fff;
            }
		}
		li:hover {
			a {
				color: #fff;
			}
		}
	}
}
</style>

