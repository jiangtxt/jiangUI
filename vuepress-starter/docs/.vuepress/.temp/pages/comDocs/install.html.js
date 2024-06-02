import comp from "D:/02_项目/我的项目/封装专用/jiang-ui/vuepress-starter/docs/.vuepress/.temp/pages/comDocs/install.html.vue"
const data = JSON.parse("{\"path\":\"/comDocs/install.html\",\"title\":\"图标\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"comDocs/install.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
