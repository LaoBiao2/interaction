<template>
	<div class="VueFooter">
		<span class="span-comp">广州互动商业服务有限公司</span>
		<span class="span-addr">地址: 海珠区新港东路1066号中洲中心</span>
		<span class="span-copy">Copyright © 2011 - 2019 广州互动商业服务有限公司 版权所有</span>
	</div>
</template>

<script>
export default {
    data() {
        return {
            comp: '',
            addr: '',
            copy: ''
        }
    },
    mounted() {
        this.$axios.get("/api")
        .then((response) => {
            // console.log(response);
            this.comp = response.data.config.con_company;
            this.addr = response.data.config.con_address;
            this.copy = response.data.config.con_copyright;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>


<style lang="scss">
.VueFooter {
	width: 100%;
	height: 155px;
    background-color: #0a0f2b;
    padding: 37px 0 34px;
    box-sizing: border-box;
	span {
        font-size: 14px;
        color: #aaa;
        display: block;
        text-align: center;
    }
    .span-addr {
        margin: 22px auto 18px;
    }
}
</style>

