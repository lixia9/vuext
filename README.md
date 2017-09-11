# vuext

> Centralized State Management for Vue.js

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

### tpodata.js
    const tpodata={//public data
	name:"VUEXT",
	ls:[1,2,3],
	getName(name){
		this.name=name
            }
        }
        tpodata.head={ //part data
            name:"lixiaolong"
        }

export default tpodata;
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
