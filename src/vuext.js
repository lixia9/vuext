import Vue from 'vue';
const vuext={
    install(Vue){
        const usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
        Vue.mixin(usesInit ? { init: this.vuexInit } : { beforeCreate: this.vuexInit })
    },
    vuexInit(){
        const options = this.$options
        // store injection
        if (options.tpostore) {
          this.$tpo = options.tpostore
        } else if (options.parent && options.parent.$tpo) {
          this.$tpo = options.parent.$tpo
        }
    }
}
var tpostore= (option={})=>{
  return  new Vue({
        data: option
      });
}
export { tpostore,vuext};
