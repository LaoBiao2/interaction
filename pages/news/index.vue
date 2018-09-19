<template>
	<section>
		<div class="container">
			<div class="news">
                <div class="content">
                    <h5><b>新闻资讯</b></h5>
                    <div class="news-box clearfix">
                        <div class="fl">
                            <ul>
                                <li v-for="(newsLi, key) in newsList" :key="key" class="clearfix">
                                    <div class="img-box">
                                        <nuxt-link :to="'/news/' + newsLi.id">
                                            <img :src="'http://192.168.1.30:8082' + newsLi.new_img" alt="">
                                        </nuxt-link>
                                    </div>
                                    <div class="txt">
                                        <nuxt-link :to="'/news/' + newsLi.id"><b>{{newsLi.new_title}}</b></nuxt-link>
                                        <nuxt-link :to="'/news/' + newsLi.id"><p>{{newsLi.new_descriptions}}</p></nuxt-link>
                                        <span><i></i>{{newsLi.new_time}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="fr">
                            <h6><b>热门推荐</b></h6>
                            <ul>
                                <li v-for="(hotLi, key) in hotList" :key="key">
                                    <nuxt-link :to="'/news/' + hotLi.id">
                                        <p>{{hotLi.new_title}}</p>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="page-nav">
                        <span class="confirm-btn page-btn">
                            <a href="javascript:;">上一页</a>
                        </span>
                        <ul class="pagination">
                            <li>
                                <a href="javascript:;">1</a>
                            </li>
                            <li>
                                <a href="javascript:;">2</a>
                            </li>
                            <li>
                                <a href="javascript:;">3</a>
                            </li>
                        </ul>
                        <span class="confirm-btn page-btn">
                            <a href="javascript:;">下一页</a>
                        </span>
                        <span class="skip-span">
                            到
                            <input type="text"> 页
                        </span>
                        <span class="confirm-btn page-btn">
                            <a href="javascript:;">确认</a>
                        </span>
                    </div> -->
                    <news-page></news-page>
                </div>
            </div>
		</div>
	</section>
</template>

<script>
import NewsPage from '~/components/NewsPage.vue'
	export default {
        async asyncData({ app }) {
            let  data  = await app.$axios.$get('/api/news');
            return { 
                dataList: data,
                hotList: data.hot,
                newsList: data.list
            }
        },
        data() {
            return {
                newsList: [
                    // {
                    //     newsImg: '/images/news/news_img1.jpg',
                    //     newsId: '1',
                    //     newsTitle: '10年客服老司机教你这样处理棘手的客户投诉',
                    //     newsContent: '客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。',
                    //     newsDate: '2018/06/20'
                    // },{
                    //     newsImg: '/images/news/news_img2.jpg',
                    //     newsId: '2',
                    //     newsTitle: '10年客服老司机教你这样处理棘手的客户投诉',
                    //     newsContent: '客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。',
                    //     newsDate: '2018/06/20'
                    // },{
                    //     newsImg: '/images/news/news_img3.jpg',
                    //     newsId: '3',
                    //     newsTitle: '10年客服老司机教你这样处理棘手的客户投诉',
                    //     newsContent: '客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。',
                    //     newsDate: '2018/06/20'
                    // },{
                    //     newsImg: '/images/news/news_img4.jpg',
                    //     newsId: '4',
                    //     newsTitle: '10年客服老司机教你这样处理棘手的客户投诉',
                    //     newsContent: '客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。',
                    //     newsDate: '2018/06/20'
                    // },{
                    //     newsImg: '/images/news/news_img5.jpg',
                    //     newsId: '5',
                    //     newsTitle: '10年客服老司机教你这样处理棘手的客户投诉',
                    //     newsContent: '客户投诉处理是让每个客服头疼的问题，有着10年客户投诉处理实战经验的客服老司机，从一线客服和客服管理者两个维度，深度总结了3个关键点，7个行动点，帮助你轻松应对客户投诉。今天与大家分享。',
                    //     newsDate: '2018/06/20'
                    // }
                ],
                hotList: [
                    // {
                    //     hid: '1',
                    //     htitle: '10年客服老司机教你这样处理棘手的客户投诉'
                    // },{
                    //     hid: '2',
                    //     htitle: '服务外包业促粤港澳大湾区城市建设'
                    // },{
                    //     hid: '3',
                    //     htitle: '呼叫中心管理者的六种角色'
                    // },{
                    //     hid: '4',
                    //     htitle: '呼叫中心如何正确衡量通话质量'
                    // }
                ],
                dataList: []
            }
        },
        components: {
            NewsPage
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
        head() {
            return this.$seo(this.dataList.header.title, this.dataList.header.descriptions, this.dataList.header.keywords)
        },
	};

</script>

<style lang="scss" scoped>
.news {
    padding: 55px 0;
    background-color: #fff;
    h5 {
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
    .news-box {
        padding-top: 17px;
        border-bottom: 2px solid #e0e0e0;
        .fl {
            ul {
                width: 827px;
                li {
                    padding: 28px 0;
                    border-top: 1px solid #d0d0d0;
                    .img-box {
                        width: 268px;
                        height: 163px;
                        border-radius: 10px;
                        overflow: hidden;
                        margin-right: 53px;
                        float: left;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .txt {
                        width: 494px;
                        margin-right: 5px;
                        float: right;
                        b {
                            font-size: 18px;
                            line-height: 1.1;
                            color: #333;
                            display: block;
                            margin: 10px 0 20px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        p {
                            font-size: 14px;
                            color: #666;
                            line-height: 24px;
                            overflow : hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                        span {
                            font-size: 14px;
                            color: #333;
                            display: block;
                            margin-top: 18px;
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
                li:first-child {
                    border-top: none;
                }
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

    /* page */

    // .page-nav {
    //     margin-top: 47px;
    //     padding-bottom: 50px;
    //     text-align: center;
    // }

    // .page-nav ul.pagination {
    //     margin: 0 15px;
    // }

    // .page-nav ul.pagination li {
    //     display: inline-block;
    //     line-height: 24px;
    //     margin-left: 16px;
    // }

    // .page-nav ul.pagination li a {
    //     height: 24px;
    //     line-height: 24px;
    //     display: inline-block;
    //     font-size: 16px;
    //     color: #999;
    //     padding: 0;
    //     cursor: pointer !important;
    // }

    // .page-nav ul.pagination li:first-child {
    //     margin-left: 0;
    // }

    // .page-nav ul.pagination li:hover a,
    // .page-nav ul.pagination li.active a {
    //     color: #fff;
    //     background-color: #e91222;
    //     border-color: #e91222;
    // }

    // .page-nav span,
    // .page-nav a {
    //     height: 26px;
    //     display: inline-block;
    //     font-size: 16px;
    //     color: #999;
    //     line-height: 26px;
    // }

    // .page-nav ul {
    //     font-size: 0;
    //     display: inline-block;
    //     vertical-align: -7px;
    // }

    // .page-nav ul li {
    //     display: inline-block;
    //     margin-left: 16px;
    // }

    // .page-nav ul li a {
    //     width: 24px;
    //     height: 24px;
    //     line-height: 24px;
    //     border: 1px solid #999;
    //     border-radius: 50%;
    //     overflow: hidden;
    // }

    // .page-nav ul li:first-child {
    //     margin-left: 0;
    // }

    // .page-nav ul li:hover a,
    // .page-nav ul li.active a {
    //     color: #fff;
    //     background-color: #e91222;
    //     border-color: #e91222;
    // }

    // .page-nav span input {
    //     width: 46px;
    //     height: 24px;
    //     border-radius: 10px;
    //     border: 1px solid #999;
    //     text-align: center;
    //     color: #999;
    //     font-size: 16px;
    // }

    // .page-nav .page-btn {
    //     width: 66px;
    //     border: 1px solid #999;
    //     border-radius: 26px;
    // }

    // .page-nav .page-btn:hover {
    //     background-color: #e91222;
    //     border-color: #e91222;
    // }

    // .page-nav .page-btn:hover a {
    //     color: #fff;
    // }

    // .page-nav .skip-span {
    //     margin: 0 30px;
    // }
}
</style>
