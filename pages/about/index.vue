<template>
	<section>
		<vue-header />
		<div class="container">
			<div class="banner">
                <img src="../../assets/images/about/banner.jpg" alt="">
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
                    <p class="more" v-html="b1Content.substring(0,240) + ' … ' + '<a href='+'javascript:;'+'>查看更多</a>'"></p>
                </div>
            </div>
            <div class="b2 box">
                <div class="content">
                    <h4>合作案例</h4>
                    <ul class="clearfix">
                        <li class="up" v-for="(b2Item, key) in b2Items" v-bind:key="key" :class="'li-' + (key+1)">
                            <div class="li-box">
                                <i class="i-img"><img :src="'/images/about/b2_img' + (key+1) + '.png'" alt=""></i>
                                <div class="txt">
                                    <b>酷狗</b>
                                    <p></p>
                                </div>
                                <i class="i-btn"></i>
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
            <!-- <div class="b2 box">
                <h4>客服外包，我们能为您做的</h4>
                <div class="b2-swiper content">
                    <div v-swiper:b2Swiper="swiperOption2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(b2Item, key) in b2Items" :key="key">
                                <div :class="'slider-' + (key+1)">
                                    <i></i>
                                    <b>{{b2Item.title}}</b>
                                    <span>{{b2Item.content}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="b3 box">
                <div class="content">
                    <h4>看过很多攻略，却依然做不好客服</h4>
                    <div class="b3-box">
                        <b>如果您有这些困扰，一切都让互动商务为您解决</b>
                        <ul>
                            <li><i></i>严重内耗</li>
                            <li><i></i>用人成本上升</li>
                            <li><i></i>业绩较差</li>
                            <li><i></i>招聘难流动性大</li>
                            <li><i></i>人员难管理</li>
                            <li><i></i>过度劳累筋疲力尽</li>
                            <li><i></i>大促忙不过来</li>
                            <li><i></i>夜间咨询忙不过来</li>
                        </ul>
                    </div>
                    <i class="i-img"></i>
                </div>
            </div>
            <div class="b4 box">
                <div class="content">
                    <h4>我们的优势</h4>
                    <p>沟通零距离，服务无止境，用心倾听、传递微笑、提供帮助、用心沟通、解决问题</p>
                    <ul>
                        <li v-for="(b4Item, key, index) in b4Items" v-bind:key="index" v-bind:class="'li-'+ (key+1)">
                            <span class="top-span"><i></i>{{b4Item.title}}</span>
                            <p class="up" v-html="b4Item.content + '<a href='+'javascript:;'+'>收起</a>'"></p>
                            <p class="more" v-html="b4Item.content.substring(0,49) + ' … ' + '<a href='+'javascript:;'+'>查看更多</a>'"></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="b5 box">
                <div class="content">
                    <h4>新闻资讯</h4>
                    <div class="b5-box clearfix">
                        <div class="fl">
                            <div class="img-box"><img src="../../assets/images/index/b5_img.jpg" alt=""></div>
                            <div class="txt">
                                <span class="title-span"><i></i>10年客服老司机教你这样处理棘手的客户投诉</span>
                                <span class="time-span"><i></i>8月15日 周三 14:00-17:30</span>
                                <p>
                                    客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。
                                    <a href="javascript:;">查看更多</a>
                                </p>
                            </div>
                        </div>
                        <div class="fr">
                            <ul>
                                <li>
                                    <span class="title-span">服务外包业促粤港澳大湾区城市建设</span>
                                    <p>日前，2018全球服务外包大会在广东省珠海市举行。这是全球服务外包大会创办以来，首次落户粤港澳大湾区城市。本届大会以“开放协同，互联共享”为主</p>
                                    <span class="time-span"><i></i>2018/06/20</span>
                                </li>
                                <li>
                                    <span class="title-span">呼叫中心管理者的六种角色</span>
                                    <p>日前，2018全球服务外包大会在广东省珠海市举行。这是全球服务外包大会创办以来，首次落户粤港澳大湾区城市。本届大会以“开放协同，互联共享”为主</p>
                                    <span class="time-span"><i></i>2018/06/20</span>
                                </li>
                                <li>
                                    <span class="title-span">呼叫中心如何正确衡量通话质量</span>
                                    <p>日前，2018全球服务外包大会在广东省珠海市举行。这是全球服务外包大会创办以来，首次落户粤港澳大湾区城市。本届大会以“开放协同，互联共享”为主</p>
                                    <span class="time-span"><i></i>2018/06/20</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
		</div>
	</section>
</template>

<script>
	import VueHeader from "~/components/VueHeader.vue";

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
                // swiperOption2: {
                //     slidesPerView: "auto",
                //     spaceBetween: 42,
                //     loop: true,
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev',
                //     },
                // },
                // b2Items: [
                //     {
                //         title: '管理规范 服务周全',
                //         content: '托管人员的各种客服、劳动事务均由人力资源公司处理，并提供有关社会保障、劳动客服政策等方面的政策法规咨询。'
                //     },{
                //         title: '解放人力 创造价值',
                //         content: '免去办理各种琐碎的员工录用（退工）、社会保险申报、住房公积金办理等各种客服。'
                //     },{
                //         title: '人员稳定 收入稳定',
                //         content: '铁打的营盘，流水的兵解除了长期人员流失，人员缺少、没人值班的基本因素从而达到稳定的销售！'
                //     },{
                //         title: '简化手续 降低成本',
                //         content: '由于大量的事务性工作被外包了出去，人力资源管理者足不出户圆满完成客服工作；减少人员和设备，避免重复操作，节省大量资金和时间。'
                //     },{
                //         title: '提高满意度 增强归属感',
                //         content: '完善的客服服务体系，解决员工的后顾之忧，提高员工满意度。同时由于劳动合同的主体仍是企业，员工对企业归属感更强，忠诚度更高。 '
                //     }
                // ],
                b4Items: [
                    {
                        title: '专业化',
                        content: '优秀的呼叫中心服务提供商，有多次业务重组整合的经验，新业务上马快、起点高；可确保服务质量的高水准；省去企业管理方面的烦恼，有利于简化 管理体系，优化管理水平。'
                    },{
                        title: '灵活性',
                        content: '客户可以得到弹性的呼叫中心，其规模根据企业的要求随时扩大或缩小；还可以随着运营商的技术更新，始终得到一个相对先进的呼叫中心系统，企业通过外包得到的呼叫中心，其可改善性、可维护性、可开发性和可控制性都非常强。'
                    },{
                        title: '节约成本',
                        content: '极大地节省在人力、系统和管理等方面的投资，降低风险；呼叫中心通常在价格上进行竞争，规模大的呼叫中心可以降低每个客户的平均服务成本。 '
                    },{
                        title: '战略性合作',
                        content: '随着商业的发展，呼叫中心外包业务的范围和焦点也随之改变了，不再只局限于简单定义成与另一个公司签定长期提供服务的合同范畴，而意味着合作者之间的战略伙伴关系，风险与目标共担。企业可以集中精力从事其核心业务，而将剩下的工作委托给外包服务商。'
                    },{
                        title: '团队优势',
                        content: '最专业的呼叫中心管理团队：可提供管理咨询、调查研究、数据分析、员工规划指导，以专家的视角为企业提供咨询服务。及时的人员补充：保证10天到岗。长期外包各保险公司客服及客户满意度调查和保单后期处理工作，我们的团队熟悉其工作流程，有丰富的管理经验。'
                    },{
                        title: '服务承诺',
                        content: '* 7*24小时全天候网络安全和客户数据安全的保证。<br/>'
                                + '* 5*12小时热线咨询及在线客服。<br/>'
                                + '* 根据客户意愿签订保密协议，从法律效力上保证客户资料安全。<br/>'
                                + '* 快速响应，保证系统稳定性。<br/>'
                                + '* 专设服务回访和投诉小组，保证服务质量。<br/>'
                                + '* 专业客服一对一服务。'
                    }
                ] 
            }
           
        },
		components: {
            VueHeader,
		},
		mounted() {
            $(".b1 p a").click(function () {
                $(".b1 .up").css("display", "block");
                $(".b1 .more").css("display", "none");
            })
            $(".b4 ul li p a").click(function () {
                $(this).parent().parent().toggleClass("up")
            })
            // setTimeout(() = {
            //     this.banners.push('../../assets/images/index/banner.jpg')
            //     console.log('banners update')
            // }, 3000)>
            // console.log(
            //     'This is current swiper instance object', this.bannerSwiper, 
            //     'It will slideTo banners 3')
            // this.b2Swiper.slideTo(3, 1000, false)
		},
        method: {
        },
	};

