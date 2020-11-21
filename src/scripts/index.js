import '../babel'
import '../scss/style.scss'
import {a} from './1.js'
import Vue from 'vue'
import VueEllipseProgress from 'vue-ellipse-progress'
import WOW from 'wowjs'
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css';
//LIBS AND FRAMEWORKS
import MainBg from '../img/mainInformation/bg.jpg'
import Ava from '../img/mainInformation/ava.jpg'
import Vk1 from '../img/mainInformation/1.svg'
import Inst1 from '../img/mainInformation/2.svg'
import Github1 from '../img/mainInformation/3.svg'
import Fb1 from '../img/mainInformation/4.svg'
import Sprite from '../img/sprite.svg'
import About from '../img/about/about.png'
import Keyboard from '../img/skills/keyboard.jpg'
import PortfolioBg from '../img/portfolio/pbg.jpg'
import Project from '../img/portfolio/project.png'
//IMAGES
import Container from '../components/Container.vue'
import ContainerBig from '../components/ContainerBig.vue'
import Btn from '../components/Btn.vue'
import TitleOne from '../components/TitleOne.vue'
import TitleTwo from '../components/TitleTwo.vue'
//COMPONENTs

Vue.use(VueEllipseProgress);
const app = new Vue({
  el: '.wrapper',
  data: {
    about: About
  },
  components: {
    Container,
    ContainerBig,
    Btn,
    TitleOne,
    TitleTwo
  },
  methods: {
    toggleMenu() {
      let lines = document.querySelectorAll('.menu-btn__line'),
        nav = document.querySelector('.navigation-block');
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('menu-btn_line_active');
      }
      nav.classList.toggle('navigation-block_active');
    }
  }
});

for ( let i of document.querySelectorAll(".skills-block__number") ) {

  let numberTop = i.getBoundingClientRect().top,
      start = +i.innerHTML,
      end = +i.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight) {
      this.removeEventListener('scroll', onScroll);
      let interval = this.setInterval(function() {
        i.innerHTML = ++start;
        if(start == end) {
          clearInterval(interval);
        }
    }, 9);
    }
  });
}

var wow = new WOW.WOW({
  live: false
}).init();


