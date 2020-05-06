import $wuxCountDown from './countdown/index'
import $wuxCountUp from './countup/index'

/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例
 */
export const getCtx = (selector, ctx = getCurrentPages()[getCurrentPages().length - 1]) => {
    return new Promise((resolve, reject)=>{
          ctx.selectComponent(selector,function(componentCtx){
            if (!componentCtx) {
              throw new Error('无法找到对应的组件，请按文档说明使用组件'+selector)
            }
            return resolve(componentCtx)
          })
    })
}

const version = '1.1.0'
const $wuxActionSheet = (selector = '#wux-actionsheet', ctx) => getCtx(selector, ctx)
const $wuxBackdrop = (selector = '#wux-backdrop', ctx) => getCtx(selector, ctx)
const $wuxCalendar = (selector = '#wux-calendar', ctx) => getCtx(selector, ctx)
const $wuxDialog = (selector = '#wux-dialog', ctx) => getCtx(selector, ctx)
const $wuxForm = (selector = '#wux-form', ctx) => getCtx(selector, ctx)
const $wuxGallery = (selector = '#wux-gallery', ctx) => getCtx(selector, ctx)
const $wuxKeyBoard = (selector = '#wux-keyboard', ctx) => getCtx(selector, ctx)
const $wuxLoading = (selector = '#wux-loading', ctx) => getCtx(selector, ctx)
const $wuxNotification = (selector = '#wux-notification', ctx) => getCtx(selector, ctx)
const $startWuxRefresher = (selector = '#wux-refresher', ctx) => getCtx(selector, ctx).then(res=>res.triggerRefresh())
const $stopWuxRefresher = (selector = '#wux-refresher', ctx) => getCtx(selector, ctx).then(res=>res.finishPullToRefresh())
const $stopWuxLoader = (selector = '#wux-refresher', ctx, isEnd) => getCtx(selector, ctx).then(res=>res.finishLoadmore(isEnd))
const $wuxSelect = (selector = '#wux-select', ctx) => getCtx(selector, ctx)
const $wuxToast = (selector = '#wux-toast', ctx) => getCtx(selector, ctx)
const $wuxToptips = (selector = '#wux-toptips', ctx) => getCtx(selector, ctx)

export {
    version,
	$wuxCountDown,
	$wuxCountUp,
	$wuxActionSheet,
	$wuxBackdrop,
	$wuxCalendar,
	$wuxDialog,
	$wuxForm,
	$wuxGallery,
	$wuxKeyBoard,
	$wuxLoading,
	$wuxNotification,
	$startWuxRefresher,
	$stopWuxRefresher,
	$stopWuxLoader,
	$wuxSelect,
	$wuxToast,
	$wuxToptips
}
