<template>
	<section>
		<vue-header />
		<div class="container">
			<div class="banner">
                <img src="~/assets/images/about/banner.jpg" alt="">
			</div>
            <div class="banner-bottom content">
                <ul>
                    <li class="li-1">
                        <i></i>
                        <b>我们的愿景</b>
                        <span>做中国最优秀的呼叫中心</span>
                    </li>
                    <li class="li-2">
                        <i></i>
                        <b>我们的使命</b>
                        <span>为沟通创造价值，提高客户满度</span>
                    </li>
                    <li class="li-3">
                        <i></i>
                        <b>我们的价值理念</b>
                        <span>追求卓越，让客户的客户更满意</span>
                    </li>
                    <li class="li-4">
                        <i></i>
                        <b>我们的服务理念</b>
                        <span>专业专注、用心服务</span>
                    </li>
                </ul>
            </div>
            <div class="b1 box">
                <div class="content">
                    <h4>公司简介</h4>
                    <p class="up" v-html="b1Content"></p>
                    <p class="more" v-html="b1Content.substring(0,240) + ' … ' + '<a style=' + 'color:#e91222;' + ' href='+'javascript:;'+'>查看更多</a>'"></p>
                </div>
            </div>
            <div class="b2 box">
                <div class="content">
                    <h4>合作案例</h4>
                    <ul class="clearfix">
                        <li class="" v-for="(b2Item, key) in b2Items" v-bind:key="key" :class="'li-' + (key+1)">
                            <div class="li-box">
                                <span class="span-img"><img :src="'/images/about/b2_img' + (key+1) + '.png'" alt=""><i></i></span>
                                <div class="txt">
                                    <b>{{b2Item.title}}</b>
                                    <p class="up" v-html="b2Item.content"></p>
                                    <p class="more" v-html="b2Item.content.substring(0,20) + ' … ' + '<a style=' + 'color:#e91222;' + ' href='+'javascript:;'+'>查看更多</a>'"></p>
                                </div>
                                <a href="javascript:;" class="a-btn">点击查看</a>
                            </div>
                        </li>
                        <!-- <li class="li-2 up">
                            <div class="li-box">
                                <i class="i-img"><img src="../../assets/images/about/b2_img2.png" alt=""></i>
                                <div class="txt">
                                    <b>电话客服</b>
                                    <p></p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                        <li class="li-3 up">
                            <div class="li-box">
                                <i class="i-img"><img src="../../assets/images/about/b2_img3.png" alt=""></i>
                                <div class="txt">
                                    <b>在线客服</b>
                                    <p></p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                        <li class="li-4 up">
                            <div class="li-box">
                                <i class="i-img"><img src="../../assets/images/about/b2_img4.png" alt=""></i>
                                <div class="txt">
                                    <b>呼叫中心</b>
                                    <p></p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="b3 box">
                <h4>我们的荣誉</h4>
                <div class="b3-swiper content">
                    <div v-swiper:b3Swiper="swiperOption3">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(b3Item, key) in b3Items" :key="key">
                                <div class="slider" :class="'slider-' + (key+1)">
                                    <i class="i1"></i>
                                    <div class="txt">
                                        <p>{{b3Item.t1}}</p>
                                        <p>{{b3Item.t2}}</p>
                                        <p>{{b3Item.t3}}</p>
                                        <span class="span-line"></span>
                                        <b>{{b3Item.year}}</b>
                                    </div>
                                    <i class="i2"></i>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="b4">
                <div class="b4-swiper">
                    <div v-swiper:b4Swiper="swiperOption4">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(b4Item, key) in 12" :key="key">
                                <div class="slider">
                                    <img :src="'/images/about/clogo_' + (key+1) + '.jpg' " alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
        <vue-footer />
	</section>
</template>