</script>

<style lang="scss">
.banner {
    width: 100%;
    height: 354px;
}

.banner-bottom {
    height: 150px;
    margin-top: -75px;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 35px #767676; 
    -moz-box-shadow: 1px 1px 35px #767676; 
    box-shadow: 1px 1px 35px #767676;
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
                background: url(../../assets/images/about/about_icon.png) 0 0 no-repeat;
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
                background-position-y: -80px;
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
        margin-bottom: 68px;
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
                padding-top: 140px;
                i.i-img {
                    width: 275px;
                    height: 151px;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img {
                        width: 100%;
                        height: 100%;
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
                    span {
                        font-size: 16px;
                        color: #666;
                        line-height: 20px;
                        text-align: left;
                        font-weight: 300;
                        display: inline-block;
                    }
                    p {
                        font-size: 14px;
                        color: #999;
                        line-height: 20px;
                        margin-top: 20px;
                        text-align: left;
                    }
                }
                i.i-btn {
                    width: 59px;
                    height: 59px;
                    display: inline-block;
                    border-radius: 50%;
                    background: url(../../assets/images/index/index_icon.png) -192px -391px no-repeat;
                    position: absolute;
                    bottom: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;
                }

            }
        }
        li.up {
            .li-box {
                .txt {
                    p {
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }
                }
                i.i-btn {
                    background-position-x: -121px;
                }
            }
        }
        li:first-child {
            margin-left: 0;
        }
    }
}

