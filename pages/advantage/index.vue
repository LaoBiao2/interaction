<template>
    <section>
        <div class="container">
            <div class="banner">
                <div class="content">
                    <div class="txt">
                        <h4>因为选择，所以信任</h4>    
                        <p>互动商务助力企业完善客户关系管理</p>
                    </div>
                </div>        
            </div>
            <div class="advantage">
                <h4>能力与优势</h4>
                <div class="content">
                    <div v-swiper:mySwiper="advantageSwiper" v-if="data1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide clearfix">
                                <i class="ai1"></i>
                                <div class="txt">
                                    <h5>规模</h5>
                                    <p>四大客服基地千人<br>团队遍及全国</p>
                                </div>
                            </div>
                            <div class="swiper-slide clearfix">
                                <i class="ai2"></i>
                                <div class="txt">
                                    <h5>经验</h5>
                                    <p>服务千万商家聚焦<br>众多知名品牌</p>
                                </div>
                            </div>
                            <div class="swiper-slide clearfix">
                                <i class="ai3"></i>
                                <div class="txt">
                                    <h5>全面</h5>
                                    <p>业务涵盖客服、管理<br>培训等多个维度</p>
                                </div>
                            </div>
                            <div class="swiper-slide clearfix">
                                <i class="ai4"></i>
                                <div class="txt">
                                    <h5>专业</h5>
                                    <p>ISO质量管理体系认证<br>多年获得阿里官方荣誉</p>
                                </div>
                            </div>
                            <div class="swiper-slide clearfix">
                                <i class="ai5"></i>
                                <div class="txt">
                                    <h5>管理</h5>
                                    <p>全面实现线上绩效考核<br>真正做到数据化管理</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-bullets"></div>
                    </div>
                </div>
            </div>
            <div class="b1">
                <div class="content">
                    <div class="b1-swiper">
                        <div v-swiper:b1Swiper="swiperOption">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(b1Item, key) in b1Items" :key="key">
                                    <div :class="'slider-' + (key+1)" class="slider">
                                        <i><img :src="'/images/advantage/b1_img' + (key+1) + '.png'" alt=""></i>
                                        <span>{{b1Item}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="txt">
                            <span>选择互动商务</span>
                            <b>客服外包的理由</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b2">
                <div class="content">
                    <h4>服务时间和管理模式</h4>
                    <ul class="ul-1">
                        <li class="li-1"><i></i>白班</li>
                        <li class="li-2"><i></i>晚班</li>
                        <li class="li-3"><i></i>24小时</li>
                        <li class="li-4"><i></i>临时</li>
                        <li class="li-5"><i></i>定制</li>
                    </ul>
                    <ul class="ul-2 clearfix">
                        <li>
                            <b>标准化管理</b>
                            <span>内部质量管理部门和组长主管每周抽调客服服务人员的聊天记录，并被照标准进行评估</span>
                        </li>
                        <li>
                            <b>项目激励</b>
                            <span>每个项目自定义KPI，充分激励成员的积极性，同时每月对每个项目进行考核</span>
                        </li>
                        <li>
                            <b>软件监控</b>
                            <span>使用相对应的软件对客服人员，进行数据化监控和管理</span>
                        </li>
                        <li>
                            <b>定期研讨培训</b>
                            <span>定期展开话术讨论，添加问题库，定期培训销售技巧，强化客服销售能力</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            advantageSwiper: {//swiper3
                // onlyExternal : true,
                slidesPerView: 4,
                pagination: '.swiper-pagination',
                // observer:true,
                // observeParents:true,
                loop: true,
                autoplay: 1000,
                spaceBetween: 15,
            },
            data1:true,
            b1Items: [
                '费用大大低于自己雇 佣客服无需为空闲 客服支付工资超高 性价比',
                '全天24小时在线，全年无休让企业省时省力更省心',
                '专业客服团队，管理经验丰富不定期展开客服技能培训，完善的KPI考核',
                '客服骨干都拥有五年客服经验，带领团队更好的提升产品转化率'
            ],
            swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 3.45,
                paginationClickable: true,
                spaceBetween: 46,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            },
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
.advantage{
    .content{
        margin-top: 60px;
        overflow: hidden;
        // height: 143px;
        padding-bottom:70px; 
    }
    .swiper-slide{
        width: 300px;
        // margin-right: 15px;
        i{
            float: left;
            width: 68px;
            height: 68px;
            margin-right:25px;
            background: url(/images/advantage/advantage_icon.png) no-repeat;
        }
        .ai1{
            background-position:0 0; 
        }
        .ai2{
            background-position:-68px 0; 
        }
        .ai3{
            background-position:-136px 0; 
        }
        .ai4{
            background-position:-204px 0; 
        }
        .ai5{
            background-position:-272px 0; 
        }
        .txt{
            float: left;
            h5{
                font-size: 20px;
                color: #666666;
                margin-bottom: 5px;
                font-weight: bold;
            }
            p{
                font-size: 16px;
                color: #666666;
                line-height: 24px;
            }
        }
    }
}
.banner {
  width: 100%;
  height: 332px;
  background: url(/images/advantage/banner.jpg) no-repeat center;
  .txt {
    display: table-cell;
    vertical-align: middle;
    height: 332px;
    h4 {
      font-size: 30px;
      color: #ffffff;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      color: #fffefe;
    }
  }
}
.advantage{
    padding: 50px 0 55px 0;
    width: 100%;
    background:#ffffff;
    h4{
        font-size: 30px;
        color: #333333;
        text-align: center;
        font-weight: bold;
    }
}

