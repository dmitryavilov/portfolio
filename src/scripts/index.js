import '../babel'
import '../scss/style.scss'
import {a} from './1.js'
import Vue from 'vue'
//LIBS AND FRAMEWORKS
import MainBg from '../img/mainInformation/bg.jpg'
import Ava from '../img/mainInformation/ava.jpg'
import Vk1 from '../img/mainInformation/1.svg'
import Inst1 from '../img/mainInformation/2.svg'
import Github1 from '../img/mainInformation/3.svg'
import Fb1 from '../img/mainInformation/4.svg'
//IMAGES
import containerBig from '../components/ContainerBig.vue'
import Btn from '../components/Btn.vue'
//COMPONENTS


const app = new Vue({
    el: '.wrapper',
    data: {
        message: 'Hi!!'
    },
    components: {
      containerBig,
      Btn
    },
    methods: {
      toggleMenu(){
        let lines = document.querySelectorAll('.menu-btn__line'),
            nav = document.querySelector('.navigation-block');
        for(let i=0; i<lines.length; i++){
          lines[i].classList.toggle('menu-btn_line_active');
        }
        nav.classList.toggle('navigation-block_active');
      }
    }
}) 