// .b2 {
//     // height: 505px;
//     background-color: #0a0f2b;
//     padding: 60px 0 64px;
//     h4 {
//         color: #fff;
//     }
//     .b2-swiper {
//         margin-top: 48px;
//         position: relative;
//         padding: 0 105px;
//         box-sizing: content-box;
//         .swiper-container {
//             .swiper-slide {
//                 width: 275px;
//                 height: 320px;
//                 border-radius: 10px;
//                 background-color: #fff;
//                 padding: 26px 26px 32px;
//                 box-sizing: border-box;
//                 i {
//                     width: 84px;
//                     height: 78px;
//                     display: block;
//                     margin: 0 auto 25px;
//                     background: url(../../assets/images/index/index_icon.png) 0 -133px;
//                 }
//                 b {
//                     font-size: 20px;
//                     color: #333;
//                     display: block;
//                     margin-bottom: 17px;
//                 }
//                 span {
//                     font-size: 14px;
//                     color: #666;
//                     line-height: 28px;
//                     text-align: justify;
//                     display: block;
//                 }
//                 .slider-2 {
//                     i {
//                         width: 77px;
//                         background-position-x: -106px;
//                     }
//                 }
//                 .slider-3 {
//                     i {
//                         width: 76px;
//                         background-position-x: -208px;
//                     }
//                 }
//                 .slider-4 {
//                     i {
//                         width: 59px;
//                         background-position-x: -319px;
//                     }
//                 }
//                 .slider-5 {
//                     i {
//                         width: 62px;
//                         background-position-x: -419px;
//                     }
//                 }
//             }
//         }
//         .swiper-button-prev, .swiper-button-next {
//             width: 59px;
//             height: 59px;
//             background: url(../../assets/images/index/index_icon.png) -263px -365px;
//         }
//         // .swiper-button-prev {
//         //     left: -66px;
//         // }
//         .swiper-button-next {
//             background-position-y: -432px;
//         }
//         .swiper-button-prev:hover, .swiper-button-next:hover {
//             background-position-x: -334px;
//         }
//     }
// }