.b1 {
    height: 507px;
    padding: 97px 0 81px;
    box-sizing: border-box;
    background: url(/images/advantage/b1_bg.jpg) no-repeat center;
    .b1-swiper {
        padding-left: 280px;
        box-sizing: content-box;
        position: relative;
        .swiper-container {
            padding: 19px 15px 73px;
        }
        .swiper-button-prev, .swiper-button-next {
            width: 69px;
            height: 70px;
            background: url(/images/advantage/advantage_icon.png) 0 -82px;
            margin-top: 30px;
        }
        .swiper-button-next {
            background-position-x: -85px;
            left: 93px;
        }
        .slider {
            width: 225px;
            height: 237px;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fff;
            -webkit-box-shadow: 1px 1px 18px rgba(24, 32, 75, .1); 
            -moz-box-shadow: 1px 1px 18px rgba(24, 32, 75, .1); 
            box-shadow: 1px 1px 18px rgba(24, 32, 75, .1);
            i {
                width: 225px;
                height: 83px;
                display: block;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            span {
                font-size: 14px;
                line-height: 36px;
                width: 172px;
                display: block;
                margin: 35px auto 0;
                color: #8d8c8c;
            }
        }
        .txt {
            font-size: 32px;
            color: #333;
            position: absolute;
            left: 0;
            top: 60px;
            span,b {
                display: block;
                margin-bottom: 20px;
            }
        }
    }
}

.b2 {
    text-align: center;
    padding: 55px 0 37px;
    background-color: #fff;
    h4 {
        font-size: 30px;
        color: #333;
        font-weight: bold;
    }
    ul {
        font-size: 0;
        li {
            display: inline-block;
        }
    }
    .ul-1 {
        margin-top: 48px;
        border-radius: 31px;
        border: 2px solid #ebebeb;
        height: 62px;
        li {
            font-size: 20px;
            color: #666;
            line-height: 62px;
            margin-right: 92px;
            i {
                width: 29px;
                height: 28px;
                display: inline-block;
                vertical-align: middle;
                background: url(/images/advantage/advantage_icon.png) -1px -167px no-repeat;
                margin-right: 15px;
            }
        }
        .li-2 {
            i {
                width: 22px;
                background-position-x: -48px;
            }
        }
        .li-3 {
            i {
                width: 23px;
                background-position-x: -91px;
            }
        }
        .li-4 {
            i {
                width: 24px;
                background-position-x: -134px;
            }
        }
        .li-5 {
            margin-right: 0;
            i {
                width: 27px;
                background-position-x: -176px;
            }
        }
    }
    .ul-2 {
        width: 1187px;
        margin: 75px auto 0;
        li {
            width: 278px;
            height: 190px;
            border-radius: 10px;
            border: 2px solid #ced2df;
            padding: 35px 28px 0;
            box-sizing: border-box;
            margin-left: 25px;
            float: left;
            transition: all .3s;
            b {
                font-size: 20px;
                display: block;
                color: #333;
                margin-bottom: 14px;
            }
            span {
                font-size: 14px;
                color: #999;
                line-height: 36px;
                display: block;
                text-align: justify;
            }
        }
        li:first-child {
            margin-left: 0;
        }
        li:hover {
            transform: translateY(-10px);
        }
    }
}
</style>
<style lang="scss">
.advantage{
    .swiper-container{
        height: 100%;
        overflow: visible;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets{
         bottom: -70px;
    }
    .swiper-pagination-bullet{
        opacity: 1;
        background: #e3e3e3;
    }
    .swiper-pagination-bullet-active{
        background: #adadad;
    }
}

.b1 {
    .swiper-container {
        .swiper-pagination-bullets {
            // bottom: 100px;
            .swiper-pagination-bullet {
                background-color: #fff;
            }
        }
    }
}
</style>



