<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            advantageSwiper: {//swiper3
                // onlyExternal : true,
                slidesPerView: '4',
                pagination: '.swiper-pagination',
                observer:true,
    observeParents:true,
            },
            data1:true,
        }
    },
    computed: {
    }
}
</script>
<style lang="scss">
.advantage{
    .content{
        margin-top: 60px;
        overflow: hidden;
        padding-bottom:70px; 
    }
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
    .swiper-slide{
        width: 260px;
        margin-right: 15px;
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
</style>

<style lang="scss" scoped>
.advantage{
    .content{
        margin-top: 60px;
        overflow: hidden;
        // height: 143px;
        padding-bottom:70px; 
    }
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
    .swiper-slide{
        width: 300px;
        margin-right: 15px;
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
</style>


