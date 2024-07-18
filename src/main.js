import './assets/main.css'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
const options = {
    container: document.getElementById('aplayer'),
    audio: [{
        name: '所念皆星河',
        artist: 'CMJ',
        url: 'music.opus',
        cover: 'musicCover.jpg'
    }],
    fixed: true,
    autoplay: true,
}
new APlayer(options);

