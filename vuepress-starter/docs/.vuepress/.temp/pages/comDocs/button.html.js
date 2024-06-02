import comp from "D:/02_项目/我的项目/封装专用/jiang-ui/vuepress-starter/docs/.vuepress/.temp/pages/comDocs/button.html.vue"
const data = JSON.parse("{\"path\":\"/comDocs/button.html\",\"title\":\"按钮\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"git\":{\"updatedTime\":1717300290000,\"contributors\":[{\"name\":\"jiangtxt\",\"email\":\"csisland@126.com\",\"commits\":1}]},\"filePathRelative\":\"comDocs/button.md\"}")
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
