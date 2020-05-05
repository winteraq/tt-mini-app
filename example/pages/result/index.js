Page({
  onSuccess() {
    tt.navigateTo({
      url: '../../pages/result/success',
    })
  },
  onError() {
    tt.navigateTo({
      url: '../../pages/result/error',
    })
  },
})
