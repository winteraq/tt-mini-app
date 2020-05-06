import { $wuxLoading } from '../../dist/index'

Page({
  data: {},
  onLoad() {},
  showLoading() {
    $wuxLoading().then((res) => {
      this.$wuxLoading = res
      this.$wuxLoading.show({
        text: '数据加载中',
      })

      setTimeout(() => {
        this.$wuxLoading.hide()
      }, 1500)
    })
  },
})
