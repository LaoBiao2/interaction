<template>
	<section>
		<vue-header />
		<div class="container">
			<div class="news">
                <div class="content">
                    <div class="title-box">
                        <div class="title-content">
                            <b>10年客服老司机教你这样处理棘手的客户投诉</b>
                            <span><i></i>2018/06/20</span>
                        </div>
                    </div>
                    <div class="news-box clearfix">
                        <div class="fl">
                            <p>
                                客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。
                                <br/>
                                一线客服层面<br/>
                                <br/>
                                ❖展现主动倾听的姿态<br/>
                                <br/>
                                当用户购买的产品出现问题，或用户遇到问题急需帮助时，往往会在来电时情绪激动。我们的客服或是因为身经百战、思维定式已经了解用户问题所在，或是着急为用户处理，或是不想令用户情绪再激动下去，对客户的不满和抱怨采取遏制的手段，还没有等客户说完话就开始进行“解释”，这样很容易令用户误解客服们是在急切地推卸责任。<br/>
                                <br/>
                                当用户在向你表达愤怒和不满时，你应该在思考：<br/>
                                <br/>
                                用户为什么不满，对产品、服务、还是其他？<br/>
                                <br/>
                                用户提供的信息是否全面，能否让你准确给出解决方案？<br/>
                                <br/>
                                解决方案是什么？<br/>
                                <br/>
                                这个解决方案是否能令用户满意<br/>
                                <br/>
                                怎么样安抚平息用户的怒火<br/>
                                <br/>
                                因此，我们在用户倾诉的过程中，首先一定要展现主动倾听的姿态，令用户可以顺畅地发泄不满，让用户把话说完并且温和安抚。在用户处于愤怒的状态时，一味解释绝对不是明智之举哦。<br/>
                                <br/>
                                ❖保持吐字清晰 适当提问<br/>
                                <br/>
                                当用户终于肯停下来倾听你说话时，别犹豫。真诚地向用户询问所需的信息。用户是能够感受到我们是在真诚认真地对待他所提出的问题的。当然，用户向我们求助，是希望我们是专业高效的帮助者的。如果你这时候在口齿不清，吞吞吐吐，会使得用户对你的期望值大打折扣，对你给出的方案也不那么信服。<br/>
                                <br/>
                                ❖肯定用户 产生共鸣<br/>
                                <br/>
                                当你对用户的话表示肯定的时候，用户会认为你与他产生了共鸣，也会得到被尊重的感觉。比如当用户的诉求得不到满足时，我们不妨可以将单调的“不好意思，先生实在没有办法帮到您”换为“先生，关于这类问题，还没有用户向我们提出改进建议，非常感谢您的宝贵意见，我将为您记录反馈，有您这样的用户是我们公司的荣幸。”<br/>
                                <br/>
                                用户来电的时候的心理其实是想寻求援助与共鸣的，他需要客服从同理心的角度为其着想，真心实意地感觉到他们的无奈，而不是同情式地敷衍。相信即使是再愤怒的用户听到客服贴心的一句：“先生，如果我是您，我遇到这样的情况肯定也是很着急的。你先稍等一下，我帮您联系一下，看看有什么办法能帮到您。”也会有所平静。<br/>
                                <br/>
                                ❖措辞得体 恰当地道歉<br/>
                                <br/>
                                古往今来，我们似乎是不太爱主动道歉的，因为道歉即是意味着自己做错了，这是一件既丢面子又伤里子的事情。其实，致歉不仅是礼貌周全、有教养的表现，而且具有缓和矛盾维护人际关系和谐的功能。道歉也是对客户的尊重，能够使其尽快消除不满。当我们的产品不存在问题，但用户确实遇到困难时，我们作为超人一样的客服团队肯定是会使出18般武艺为其协调处理，但最终可能并不尽如人意，这个时候一句道歉将会成为抚慰用户受伤心灵的良药。<br/>
                                <br/>
                                客服管理者层面<br/>
                                <br/>
                                ❖摆脱思维定式 冷静应对<br/>
                                <br/>
                                1、客服主管的情绪会直接影响到员工的情绪；<br/>
                                <br/>
                                2、挖掘不出投诉的合理原因，就无法找到解决方案；<br/>
                                <br/>
                                3、无法进行全员分享，避免类似问题的再次产生。<br/>
                                <br/>
                                事实上投诉并不是没有办法控制，只要用正确的心态去面对，使用合理的方式方法，就可以尽可能的避免不必要的投诉产生。<br/>
                                <br/>
                                ❖情绪控制<br/>
                                <br/>
                                尤其是客服管理者，在产生投诉的情况下，务必不能急躁，心态要平和。投诉既然已经产生，首要关注的问题应该是分析投诉原因，考虑如何进行有效的规避。而不是首先关注如何惩罚员工及投诉是不是能撤销。
                            </p>
                        </div>
                        <div class="fr">
                            <h6><b>热门推荐</b></h6>
                            <ul>
                                <li v-for="(hotLi, key) in hotList" :key="key">
                                    <a href="/news/_id" :id="hotLi.hid">
                                        <p>{{hotLi.htitle}}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="news-nav">
                        <span class="nav-span"><span>上一篇:</span><a href="javascript:;">服务外包业促粤港澳大湾区城市建设</a></span>
                        <span class="nav-span"><span>下一篇:</span><a href="javascript:;">呼叫中心如何正确衡量通话质量</a></span>
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
                hotList: [
                    {
                        hid: '1',
                        htitle: '10年客服老司机教你这样处理棘手的客户投诉'
                    },{
                        hid: '2',
                        htitle: '服务外包业促粤港澳大湾区城市建设'
                    },{
                        hid: '3',
                        htitle: '呼叫中心管理者的六种角色'
                    },{
                        hid: '4',
                        htitle: '呼叫中心如何正确衡量通话质量'
                    }
                ]
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
		},
        method: {
        },
	};

