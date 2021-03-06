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
import Arrow2 from '../img/calculator/arrow2.svg'
import Arrow2rev from '../img/calculator/arrow2rev.svg'
import Round from '../img/calculator/round.svg'
import Fbg from '../img/feedback/fbg.jpg'
import User from '../img/feedback/user.svg'
import Arb from '../img/feedback/arb.svg'
import Check from '../img/feedback/checking-mark.svg'
import Single from '../img/single/project.jpg'
//IMAGES
import Container from '../components/Container.vue'
import ContainerBig from '../components/ContainerBig.vue'
import Btn from '../components/Btn.vue'
import TitleOne from '../components/TitleOne.vue'
import TitleTwo from '../components/TitleTwo.vue'
//COMPONENTS
Vue.use(VueEllipseProgress);
const app = new Vue({
  el: '.wrapper',
  data: {
    what: 1,
    time: 0.5,
    type: 0.5,
    count: 1.001,
    wp: 1,
    fb: 1,
    phone: ''
  },
  components: {
    Container,
    ContainerBig,
    Btn,
    TitleOne,
    TitleTwo
  },
  methods: {
    toggleMenu(){
      let lines = document.querySelectorAll('.menu-btn__line'),
        nav = document.querySelector('.navigation-block');
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('menu-btn_line_active');
      }
      nav.classList.toggle('navigation-block_active');
    },
    click(event){
      if (event.target.classList.contains('drop-list')){
        event.target.closest('.drop-list').classList.toggle('drop-list_active');
      } else {
        let list = document.querySelectorAll('.drop-list');
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove('drop-list_active');
        }
      }
    },
    unblock(event){
      if(event.target.value==2){
        document.querySelector('.calculator-block__variant-blocked').style.display="none";
      } else {
        document.querySelector('.calculator-block__variant-blocked').style.display="block";
      }
    },
    resActive(){
      const res = document.querySelector('.calculator-block__result-sm-wrapper');
      res.classList.remove('calculator-block_result-sm_active');
      res.classList.add('calculator-block_result-sm_active');
    },
    resDis(){
      const res = document.querySelector('.calculator-block__result-sm-wrapper');
      res.classList.remove('calculator-block_result-sm_active');
    },
    unblocked(){
      let submitButton = document.querySelector('.form__btn');
      let checkbox = document.querySelector('.form__checkbox');
      if (checkbox.checked && document.querySelector('.form__drop-list').value!=0) {
        submitButton.disabled = false;
        submitButton.classList.remove('form__btn_disabled');
      } else {
        submitButton.disabled = true;
        submitButton.classList.add('form__btn_disabled');
      }
    },
    preventDefault: function(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;  
    },
    disableScroll(){
      if (document.querySelector('.navigation-block').classList.contains('navigation-block_active')){
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        document.addEventListener('wheel', this.preventDefault, {passive: false});
        document.addEventListener('scroll', this.preventDefault, {passive: false});
      } else {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        document.removeEventListener('wheel', this.preventDefault, {passive: false});
        document.removeEventListener('scroll', this.preventDefault, {passive: false});
      }
    },
    unblockTwo(){
      let inputs = document.querySelectorAll('.input');
      for (let i=0;i<inputs.length;i++){
        if(inputs[0].value && inputs[1].value){
          inputs[i].style.borderColor="#402A17";
        } else {
          inputs[i].style.borderColor="darkred"
        }
      }
    },
    load(){
      const img = document.querySelector('.portfolio-img-wrapper__img');
      img.style.visibility="visible";
      document.querySelector('.portfolio-img-wrapper').style.overflowY="visible";
    }
  },
  computed: {
    finalPrice(){
      return Math.round((+this.time*1000+(+this.what*1000))*+this.wp*+this.type+(+this.count*1000));
    }
  },
  filters: {
    format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
  }
});


document.querySelector('.form__btn').disabled = true

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
};

var wow = new WOW.WOW({
  live: false
}).init();


