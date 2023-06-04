import { createApp } from 'vue'
import './style.css'
// @ts-expect-error 引入错误
import App from '@/App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { camelCaseToLine } from '@/utils/str-utils'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${camelCaseToLine(key)}`, component)
}

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
