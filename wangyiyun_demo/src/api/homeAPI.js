// 所有API
import Request from './request'


/**
 * {} 要传的4个属性
 * showLoading  是否显示loading加载图 不传默认为false 不显示
 * showErr      是否显示错误提示   不传默认为true 显示
 * needLogin    是否需要登录才能请求  不传默认为false  //暂时没用
 * repeatCancel     是否开启拦截重复请求  不传默认为true  开启
 * 
 * 例子
 * 
 * categoryList: (e) => Request.get('/v1/label/list', e ,{repeatCancel: false}),
 */


const api = {                                   
    categoryList: (e) => Request.get('/v1/label/list', e ,{repeatCancel: false}),                    //获取策略/动作/角色接口
}
export default api

