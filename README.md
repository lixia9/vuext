# vuext

> Centralized State Management for Vue.js
> 
>仅有22行代码 压缩之后1K 实现VUE状态管理，实现异步同步调用

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## eg
 [demo](https://lixia9.github.io/vuext/dist/index.html#/).
### start
     1. package.json add "vuext":"1.0.0"
     2. create js file named "tpodata"(any)
     3. open main.js and 
        . import {tpostore,vuext} from "./vuext";
        . Vue.use(vuext)
        .new Vue({
            el: '#app',
            router,
            tpostore:tpostore(tpodata),
            template: '<App/>',
            components: { App }
            })
    4. {{this.$tpo.name}}
    5. change this.$tpo.name="XXX"
    6. function used  this.$tpo.getName()

### tpodata.js
    const tpodata={//public data
	name:"VUEXT",
	ls:[1,2,3],
	getName(name){
		//异步的实现
		//成功之后回调，commit name数据
		this.name=name
        }
    }
    tpodata.head={ //part data
        name:"lixiaolong"
    }

    export default tpodata;
### 使用说明
> 该代码只支持VUE2.0版本


     1 如何获得全局状态中的值
       this.$tpo
     2 如何修改全局状态中的值
       this.$tpo.name="XXX"
     3 如果是数组
       请使用 push pop shift 等原生方法操作
     4 如何调用方法
       this.$tpo.getName()
       



export default tpodata;
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
