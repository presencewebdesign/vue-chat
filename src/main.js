import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import Welcome from "./components/Welcome"
import Chat from "./components/Chat"
import VueChatScroll from "vue-chat-scroll"

Vue.use(VueRouter)
Vue.use(VueChatScroll)

export const router = new VueRouter({
   mode: "history",
   routes: [
      { path: "/", name: "Welcome", component: Welcome },
      {
         path: "/chat",
         name: "Chat",
         component: Chat,
         props: true,
         beforeEnter: (to, from, next) => {
            if (to.params.name) {
               next()
            } else {
               next({ name: "Welcome" })
            }
         },
      },
   ],
})
new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app")
