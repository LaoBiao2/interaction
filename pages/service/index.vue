<template>
    <div>
        <div class="banner">
            <div class="content">
                <div class="txt">
                    <h4><span>互动商务</span>专业客服外包</h4>    
                    <p>现在选择互动商务，让您的每一位客户更满意</p>
                </div>
            </div>        
        </div>
        <div class="may">
            <h4>我们能为您做什么</h4>
            <div class="box">
                <div class="item clearfix">
                    <i class="mi1"></i>
                    <div class="txt">
                        <h5>呼出服务</h5>
                        <p>呼出服务主要包括市场推广、电话回访、信息核实、市场调查、商业活动邀请、客户关怀、数据调研、运营商增值业务等。可根据客户的项目要求和项目特点，按照项目的完成时间设定服务周期。</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <i class="mi2"></i>
                    <div class="txt">
                        <h5>客服外派</h5>
                        <p>互动商务人力派遣，专注为企业提供客服人力派遣、客服外包、驻场客服、短期客服招聘、快速组建客服团队。按人天、人月等灵活方式。涵盖各行业、各领域，为企业提供专业的客户服务。</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <i class="mi3"></i>
                    <div class="txt">
                        <h5>数据录入</h5>
                        <p>为企业提供各种表单数据文字录入、档案录入、各种格式数据录入、各行业数据录入。可分为资料整理、扫描录入、图像处理、拼写检查等烦杂耗费人力的服务</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <i class="mi4"></i>
                    <div class="txt">
                        <h5>增值业务</h5>
                        <p>通过电话对移动、联通、电信等运营平台的话费套餐、流量包等SP增值业务外呼年的移动运营商外呼经验，可有效减少客户投诉</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <i class="mi5"></i>
                    <div class="txt">
                        <h5>客服外包</h5>
                        <p>互动商务高品质的呼入服务，互动商务信息的呼叫中心系统，它是一种基于ＣＴＩ技术、完整的综合信息服务系统，它能为用户提供多种服务。该系统包含了全面的呼叫中心的功能，并在各个部分进行系统性的创新。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flow">
            <div class="content">
                <h4>合作流程</h4>
                <div class="box clearfix">
                    <div class="item">
                        <i class="fi1"></i>
                        <p><span>①</span>前期沟通</p>
                    </div>
                    <div class="item">
                        <i class="fi2"></i>
                        <p><span>②</span>确认合作</p>
                    </div>
                    <div class="item">
                        <i class="fi3"></i>
                        <p><span>③</span>岗前培训</p>
                    </div>
                    <div class="item">
                        <i class="fi4"></i>
                        <p><span>④</span>上线服务</p>
                    </div>
                    <div class="item">
                        <i class="fi5"></i>
                        <p><span>⑤</span>定期质检</p>
                    </div>
                    <div class="item">
                        <i class="fi6"></i>
                        <p><span>⑥</span>数据反馈</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 332px;
  background: url(/images/service/banner.jpg) no-repeat center;
  .txt {
    display: table-cell;
    vertical-align: middle;
    height: 332px;
    h4 {
      font-size: 30px;
      color: #ffffff;
      margin-bottom: 20px;
      span {
        color: #e91222;
      }
    }
    p {
      font-size: 16px;
      color: #fffefe;
    }
  }
}
.may{
    width: 100%;
    padding: 55px 0 15px 0;
    background: #ffffff;
    h4{
        font-size: 30px;
        color: #333333;
        text-align: center;
        font-weight: bold;
        margin-bottom: 48px;
    }
    .box{
        width: 875px;
        margin: 0 auto;
        .item{
            margin-bottom: 63px;
            i{
                float: left;
                width: 45px;
                height: 45px;
                margin:10px 30px 0 0;
                background: url(/images/service/service_icon.png) no-repeat;
            }
            .mi1{
                background-position: 0 0; 
            }
            .mi2{
                background-position: -61px 0; 
            }
            .mi3{
                background-position: -127px 0; 
            }
            .mi4{
                background-position: -199px 0; 
            }
            .mi5{
                background-position: -260px 0; 
            }
            .txt{
                float: right;
                width: 800px;
                h5{
                    font-size: 20px;
                    color: #666666;
                    margin-bottom: 16px;
                }
                p{
                    font-size: 14px;
                    color: #999999;
                    line-height: 26px;
                }
            }
        }        
    }
}
.flow{
    width: 100%;
    padding: 55px 0;
    background: #f3f3f3;
    .content{
        background: #ffffff;
        border-radius: 15px;
        padding: 35px 0 45px 0;
        h4{
            font-size: 30px;
            color: #333333;
            font-weight: bold;
            text-align: center;
        }
        .box{
            margin-top: 50px;
            text-align: center;
            background: url(/images/service/flow_line.png) no-repeat center 28px;
            .item{
                display: inline-block;
                width: 100px;
                margin:  0 50px;
                i{
                    display: block;
                    margin: 0 auto 20px auto;
                    height: 55px;
                    background: url(/images/service/flow_icon.png) no-repeat;
                }
                .fi1{
                    width: 45px;
                    background-position: 0 0;
                }
                .fi2{
                    width: 45px;
                    background-position: -78px 0;
                }
                .fi3{
                    width: 50px;
                    background-position: -157px 0;
                }
                .fi4{
                    width: 52px;
                    background-position: -240px 0;
                }
                .fi5{
                    width: 60px;
                    background-position: -322px 0;
                }
                .fi6{
                    width: 57px;
                    background-position: -414px 0;
                }
                p{
                    font-size: 16px;
                    color: #666666;
                    span{
                        display: inline-block;
                        margin-right: 5px;
                    }
                }
            }
            b{
                display: inline-block;
                width: 86px;
                height: 4px;
                background: url(/images/service/flow_icon.png) no-repeat 0 -62px;
            }
        }        
    }
}

</style>

