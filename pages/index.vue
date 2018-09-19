<template>
	<section>
		<div class="container">
			<div class="banner">
                <div v-swiper:bannerSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(banner, key) in bannerList" :key="key">
                            <div class="img-bg">
                                <img src="~/assets/images/index/banner.jpg" alt="">
                                <!-- <img :src="banner.ban_img" alt=""> -->
                            </div>
                            <div class="content">
                                <div class="txt">
                                    <h2><span>{{banner.ban_short_title}}</span>{{banner.ban_long_title}}</h2>
                                    <p>{{banner.ban_text}}</p>
                                    <a href="javascript:;">{{banner.ban_button}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
			</div>
            <div class="banner-bottom wow flipInX">
                <ul class="">
                    <li class="li-1">
                        <i></i>
                        <span>专注客户服务商</span>
                    </li>
                    <li class="li-2">
                        <i></i>
                        <span>专业的服务团队</span>
                    </li>
                    <li class="li-3">
                        <i></i>
                        <span>专业的服务体系</span>
                    </li>
                    <li class="li-4">
                        <i></i>
                        <span>全天候客户服务</span>
                    </li>
                </ul>
            </div>
            <div class="b1 box">
                <div class="content">
                    <h4>1000余名专业客服持证上岗</h4>
                    <p>「在线客服」与「电话客服」均能完美服务</p>
                    <ul class="clearfix">
                        <li class="li-1 up">
                            <div class="li-box">
                                <span class="span-img">
                                    <img src="~/assets/images/index/b1_img1.png" alt="">
                                    <i></i>
                                    </span>
                                <div class="txt">
                                    <b>网店客服</b>
                                    <span>淘宝、天猫、京东售前 售后客服贴心服务</span>
                                    <p>售前：在线解答客户咨询问题 引导客户下单，积极促成好评
                                    <br/><br/>售后：退换货，物流问题，客 户的反映和投诉，差评等处理</p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                        <li class="li-2 up">
                            <div class="li-box">
                                <span class="span-img">
                                    <img src="~/assets/images/index/b1_img2.png" alt="">
                                    <i></i>
                                    </span>
                                <div class="txt">
                                    <b>电话客服</b>
                                    <span>呼出、呼入、电话客服的 完美服务</span>
                                    <p>呼出：电话销售、电话邀约电 话回访、电话调研
                                    <br/><br/>呼入：业务咨询、业务办理投 诉处理等服务</p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                        <li class="li-3 up">
                            <div class="li-box">
                                <span class="span-img">
                                    <img src="~/assets/images/index/b1_img3.png" alt="">
                                    <i></i>
                                    </span>
                                <div class="txt">
                                    <b>在线客服</b>
                                    <span>QQ、微信、web/app 在线客服轻松搞定</span>
                                    <p>回复在线客户咨询引导客户下单，处理订单记录汇总咨询
                                    <br/><br/>记录汇总咨询事件及时分析并 反馈给相应部门</p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                        <li class="li-4 up">
                            <div class="li-box">
                                <span class="span-img">
                                    <img src="~/assets/images/index/b1_img4.png" alt="">
                                    <i></i>
                                    </span>
                                <div class="txt">
                                    <b>呼叫中心</b>
                                    <span>提供专业的呼叫中心外 包服务解决方案</span>
                                    <p>10000余持证上岗的专业客服 快速开启客户服务
                                    <br/><br/>提供专业的呼叫中心外 包服务解决方案</p>
                                </div>
                                <i class="i-btn"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="b2 box">
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
                            <p class="up" v-html="b4Item.content"></p>
                            <p class="more" v-html="b4Item.content.substring(0,49) + ' … ' + '<a style=' + 'color:#e91222;' + ' href='+'javascript:;'+'>查看更多</a>'"></p>
                        </li>
                        <!-- <li class="li-1">
                            <span class="top-span"><i></i>专业化</span>
                            <p>优秀的呼叫中心服务提供商，有多次业务重组整合的经验，新业务上马快、起点高；可确保服务质量的高水准；省去企业管理方面的烦恼，有利于简化 管理体系，优化管理水平。
                                <a href="javascript:;">收起</a>
                            </p>
                        <li class="li-2">
                            <span class="top-span"><i></i>灵活性</span>
                            <p>客户可以得到弹性的呼叫中心，其规模根据企业的要求随时扩大或缩小；还可以随着运营商的技术更新，始终得到一个相对先进的呼叫中心系统，企业通过外包得到的呼叫中心，其可改善性、可维护性、可开发性和可控制性都非常强。
                                <a href="javascript:;">收起</a>
                            </p>
                        </li>
                        <li class="li-3">
                            <span class="top-span"><i></i>节约成本</span>
                            <p>极大地节省在人力、系统和管理等方面的投资，降低风险；呼叫中心通常在价格上进行竞争，规模大的呼叫中心可以降低每个客户的平均服务成本。
                                <a href="javascript:;">收起</a>
                            </p>
                        </li>
                        <li class="li-4">
                            <span class="top-span"><i></i>战略性合作</span>
                            <p>随着商业的发展，呼叫中心外包业务的范围和焦点也随之改变了，不再只局限于简单定义成与另一个公司签定长期提供服务的合同范畴，而意味着合作者之间的战略伙伴关系，风险与目标共担。企业可以集中精力从事其核心业务，而将剩下的工作委托给外包服务商。
                                <a href="javascript:;">收起</a>
                            </p>
                        </li>
                        <li class="li-5">
                            <span class="top-span"><i></i>团队优势</span>
                            <p>最专业的呼叫中心管理团队：可提供管理咨询、调查研究、数据分析、员工规划指导，以专家的视角为企业提供咨询服务。及时的人员补充：保证10天到岗。长期外包各保险公司客服及客户满意度调查和保单后期处理工作，我们的团队熟悉其工作流程，有丰富的管理经验。
                                <a href="javascript:;">收起</a>
                            </p>
                        </li>
                        <li class="li-6 up">
                            <span class="top-span"><i></i>服务承诺</span>
                            <p>* 7*24小时全天候网络安全和客户数据安全的保证。
                                <br/>* 5*12小时热线咨询及在线客服。
                                <br/>* 根据客户意愿签订保密协议，从法律效力上保证客户资料安全。
                                <br/>* 快速响应，保证系统稳定性。
                                <br/>* 专设服务回访和投诉小组，保证服务质量。
                                <br/>* 专业客服一对一服务。
                                <a href="javascript:;">收起</a>
                            </p>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="b5 box">
                <div class="content">
                    <h4>新闻资讯</h4>
                    <div class="b5-box clearfix">
                        <div class="fl">
                            <div class="img-box"><img src="~/assets/images/index/b5_img.jpg" alt=""></div>
                            <div class="txt">
                                <nuxt-link :to="'/news/' + b5Items[1].id"><span class="title-span"><i></i>{{b5Items[1].new_title}}</span></nuxt-link>
                                <span class="time-span"><i></i>{{b5Items[1].new_time}}</span>
                                <p>
                                    {{b5Items[1].new_descriptions}}
                                    <a href="javascript:;">查看更多</a>
                                </p>
                            </div>
                        </div>
                        <div class="fr">
                            <ul>
                                <li v-for="(b5Item, index) in b5Items" :key="index" v-if="0 < index && index < 4">
                                    <a href="javascript:;">
                                        <span class="title-span">{{b5Item.new_title}}</span>
                                        <p>{{b5Item.new_descriptions}}</p>
                                        <span class="time-span"><i></i>{{b5Item.new_time}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</section>
</template>

<script>
	export default {
        async asyncData({ app }) {
            let  data  = await app.$axios.$get('/api');
           
            // console.log(data)
            return { 
                dataList: data, 
                bannerList: data.banner_pc,
                b5Items: data.information
            }
        },
        data() {
            return {
                swiperOption: {
                    effect : 'fade',
                    pagination: '.swiper-pagination',
                    paginationClickable :true,
                    loop: true
                },
                swiperOption2: {
                    slidesPerView: "auto",
                    spaceBetween: 42,
                    loop: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                },
                b2Items: [
                    {
                        title: '管理规范 服务周全',
                        content: '托管人员的各种客服、劳动事务均由人力资源公司处理，并提供有关社会保障、劳动客服政策等方面的政策法规咨询。'
                    },{
                        title: '解放人力 创造价值',
                        content: '免去办理各种琐碎的员工录用（退工）、社会保险申报、住房公积金办理等各种客服。'
                    },{
                        title: '人员稳定 收入稳定',
                        content: '铁打的营盘，流水的兵解除了长期人员流失，人员缺少、没人值班的基本因素从而达到稳定的销售！'
                    },{
                        title: '简化手续 降低成本',
                        content: '由于大量的事务性工作被外包了出去，人力资源管理者足不出户圆满完成客服工作；减少人员和设备，避免重复操作，节省大量资金和时间。'
                    },{
                        title: '提高满意度 增强归属感',
                        content: '完善的客服服务体系，解决员工的后顾之忧，提高员工满意度。同时由于劳动合同的主体仍是企业，员工对企业归属感更强，忠诚度更高。 '
                    }
                ],
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
                ],
                bannerList: [],
                dataList: [],
                b5Items: []
            }
           
        },
        // asyncData({ req, params }) {
        //     // We can return a Promise instead of calling the callback
        //     return axios.get('/api')
        //     .then((res) => {
        //         console.log(res);
        //         return { 
        //             dataList: res.data, 
        //             bannerList: res.data.banner_pc 
        //         }
        //     })
        // },
        head() {
            return this.$seo(this.dataList.header.title, this.dataList.header.descriptions, this.dataList.header.keywords)
            // return {
            //     title: this.dataList.header.title,
            //     meta: [{
            //         hid: 'description',
            //         name: 'description',
            //         content: this.dataList.header.descriptions
            //     },{
            //         hid: 'keywords',
            //         name: 'keywords',
            //         content: this.dataList.header.keywords
            //     }]
            // }
        },
		mounted() {
            new WOW().init();
            $(".b1 ul li .i-btn").click(function () {
                $(this).parent().parent().toggleClass("up");
            })
            $(".b4 ul li p a").click(function () {
                $(".b4 ul li").removeClass("up");
                $(this).parent().parent().toggleClass("up")
            })
            // setTimeout(() = {
            //     this.banners.push('~/assets/images/index/banner.jpg')
            //     console.log('banners update')
            // }, 3000)>
            // console.log(
            //     'This is current swiper instance object', this.bannerSwiper, 
            //     'It will slideTo banners 3')
            // this.bannerSwiper.slideTo(0, 1000, false)
            // this.b2Swiper.slideTo(0, 1000, false)
        }
	};

</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 676px;
    .swiper-container {
        height: 100%;
        .swiper-slide {
            position: relative;
        }
    }
    .img-bg {
        width: 100%;
        height: 676px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .txt {
        margin-top: 152px;
        h2 {
            font-size: 52px;
            color: #fff;
            line-height: 72px;
            margin-bottom: 40px;
            span {
                color: #e91222;
                display: block;
            }
        }
        p {
            color: #fff;
            font-size: 30px;
            margin-bottom: 86px;
        }
        a {
            width: 160px;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            color: #fff;
            text-align: center;
            display: block;
            border-radius: 25px;
            background-color: #e91222;
            transition: all .3s;
        }
        a:hover {
            width: 180px;
            margin-left: -10px;
        }
    }
}

.banner-bottom {
    height: 222px;
    margin-top: -110px;
    background: url(~/assets/images/index/banner_bottom.png) no-repeat center;
    position: relative;
    z-index: 11;
    ul {
        width: 1200px;
        padding: 51px 0;
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
                width: 58px;
                height: 52px;
                margin: 16px auto;
                background: url(~/assets/images/index/index_icon.png) -4px 0 no-repeat;
            }
            span {
                font-size: 18px;
                color: #666;
            }
        }
        .li-2 {
            i {
                width: 53px;
                background-position-x: -108px;
            }
        }
        .li-3 {
            i {
                width: 57px;
                background-position-x: -207px;
            }
        }
        .li-4 {
            i {
                width: 50px;
                background-position-x: -311px;
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
    }
    ul {
        font-size: 0;
        li {
            display: inline-block;
        }
    }
}

.b1 {
    padding-top: 8px;
    background-color: #fff;
    p {
        margin: 25px 0 30px;
        font-size: 16px;
        color: #666;
    }
    ul {
        margin-bottom: 16px;
        li {
            width: 323px;
            min-height: 368px;
            background: url(~/assets/images/index/b1_img_bg.png) no-repeat bottom;
            padding: 24px 24px 41px;
            box-sizing: border-box;
            margin-left: -32px;
            transition: all .3s;
            float: left;
            .li-box {
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                padding-top: 140px;
                background-color: #fff;
                span.span-img {
                    width: 275px;
                    height: 102px;
                    display: block;
                    // background: url(~/assets/images/index/b1_img1.png) no-repeat center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    i {
                        width: 60px;
                        height: 60px;
                        position: absolute;
                        bottom: -30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: url(~/assets/images/index/index_icon.png) 0 -519px no-repeat;
                        display: inline-block;
                        transition: all .3s;
                        transform-origin: center center;
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
                    background: url(~/assets/images/index/index_icon.png) -192px -391px no-repeat;
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
        li:hover {
            transform: translateY(-10px);
            span.span-img {
                i {
                    animation: circle .25s linear;
                    -webkit-animation: circle .25s linear;
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
                    background-position-x: -96px;
                }
            }
        }
        li.li-3 {
            span.span-img {
                i {
                    background-position-x: -192px;
                }
            }
        }
        li.li-4 {
            span.span-img {
                i {
                    background-position-x: -288px;
                }
            }
        }
    }
}

.b2 {
    // height: 505px;
    background-color: #0a0f2b;
    padding: 60px 0 64px;
    h4 {
        color: #fff;
    }
    .b2-swiper {
        margin-top: 48px;
        height: 320px;
        position: relative;
        padding: 0 105px;
        box-sizing: content-box;
        .swiper-container {
            .swiper-slide {
                width: 275px;
                height: 320px;
                border-radius: 10px;
                background-color: #fff;
                padding: 26px 26px 32px;
                box-sizing: border-box;
            }
        }
        .swiper-button-prev, .swiper-button-next {
            width: 59px;
            height: 59px;
            background: url(~/assets/images/index/index_icon.png) -263px -365px;
        }
        i {
            width: 84px;
            height: 78px;
            display: block;
            margin: 0 auto 25px;
            background: url(~/assets/images/index/index_icon.png) 0 -133px;
        }
        b {
            font-size: 20px;
            color: #333;
            display: block;
            margin-bottom: 17px;
        }
        span {
            font-size: 14px;
            color: #666;
            line-height: 28px;
            text-align: justify;
            display: block;
        }
        .slider-2 {
            i {
                width: 77px;
                background-position-x: -106px;
            }
        }
        .slider-3 {
            i {
                width: 76px;
                background-position-x: -208px;
            }
        }
        .slider-4 {
            i {
                width: 59px;
                background-position-x: -319px;
            }
        }
        .slider-5 {
            i {
                width: 62px;
                background-position-x: -419px;
            }
        }
        .swiper-button-next {
            background-position-y: -432px;
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
            background-position-x: -334px;
        }
    }
}

.b3 {
    padding: 62px 0;
    height: 658px;
    background: url(~/assets/images/index/b3_bg.jpg) no-repeat center;
    .content {
        position: relative;
    }
    .b3-box {
        width: 1190px;
        height: 350px;
        border-radius: 10px;
        background-color: #fcfcfc;
        border: 2px solid #b1b1b1;
        margin-top: 150px;
        text-align: left;
        padding: 53px 600px 0 66px;
        b {
            width: 466px;
            height: 56px;
            line-height: 56px;
            border-radius: 10px;
            font-size: 20px;
            color: #fff;
            text-align: center;
            display: block;
            background-color: #e91222;
            -webkit-box-shadow: 1px 4px 18px rgba(233, 18, 34, .5); 
            -moz-box-shadow: 1px 4px 18px rgba(233, 18, 34, .5); 
            box-shadow: 1px 4px 18px rgba(233, 18, 34, .5);
            margin-bottom: 36px;
        }
        ul {
            text-align: center;
            li {
                width: 233px;
                line-height: 44px;
                text-align: left;
                font-size: 16px;
                color: #333;
                i {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    display: inline-block;
                    background-color: #e91222;
                    margin-right: 19px;
                    vertical-align: middle;
                }
            }
        }
    }
    i.i-img {
        width: 518px;
        height: 518px;
        display: inline-block;
        background: url(~/assets/images/index/b3_img.png) no-repeat center;
        position: absolute;
        bottom: 0;
        right: 32px;
    }
}

.b4 {
    background-color: #0a0f2b;
    padding: 67px 0 64px;
    h4 {
        color: #fff;
    }
    p {
        margin: 30px 0 42px;
        font-size: 16px;
        color: #fff;
    }
    ul {
        position: relative;
        height: 532px;
        li {
            width: 374px;
            border-radius: 10px;
            background-color: #fff;
            padding: 25px 22px 15px;
            box-sizing: border-box;
            min-height: 198px;
            position: absolute;
            transition: all .3s;
            .top-span {
                font-size: 18px;
                color: #333;
                font-weight: bold;
                i {
                    width: 42px;
                    height: 43px;
                    display: inline-block;
                    background: url(~/assets/images/index/index_icon.png) -7px -273px no-repeat;
                    vertical-align: middle;
                    margin-right: 22px;
                }
            }
            p {
                font-size: 14px;
                line-height: 32px;
                color: #666;
                text-align: left;
                margin: 5px 0 0;
                a {
                    font-size: 14px;
                    color: #e91222;
                }
            }
            p.up {
                display: none;
            }
        }
        li.li-1,.li-2,.li-3 {
            top: 0;
        }
        li.li-4,.li-5,.li-6 {
            top: 264px;
        }
        li:hover {
            top: -10px;
        }
        li.li-4:hover,.li-5:hover,.li-6:hover {
            top: 254px;
        }
        .li-1,.li-4 {
            left: 0;
        }
        .li-2,.li-5 {
            left: 50%;
            transform: translateX(-50%);
        }
        .li-3,.li-6 {
            right: 0;
        }
        .li-2 {
            .top-span i {
                background-position-x: -85px;
            }
        }
        .li-3 {
            .top-span i {
                background-position-x: -160px;
            }
        }
        .li-4 {
            .top-span i {
                background-position-x: -237px;
            }
        }
        .li-5 {
            .top-span i {
                background-position-x: -313px;
            }
        }
        .li-6 {
            .top-span i {
                background-position-x: -388px;
            }
        }
        li.up {
            p.up {
                display: block;
            }
            p.more {
                display: none;
            }
        }
    }
}

.b5 {
    padding: 66px 0 60px;
    background-color: #f9f9f9;
    .b5-box {
        margin-top: 74px;
        .fl {
            width: 568px;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fff;
             -webkit-box-shadow: 1px 1px 28px rgba(176, 176, 176, .5); 
            -moz-box-shadow: 1px 1px 28px rgba(176, 176, 176, .5); 
            box-shadow: 1px 1px 28px rgba(176, 176, 176, .5);
            padding-bottom: 30px;
            .img-box {
                height: 266px;
                margin-bottom: 31px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .txt {
                width: 542px;
                margin: 0 auto;
                text-align: left;
                span {
                    display: block;
                    color: #333;
                    i {
                        vertical-align: middle;
                        display: inline-block;
                        background: url(~/assets/images/index/index_icon.png) -16px -404px no-repeat;
                    }
                }
                .title-span {
                    font-size: 24px;
                    line-height: 1.4;
                    i {
                        width: 25px;
                        height: 25px;
                        margin-right: 11px;
                    }
                }
                .time-span {
                    padding-left: 10px;
                    font-size: 14px;
                    margin: 30px 0 17px;
                    i {
                        width: 15px;
                        height: 15px;
                        background-position: -79px -409px;
                        margin-right: 16px;
                    }
                }
                p {
                    padding-left: 10px;
                    font-size: 14px;
                    color: #666;
                    line-height: 30px;
                    a {
                        height: 24px;
                        padding: 0 15px;
                        line-height: 24px;
                        font-size: 16px;
                        text-align: center;
                        color: #fff;
                        border-radius: 10px;
                        background-color: #e91222;
                        display: inline-block;
                    }
                }
            }
        }
        .fr {
            ul {
                width: 560px;
                text-align: left;
                li {
                    width: 560px;
                    border-radius: 10px;
                    padding: 17px 26px 23px 28px;
                    box-sizing: border-box;
                    transition: all .3s;
                    span {
                        display: block;
                        color: #333;
                    }
                    .title-span {
                        font-size: 20px;
                        margin-bottom: 20px;
                        font-weight: bold;
                        line-height: 1.1;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        display: block;
                    }
                    p {
                        font-size: 14px;
                        color: #666;
                        line-height: 30px;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .time-span {
                        font-size: 14px;
                        margin-top: 12px;
                        i {
                            width: 15px;
                            height: 15px;
                            display: inline-block;
                            background: url(~/assets/images/index/index_icon.png) -79px -409px no-repeat;
                            margin: 0 16px 0 2px;
                        }
                    }
                }
                li:hover {
                    background-color: #fff;
                    -webkit-box-shadow: 1px 1px 43px rgba(176, 176, 176, .5); 
                    -moz-box-shadow: 1px 1px 43px rgba(176, 176, 176, .5); 
                    box-shadow: 1px 1px 43px rgba(176, 176, 176, .5);
                    .title-span {
                        color: #e91222;
                    }
                }
            }
        }
    }
}

</style>

<style lang="scss">
.banner {
    .swiper-pagination-bullets {
        bottom: 110px;
        z-index: 20;
        .swiper-pagination-bullet {
            width: 46px;
            height: 4px;
            border-radius: 2px;
            background-color: #fff;
        }
    }
}
</style>