<script>
	import VueHeader from "~/components/VueHeader.vue";
	import VueFooter from "~/components/VueFooter.vue";

	export default {
        data() {
            return {
                b1Content: '广州互动商业服务有限公司拥有十年呼叫中心外包经验，目前拥有位于深圳、东莞、武汉、成都、宿迁五个呼叫运营中心。能为客户提供多语种服务，如普通话、粤语、 英语、日语以及韩语，与多家大型企业缔结了长期合作伙伴关系。  互动商务致力于为企业提供客户关系管理，提升企业与客户的沟通效率，为企业带来极致的用户体验和提高客户满意度，为沟通创造价值是互动商务的企业愿景。一直以来互动商务以服务 用户为导向，遵循创新、卓越、极致的服务理念，为用户提供便捷、可靠、稳定的客服管理服务，让用户享受高效沟通带来的美好体验。'
                    + '<br/>过去，广域成深刻理解客户需求，帮助数百家企业解决了客户满意度困境，是企业盈利和成长的最佳合作伙伴。未来，广域成将继续依托优质的专业服务为客户带来最佳价值增值。'
                    + '<br/>广域成呼叫外包服务是基于现代通信技术，主要为企业提供客服外包、业务流程外包、咨询培训和系统集成等四大类产品的专家级服务'
                    + '<br/>广域成呼叫外包服务拥有电信级呼叫中心平台和电信网络资源，可为企业提供本地或远端的座席租赁服务。'
                    + '<br/>广域成呼叫外包服务拥有专业的呼叫中心运营管理团队，为企业提供业务流程外包服务，帮助企业建立完善的客户服务标准和流程体系。'
                    + '<br/>广域成呼叫外包服务将多年积累的呼叫中心运营经验和管理模式，通过咨询和培训服务的方式分享成功管理经验，为企业提供灵活丰富的呼叫中心顾问服务。',
                b2Items: [
                    {
                        title: '酷狗',
                        content: '互动商务为星河地产齐下物业业主提供物业咨询、报修、投诉等全程跟踪并记录，认真及时替业主排优解难，全面提高业主满意度！'
                    },{
                        title: '深粮集团',
                        content: '互动商务为星河地产齐下物业业主提供物业咨询、报修、投诉等全程跟踪并记录，认真及时替业主排优解难，全面提高业主满意度！'
                    },{
                        title: '星河物业',
                        content: '互动商务为星河地产齐下物业业主提供物业咨询、报修、投诉等全程跟踪并记录，认真及时替业主排优解难，全面提高业主满意度！'
                    },{
                        title: '詹姆士手机',
                        content: '互动商务为星河地产齐下物业业主提供物业咨询、报修、投诉等全程跟踪并记录，认真及时替业主排优解难，全面提高业主满意度！'
                    }
                ],
                swiperOption3: {
                    slidesPerView: "auto",
                    spaceBetween: 42,
                    loop: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    pagination: '.swiper-pagination',
                },
                b3Items: [
                    {
                        t1: '中国优秀外包客服联络中心',
                        t2: '金耳唛中国呼叫中心年度新锐',
                        t3: '',
                        year: '2012'
                    },{
                        t1: '金耳唛中国最佳呼叫中心',
                        t2: '中国最佳外包呼叫中心',
                        t3: '',
                        year: '2013'
                    },{
                        t1: '中国优秀外包客服联络中心',
                        t2: '中国最佳外包呼叫中心',
                        t3: '中国最佳联络中心客户服务代表',
                        year: '2014'
                    },{
                        t1: '荣获移动运营商“优秀合作伙伴”',
                        t2: '客户服务代表奖突出贡献奖',
                        t3: '中国最佳外包联络中心奖（呼入服务）',
                        year: '2015'
                    },{
                        t1: '中国优秀外包客服联络中心',
                        t2: '中国最佳外包呼叫中心',
                        t3: '中国最佳外包联络中心奖（呼入服务）',
                        year: '2016'
                    },{
                        t1: '中国最佳联络中心管理人奖',
                        t2: '中国最佳外包联络中心奖（呼入服务）',
                        t3: '',
                        year: '2017'
                    }
                ],
                swiperOption4: {
                    autoplay: 1000,
                    slidesPerView: "auto",
                    spaceBetween: 74,
                    loop: true,
                }
            }
           
        },
		components: {
            VueHeader,
            VueFooter,
		},
		mounted() {
            $(".b1 p a").click(function () {
                $(".b1 .up").css("display", "block");
                $(".b1 .more").css("display", "none");
            })
            $(".b2 ul li p a").click(function () {
                $(this).parent().parent().toggleClass("up")
            })
            // this.b3Swiper.slideTo(0, 1000, false)
            // this.b4Swiper.slideTo(0, 1000, false)
		},
        method: {
        },
	};

