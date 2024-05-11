import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import {createAuth0, useAuth0} from "@auth0/auth0-vue";

const app = createApp(App)
app.use(
    createAuth0({
        domain: "dev-ztbcxbd2zxiwumge.us.auth0.com",
        clientId: "ziRWTPZXeowQQhWQVvhQL6EvHdlWybEH",
        authorizationParams: {
            redirect_uri: "http://localhost:5173/profile",

        }
    })
);
app.use(router)

app.mount('#app')
