import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 88,
            behavior: 'smooth',
          })
        }, 100)
      })
    }

    // Cuộn tức thì lên đầu trang khi chuyển giữa các trang khác nhau
    return {
      top: 0,
      left: 0,
      behavior: 'instant',
    }
  },
}