</script>


<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 354px;
    img {
        width: 100%;
        height: 100%;
    }
}

.banner-bottom {
    height: 150px;
    margin-top: -75px;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 35px rgba(118, 118, 118, .5); 
    -moz-box-shadow: 1px 1px 35px rgba(118, 118, 118, .5); 
    box-shadow: 1px 1px 35px rgba(118, 118, 118, .5);
    position: relative;
    z-index: 11;
    ul {
        padding: 14px 0 23px;
        display: block;
        margin: 0 auto;
        font-size: 0;
        li {
            width: 25%;
            height: 120px;
            display: inline-block;
            text-align: center;
            i {
                display: block;
                width: 54px;
                height: 59px;
                margin: 0 auto;
                background: url(~/assets/images/about/about_icon.png) 0 -80px no-repeat;
            }
            b {
                font-size: 18px;
                color: #333;
                display: block;
                margin: 7px auto 14px;
            }
            span {
                font-size: 16px;
                color: #666;
            }
        }
        .li-2 {
            i {
                width: 46px;
                background-position-x: -92px;
            }
        }
        .li-3 {
            i {
                width: 50px;
                background-position-x: -177px;
            }
        }
        .li-4 {
            i {
                width: 60px;
                background-position-x: -260px;
            }
        }
        li:hover {
            i {
                background-position-y: 0;
            }
        }
    }
}

.box {
    text-align: center;
    h4 {
        font-size: 30px;
        color: #333;
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;
    }
    ul {
        font-size: 0;
        li {
            display: inline-block;
        }
    }
}

.b1 {
    padding: 141px 0 75px;
    background-color: #fff;
    p {
        font-size: 14px;
        line-height: 38px;
        color: #666;
        text-align: justify;
        a {
            color: #e91222;
        }
    }
    p.up {
        display: none;
    }
}

.b2 {
    padding: 50px 0 64px;
    background-color: #f4f4f4;
    ul {
        li {
            width: 275px;
            min-height: 368px;
            background-color: #fff;
            -webkit-box-shadow: 1px 1px 35px #ccc; 
            -moz-box-shadow: 1px 1px 35px #ccc; 
            box-shadow: 1px 1px 35px #ccc;
            margin-left: 33px;
            overflow: hidden;
            border-radius: 10px;
            transition: all .3s;
            float: left;
            .li-box {
                position: relative;
                padding: 140px 0 23px;
                span.span-img {
                    width: 275px;
                    height: 98px;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    i {
                        width: 78px;
                        height: 78px;
                        display: inline-block;
                        background: url(/images/about/about_icon.png) 0 -546px no-repeat;
                        position: absolute;
                        bottom: -39px;
                        left: 50%;
                        transform: translateX(-50%);
                        transition: all .3s;
                        transform-origin: center center;
                        -webkit-box-shadow: 1px 1px 18px #0e6bc2; 
                        -moz-box-shadow: 1px 1px 18px #0e6bc2; 
                        box-shadow: 1px 1px 18px #0e6bc2;
                        border-radius: 50%;
                    }
                }
                .txt {
                    width: 215px;
                    margin: 0 auto 44px;
                    b {
                        font-size: 20px;
                        color: #333;
                        display: block;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 16px;
                        color: #666;
                        line-height: 30px;
                        text-align: left;
                        display: block;
                        a {
                            color: #e91222;
                        }
                    }
                    p.up {
                        display: none;
                    }
                }
                a.a-btn {
                    width: 126px;
                    height: 38px;
                    line-height: 36px;
                    display: inline-block;
                    border-radius: 19px;
                    border: 1px solid #999;
                    font-size: 20px;
                    color: #666;
                    transition: all .3s;
                }
                a.a-btn:hover {
                    border-color: #e91222;
                    color: #fff;
                    background-color: #e91222;
                }
                .txt.up {
                    p.up {
                        display: block;
                    }
                    p.more {
                        display: none;
                    }
                }

            }
        }
        li:first-child {
            margin-left: 0;
        }
        li:hover {
            span.span-img {
                i {
                    animation: circle .5s linear;
                    -webkit-animation: circle .5s linear;
                }
            }
        }
        @keyframes circle {
		    from {
		        transform: translateX(-50%) rotate(0deg);
		    }
		    to {
		        transform: translateX(-50%) rotate(360deg);
		    }
        }
        @-webkit-keyframes circle {
		    from {
		        transform: translateX(-50%) rotate(0deg);
		    }
		    to {
		        transform: translateX(-50%) rotate(360deg);
		    }
        }
        

        li.li-2 {
            span.span-img {
                i {
                    background-position-x: -135px;
                    -webkit-box-shadow: 1px 1px 18px #adadad; 
                    -moz-box-shadow: 1px 1px 18px #adadad; 
                    box-shadow: 1px 1px 18px #adadad;
                }
            }
        }
        li.li-3 {
            span.span-img {
                i {
                    background-position-x: -269px;
                    -webkit-box-shadow: 1px 1px 18px #eb2129; 
                    -moz-box-shadow: 1px 1px 18px #eb2129; 
                    box-shadow: 1px 1px 18px #eb2129;
                }
            }
        }
        li.li-4 {
            span.span-img {
                i {
                    background-position-x: -404px;
                    -webkit-box-shadow: 1px 1px 18px #ec8414; 
                    -moz-box-shadow: 1px 1px 18px #ec8414; 
                    box-shadow: 1px 1px 18px #ec8414;
                }
            }
        }
    }
}

