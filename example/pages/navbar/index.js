

Page({
    onClick(e) {
        console.log('onClick', e)
        if (e.detail.type === 'right') {
            tt.showModal({
                title: 'Thank you for your support!',
                showCancel: !1,
            })
        }
    },
})
