//import * as $ from 'jquery'
import '../babel'
import '../scss/style.scss'
import {a} from './1.js'
import Vue from 'vue'
import MainBg from '../img/mainInformation/bg.jpg'
import containerBig from '../components/containerBig.vue'


const app = new Vue({
    el: '.wrapper',
    data: {
        message: 'Hi!!'
    },
    components: {
      containerBig
    }
}) 