.b3 {
    background-color: #fff;
    padding: 50px 0;
    .b3-swiper {
        margin-top: 68px;
        position: relative;
        padding: 0 105px;
        box-sizing: content-box;
        .swiper-container {
            padding-bottom: 50px;
            .swiper-slide {
                width: 292px;
            }
        }
        .swiper-button-prev, .swiper-button-next {
            width: 59px;
            height: 59px;
            border-radius: 50%;
            -webkit-box-shadow: 1px 1px 18px #ccc; 
            -moz-box-shadow: 1px 1px 18px #ccc; 
            box-shadow: 1px 1px 18px #ccc;
            background: url(~/assets/images/about/about_icon.png) -11px -317px;
            margin-top: -60px;
        }
        .swiper-button-next {
            background-position-y: -408px;
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
            background-position-x: -85px;
        }
        .slider {
            position: relative;
            text-align: center;
            height: 114px;
            padding: 10px 0;
            i {
                width: 43px;
                height: 99px;
                display: inline-block;
                background: url(~/assets/images/about/about_icon.png) 0 -174px;
                position: absolute;
                top: 0;
            }
            .i1 {
                left: 0;
            }
            .i2 {
                right: 0;
                background-position-x: -224px;
            }
            .txt {
                width: 100%;
                position: absolute;
                bottom: 12px;
                left: 0;
                b {
                    font-size: 26px;
                    color: #333;
                    display: block;
                    // margin-bottom: 17px;
                }
                p {
                    font-size: 14px;
                    color: #666;
                    line-height: 20px;
                    text-align: center;
                }
                span {
                    display: inline-block;
                    width: 70%;
                    height: 1px;
                    background-color: #979797;
                    margin: 8px 0;
                }
            }
            
        }
        .swiper-slide:nth-child(2n+1) .slider{
            i {
                background-position-x: -65px;
            }
            .i2 {
                background-position-x: -160px;
            }
        }
    }
}

.b4 {
    background-color: #e5e5e5;
    padding: 8px 0 5px;
    .b4-swiper {
        .swiper-container {
            .swiper-slide {
                width: 103px;
                height: 103px;
            }
            .swiper-pagination-bullets {
                .swiper-pagination-bullet {
                    background-color: #adadad;
                }
            }
        }
        .slider {
            width: 103px;
            height: 103px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>

<style lang="scss">
.b3 {
    .b3-swiper {
        .swiper-pagination-bullets {
            .swiper-pagination-bullet {
                background-color: #adadad;
            }
        }
    }
}
</style>
