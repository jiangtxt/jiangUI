import Icon from "./components/Icon.vue";
import Button from "./components/Button.vue";

const myPulgin = {
  install(app) {
    app.component('j-icon', Icon)
    app.component('j-button', Button)
  }
}
export default myPulgin