// .b3 {
//     padding: 62px 0;
//     height: 658px;
//     background: url(../../assets/images/index/b3_bg.jpg) no-repeat center;
//     .content {
//         position: relative;
//     }
//     .b3-box {
//         width: 1190px;
//         height: 350px;
//         border-radius: 10px;
//         background-color: #fcfcfc;
//         border: 2px solid #b1b1b1;
//         margin-top: 150px;
//         text-align: left;
//         padding: 53px 600px 0 66px;
//         b {
//             width: 466px;
//             height: 56px;
//             line-height: 56px;
//             border-radius: 10px;
//             font-size: 20px;
//             color: #fff;
//             text-align: center;
//             display: block;
//             background-color: #e91222;
//             -webkit-box-shadow: 1px 1px 18px #e91222; 
//             -moz-box-shadow: 1px 1px 18px #e91222; 
//             box-shadow: 1px 1px 18px #e91222;
//             margin-bottom: 36px;
//         }
//         ul {
//             text-align: center;
//             li {
//                 width: 233px;
//                 line-height: 44px;
//                 text-align: left;
//                 font-size: 16px;
//                 color: #333;
//                 i {
//                     width: 6px;
//                     height: 6px;
//                     border-radius: 50%;
//                     display: inline-block;
//                     background-color: #e91222;
//                     margin-right: 19px;
//                     vertical-align: middle;
//                 }
//             }
//         }
//     }
//     i.i-img {
//         width: 518px;
//         height: 518px;
//         display: inline-block;
//         background: url(../../assets/images/index/b3_img.png) no-repeat center;
//         position: absolute;
//         bottom: 0;
//         right: 32px;
//     }
// }

// .b4 {
//     background-color: #0a0f2b;
//     padding: 67px 0 64px;
//     h4 {
//         color: #fff;
//     }
//     p {
//         margin: 30px 0 42px;
//         font-size: 16px;
//         color: #fff;
//     }
//     ul {
//         position: relative;
//         height: 525px;
//         li {
//             width: 374px;
//             border-radius: 10px;
//             background-color: #fff;
//             padding: 25px 22px 15px 28px;
//             box-sizing: border-box;
//             min-height: 198px;
//             position: absolute;
//             .top-span {
//                 font-size: 18px;
//                 color: #333;
//                 font-weight: bold;
//                 i {
//                     width: 42px;
//                     height: 43px;
//                     display: inline-block;
//                     background: url(../../assets/images/index/index_icon.png) -7px -273px no-repeat;
//                     vertical-align: middle;
//                     margin-right: 22px;
//                 }
//             }
//             p {
//                 font-size: 14px;
//                 line-height: 32px;
//                 color: #666;
//                 text-align: left;
//                 margin: 5px 0 0;
//                 a {
//                     font-size: 14px;
//                     color: #e91222;
//                 }
//             }
//             p.up {
//                 display: none;
//             }
//         }
//         li.li-1,.li-2,.li-3 {
//             top: 0;
//         }
//         li.li-4,.li-5,.li-6 {
//             top: 264px;
//         }
//         .li-1,.li-4 {
//             left: 0;
//         }
//         .li-2,.li-5 {
//             left: 50%;
//             transform: translateX(-50%);
//         }
//         .li-3,.li-6 {
//             right: 0;
//         }
//         .li-2 {
//             .top-span i {
//                 background-position-x: -85px;
//             }
//         }
//         .li-3 {
//             .top-span i {
//                 background-position-x: -160px;
//             }
//         }
//         .li-4 {
//             .top-span i {
//                 background-position-x: -237px;
//             }
//         }
//         .li-5 {
//             .top-span i {
//                 background-position-x: -313px;
//             }
//         }
//         .li-6 {
//             .top-span i {
//                 background-position-x: -388px;
//             }
//         }
//         li.up {
//             p.up {
//                 display: block;
//             }
//             p.more {
//                 display: none;
//             }
//         }
//     }
// }

