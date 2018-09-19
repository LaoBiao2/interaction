import axios from 'axios'
//定义fetch函数，config为配置
export function fetch(config){
   //返回promise对象
   return new Promise((resolve,reject) =>{
       //创建axios实例，把基本的配置放进去
       const instance = axios.create({
           //定义请求文件类型
           headers:{
              'Content-Type': 'application/json',
            },
            // 请求超时  
            timeout: 5000,
            //定义请求根目录
            baseURL: 'http://192.168.1.30:8082/'
        });
       //请求成功后执行的函数
        instance(config).then(res =>{
            console.log(res);
            resolve(res);
        //失败后执行的函数
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    });
}

// 封装调用的接口 getData
export function getData(url,type,data) {
    //如果type为空，默认为post方法，也可以自己改成get
    if(type==='')
        type = 'post';
    return fetch({
    //这里的url为baseURL下接口地址，如baseURL为'www.baidu.com',接口地址为'www.baidu.com/api/getdata',那么url里就写'api/getdata'
        url: url,
        method: type,
        data: data,
    })
}