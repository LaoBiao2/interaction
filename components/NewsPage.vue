<template>
	<div class="page-bar">
        <ul class="pagination clearfix">
            <li v-if="showFirst" class="page-btn"><a @click="cur--">上一页</a></li>
            <li v-for="(index, key) in indexs" :class="{ 'active': cur == index}" :key="key">
                <a @click="btnClick(index)">{{ index }}</a>
            </li>
            <li v-if="showLast" class="page-btn"><a @click="cur++">下一页</a></li>
            <li class="skip-li">
                到
                <input type="text" v-model="skipId"> 页
            </li>
            <li class="confirm-btn page-btn">
                <a @click="btnCheck(skipId)">确认</a>
            </li>
            <!-- <li class="page-all">共<i>{{all}}</i>页</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            all: 20,
            cur: 1,
            skipId: '',
            bol: true
        }
    },
    computed: {
        indexs: function(){
            var left = 1
            var right = this.all
            var ar = [] 
            if (this.bol) {
                if(this.all>= 7){
                    if(this.cur > 3 && this.cur < this.all-2){
                        left = this.cur - 3
                        right = this.cur + 2
                    }else{
                        if(this.cur<=3){
                            left = 1
                            right = 6
                        }else{
                            right = this.all
                            left = this.all -5
                        }
                    }
                }
            }
            while (left <= right){
                ar.push(left)
                left ++
            }   
            return ar
        },
        showLast: function(){
            if(this.cur == this.all){
                return false
            }
            return true
        },
        showFirst: function(){
            if(this.cur == 1){
                return false
            }
            return true
        }
    },
    methods: {
        btnClick: function(data){//页码点击事件
            if(data != this.cur){
                this.cur = data 
            }
        },
        btnCheck(data) {
            if (data > 0 && data <= this.all) {
                if(data != this.cur){
                    this.cur = data;
                    this.bol = false;
                }
            }
        }
    },
    watch: {
        cur: function(oldValue , newValue){
            console.log(arguments)
        }
    }
}
</script>


<style lang="scss" scoped>

ul,li{
    margin: 0px;
    padding: 0px;
}
li{
    list-style: none;
    moz-user-select: -moz-none; 
    -moz-user-select: none; 
    -o-user-select:none; 
    -khtml-user-select:none; 
    -webkit-user-select:none; 
    -ms-user-select:none; 
    user-select:none;
}

.pagination {
    width: max-content;
    margin: 47px auto 50px;
    text-align: center;
    li {
        float: left;
        line-height: 24px;
        margin-left: 16px;
        font-size: 16px;
        color: #999;
        line-height: 26px;
        height: 26px;
        a {
            width: 24px;
            height: 24px;
            line-height: 24px;
            display: block;
            color: #999;
            border: 1px solid #999;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
            moz-user-select: -moz-none; 
            -moz-user-select: none; 
            -o-user-select:none; 
            -khtml-user-select:none; 
            -webkit-user-select:none; 
            -ms-user-select:none; 
            user-select:none;
        }
        a:hover {
            color: #fff;
            background-color: #e91222;
            border-color: #e91222;
        }
        input {
            width: 46px;
            height: 24px;
            border-radius: 10px;
            border: 1px solid #999;
            text-align: center;
            color: #999;
            font-size: 16px;
        }
    }
    li.active {
        a {
            color: #fff;
            background-color: #e91222;
            border-color: #e91222;
        }
    }
    li.page-btn,
    li.page-all {
        width: 66px;
        border: 1px solid #999;
        border-radius: 26px;
        a {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 26px;
        }
    }
    li.page-btn:hover {
        background-color: #e91222;
        border-color: #e91222;
    }
    li.skip-span {
        margin: 0 30px;
    }
}

// .page-bar li:first-child>a {
//    margin-left: 0px
// }
// .page-bar a{
//     border: 1px solid #ddd;
//     text-decoration: none;
//     position: relative;
//     float: left;
//     padding: 6px 12px;
//     margin-left: -1px;
//     line-height: 1.42857143;
//     color: #337ab7;
//     cursor: pointer
// }
// .page-bar a:hover{
//     background-color: #eee;
// }
// .page-bar .active a{
//     color: #fff;
//     cursor: default;
//     background-color: #337ab7;
//     border-color: #337ab7;
// }
.page-all i{
    font-style:normal;
    color: #d44950;
    margin: 0px 2px;
    font-size: 14px;
}
</style>

