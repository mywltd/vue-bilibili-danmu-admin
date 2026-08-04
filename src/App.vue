<template>
  <n-notification-provider>
    <n-dialog-provider>
      <n-config-provider
        class="wh-full" :locale="zhCN" :date-locale="dateZhCN"
        :theme="appStore.isDark ? darkTheme : undefined" :theme-overrides="appStore.naiveThemeOverrides"
      >
        <router-view v-if="Layout" v-slot="{ Component, route: curRoute }">
          <component :is="Layout">
            <transition name="fade-slide" mode="out-in" appear>
              <KeepAlive :include="keepAliveNames">
                <component :is="Component" v-if="!tabStore.reloading" :key="curRoute.fullPath" />
              </KeepAlive>
            </transition>
          </component>

          <LayoutSetting v-if="layoutSettingVisible" class="fixed right-12 top-1/2 z-999" />
        </router-view>
      </n-config-provider>
    </n-dialog-provider>
  </n-notification-provider>
  <footer class="admin-beian">
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备2026006931号</a>
  </footer>
</template>

<script setup>
import { LayoutSetting } from '@/components'
import { useAppStore, useTabStore } from '@/store'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import { layoutSettingVisible } from './settings'

const layouts = new Map()
function getLayout(name) {
  // 利用map将加载过的layout缓存起来，防止重新加载layout导致页面闪烁
  if (layouts.get(name))
    return layouts.get(name)
  const layout = markRaw(defineAsyncComponent(() => import(`@/layouts/${name}/index.vue`)))
  layouts.set(name, layout)
  return layout
}

const route = useRoute()
const appStore = useAppStore()
if (appStore.layout === 'default')
  appStore.setLayout('')
const Layout = computed(() => {
  if (!route.matched?.length)
    return null
  return getLayout(route.meta?.layout || appStore.layout)
})

const tabStore = useTabStore()
const keepAliveNames = computed(() => {
  return tabStore.tabs.filter(item => item.keepAlive).map(item => item.name)
})

watchEffect(() => {
  appStore.setThemeColor(appStore.primaryColor, appStore.isDark)
})
</script>

<style scoped>
.admin-beian {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  pointer-events: none;
  background: transparent;
}

.admin-beian a {
  pointer-events: auto;
  font-size: 12px;
  line-height: 20px;
  color: #999;
  text-decoration: none;
}

.admin-beian a:hover {
  color: #666;
  text-decoration: underline;
}
</style>
