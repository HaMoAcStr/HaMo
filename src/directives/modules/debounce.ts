/**
 *  防抖指令 点击按钮时 延迟500ms触发事件 在此期间内继续点击则取消定时器 重新延迟500ms后触发 直至触发一次之后
 */
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  __handleClick__: () => any
}

// 节流函数
const debounce: Directive = {
  mounted (el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw new Error('callback must be a function')
    }
    let timer: NodeJS.Timeout | null = null
    el.__handleClick__ = function () {
      if (timer != null) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount (el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default debounce
