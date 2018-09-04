<template>
	<div class="VueHeader">
		<div class="content clearfix">
			<div class="logo">
				<img src="../assets/images/common/logo.png" alt="">
			</div>
			<ul>
				<li><a href="javascript:;">首页</a></li>
				<li><a href="javascript:;">产品服务</a></li>
				<li><a href="javascript:;">能力优势</a></li>
				<li><a href="javascript:;">关于我们</a></li>
				<li><a href="javascript:;">新闻中心</a></li>
			</ul>
		</div>
	</div>
</template>

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
			width: 104px;
			display: inline-block;
			line-height: 76px;
			a {
				color: #aaaaaa;
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

