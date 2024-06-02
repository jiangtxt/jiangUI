import comp from "D:/02_项目/我的项目/封装专用/jiang-ui/vuepress-starter/docs/.vuepress/.temp/pages/comDocs/pageOne.html.vue"
const data = JSON.parse("{\"path\":\"/comDocs/pageOne.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"comDocs/pageOne.md\"}")
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
