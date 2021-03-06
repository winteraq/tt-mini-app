import baseComponent from '../helpers/baseComponent'
import classNames from '../helpers/classNames'

baseComponent({
  relations: {
    '../accordion-group/index': {
      type: 'parent',
    },
  },
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-accordion',
    },
    key: {
      type: String,
      value: '',
    },
    thumb: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    content: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    showArrow: {
      type: Boolean,
      value: true,
    },
    activeKey: {
      type: String,
      value: null,
    },
  },
  data: {
    current: true,
    index: '0',
  },
  computed: {
    classes: [
      'prefixCls, current, disabled',
      function (prefixCls, current, disabled) {
        console.log('classes', prefixCls, current, disabled)
        const wrap = classNames(prefixCls, {
          [`${prefixCls}--current`]: current,
          [`${prefixCls}--disabled`]: disabled,
        })
        const hd = `${prefixCls}__hd`
        const thumb = `${prefixCls}__thumb`
        const title = `${prefixCls}__title`
        const arrow = `${prefixCls}__arrow`
        const bd = `${prefixCls}__bd`
        const content = `${prefixCls}__content`

        return {
          wrap,
          hd,
          thumb,
          title,
          arrow,
          bd,
          content,
        }
      },
    ],
  },
  ready() {
    const { activeKey } = this.data
    console.log('activeKey', activeKey)
    this.changeCurrent(!!activeKey, activeKey)
  },
  methods: {
    changeCurrent(current, index) {
      this.setData({
        current,
        index,
      })
    },
    onTap() {
      const { index, disabled } = this.data
      console.log(
        index,
        disabled,
        this.getRelationNodes('../accordion-group/index')
      )
      const parent = this.getRelationNodes('../accordion-group/index')[0]

      if (disabled || !parent) return

      parent.onClickItem(index)
    },
  },
})