// .b5 {
//     padding: 66px 0 60px;
//     background-color: #f9f9f9;
//     .b5-box {
//         margin-top: 74px;
//         .fl {
//             width: 568px;
//             border-radius: 10px;
//             overflow: hidden;
//             background-color: #fff;
//              -webkit-box-shadow: 1px 1px 28px #b0b0b0; 
//             -moz-box-shadow: 1px 1px 28px #b0b0b0; 
//             box-shadow: 1px 1px 28px #b0b0b0;
//             padding-bottom: 30px;
//             .img-box {
//                 height: 266px;
//                 margin-bottom: 31px;
//                 img {
//                     width: 100%;
//                     height: 100%;
//                 }
//             }
//             .txt {
//                 width: 542px;
//                 margin: 0 auto;
//                 text-align: left;
//                 span {
//                     display: block;
//                     color: #333;
//                     i {
//                         vertical-align: middle;
//                         display: inline-block;
//                         background: url(../../assets/images/index/index_icon.png) -16px -404px no-repeat;
//                     }
//                 }
//                 .title-span {
//                     font-size: 24px;
//                     i {
//                         width: 25px;
//                         height: 25px;
//                         margin-right: 11px;
//                     }
//                 }
//                 .time-span {
//                     padding-left: 10px;
//                     font-size: 14px;
//                     margin: 30px 0 17px;
//                     i {
//                         width: 15px;
//                         height: 15px;
//                         background-position: -79px -409px;
//                         margin-right: 16px;
//                     }
//                 }
//                 p {
//                     padding-left: 10px;
//                     font-size: 14px;
//                     color: #666;
//                     line-height: 30px;
//                     a {
//                         height: 24px;
//                         padding: 0 15px;
//                         line-height: 24px;
//                         font-size: 16px;
//                         text-align: center;
//                         color: #fff;
//                         border-radius: 10px;
//                         background-color: #e91222;
//                         display: inline-block;
//                     }
//                 }
//             }
//         }
//         .fr {
//             ul {
//                 width: 560px;
//                 text-align: left;
//                 li {
//                     border-radius: 10px;
//                     padding: 17px 26px 23px 28px;
//                     box-sizing: border-box;
//                     transition: all .3s;
//                     span {
//                         display: block;
//                         color: #333;
//                     }
//                     .title-span {
//                         font-size: 20px;
//                         margin-bottom: 20px;
//                         font-weight: bold;
//                     }
//                     p {
//                         font-size: 14px;
//                         color: #666;
//                         line-height: 30px;
//                     }
//                     .time-span {
//                         font-size: 14px;
//                         margin-top: 12px;
//                         i {
//                             width: 15px;
//                             height: 15px;
//                             display: inline-block;
//                             background: url(../../assets/images/index/index_icon.png) -79px -409px no-repeat;
//                             margin: 0 16px 0 2px;
//                         }
//                     }
//                 }
//                 li:hover {
//                     background-color: #fff;
//                     -webkit-box-shadow: 1px 1px 43px #b0b0b0; 
//                     -moz-box-shadow: 1px 1px 43px #b0b0b0; 
//                     box-shadow: 1px 1px 43px #b0b0b0;
//                     .title-span {
//                         color: #e91222;
//                     }
//                 }
//             }
//         }
//     }
// }

</style>