</script>

<style lang="scss" scoped>
.news {
    padding: 55px 0;
    background-color: #fff;
    .title-box {
        border-bottom: 2px solid #e0e0e0;
        line-height: 42px;
        .title-content {
            width: 827px;
            position: relative;
            b {
                font-size: 20px;
                color: #333;
                display: inline-block;
                padding-bottom: 20px;
                line-height: 1.4;
                width: 650px;
            }
            span {
                font-size: 14px;
                color: #333;
                display: inline-block;
                position: absolute;
                right: 0;
                bottom: 21px;
                i {
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    background: url(/images/news/news_icon.png) no-repeat center;
                    margin-right: 15px;
                    vertical-align: text-top;
                }
            }
        }
        
    }
    .news-box {
        padding: 17px 0;
        border-bottom: 2px solid #e0e0e0;
        .fl {
            width: 827px;
            p {
                font-size: 14px;
                color: #666;
                line-height: 32px;
            }
        }
        .fr {
            width: 270px;
            h6 {
                margin-top: 28px;
                border-bottom: 2px solid #e0e0e0;
                position: relative;
                height: 42px;
                b {
                    font-size: 20px;
                    color: #333;
                    display: inline-block;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e91222;
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                }
            }
            ul {
                li {
                    border-bottom: 1px solid #e8e8e8;
                    height: 70px;
                    padding: 17px 0 14px;
                    box-sizing: border-box;
                    p {
                        font-size: 16px;
                        line-height: 20px;
                        color: #333;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
                li:hover {
                    p {
                        color: #e91222;
                    }
                }
            }
        }
    }

    /* nav */
    .news-nav {
        width: 827px;
        margin-top: 47px;
        // padding-bottom: 50px;
        .nav-span {
            width: 380px;
            display: inline-block;
            font-size: 14px;
            span {
                color: #333;
                width: 60px;
                float: left;
            }
            a {
                color: #666;
                width: 280px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
            a:hover {
                color: #e91222;
            }
        }
    }
}
</style>
