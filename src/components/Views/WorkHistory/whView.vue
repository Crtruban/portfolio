<template>
  <div class="whView">
    <div class="header">
      Work History
    </div>
    <div id="carousel" class="carousel" :style="{ paddingLeft: (sidebarWidth) }">
      <div id='item_3' class="prev" @click="selectWH(prev)">
        <img :src="getImgUrl(prev.img)">
      </div>
      <div id='item_4' class="selected" @click="selectWH(current)">
        <img :src="getImgUrl(current.img)">
      </div>

      <div id='item_5' class="next" :value="next.name" @click="selectWH(next)">
        <img :src="getImgUrl(next.img)">
      </div>
    </div>
    <Transition>
    <div v-if="transittion" class="whMessage">
      {{ current.message }}
    </div>
  </Transition>
  </div>
</template>
<script>

import { sidebarWidth } from '../../Navigation/Sidebar/state'
export default {

  setup() {
    const workExperience = {
      Nexxis: {
        name: 'Nexxis',
        img: 'Nexxis',
        message: 'Mr. Truban assisted in the development and maintenance of a large-scale legacy application. Through an agile process Mr. Truban would meet with the client on a bi-weekly basis to determine requirements needed, and then proceed with feature development. '
      },
      IBM: {
        name: 'IBM',
        img: 'ibm',
        message: 'Mr. Truban develops applications for IBM clients by translating system requirements into appropriate designs using Agile methods. He uses VS Code and Eclipse to develop web applications with JavaScript and leverages MVC patterns and ensures the client’s requirements are satisfied.'
      },
      GridIron: {
        name: 'Grid Iron IT',
        img: 'Grid',
        message: 'Mr. Truban helped maintain the operation of a large-scale portal middleware application critical for clients’ operations. His tasks included adjusting the application to allow new applications connection to the clients database and other applications and improving the security and runtime of various features the portal utilized through leveraging the Angular framework, and Oracle SQL queries.'
      }
    };

    return { sidebarWidth, workExperience };
  },
  data() {
    let current = this.workExperience.Nexxis;
    let prev = this.workExperience.GridIron;
    let next = this.workExperience.IBM;
    let transittion = true;
    return { current, prev, next, transittion }
  },
  methods: {
    selectWH(value) {
      let { current, prev, next } = this;
      if (value != current) {
        this.transittion = !this.transittion;
        let swap = current;
        this.current = value;
        if (prev == value) {
          console.log("prev");
          this.prev = swap;
        }
        else {
          console.log("next");
          this.next = swap;
        }
        setTimeout(() => this.transittion = true, 900);
      }
    },
    getImgUrl(pic) {
      return require('../../../assets/' + pic + '.png')
    }
  }

}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.whView{
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.whMessage {
  padding-top: 3%;
  padding-left: 19%;
}
.header {
  padding-left: 15%;
  font-size: 550%;
}

#carousel {
  position: relative;
  height: 400px;
  transform: translateY(30%) translateX(8%);
  overflow: hidden;
}

#carousel div {
  position: absolute;
  transition: transform 400ms, left 400ms, opacity 400ms, z-index 0s;
  opacity: 1;
}

#carousel div img {
  width: 400px;
  transition: width 400ms;
  -webkit-user-drag: none;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
}

#carousel div.hideLeft {
  left: 0%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}

#carousel div.hideLeft img {
  width: 200px;
}

#carousel div.hideRight {
  left: 100%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}

#carousel div.hideRight img {
  width: 200px;
}

#carousel div.prev {
  z-index: 5;
  left: 30%;
  transform: translateY(50px) translateX(-50%);
}

#carousel img:hover {
  cursor: pointer;
}

#carousel div.prev img {
  width: 300px;
}

#carousel div.prevLeftSecond {
  left: 15%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}

#carousel div.prevLeftSecond img {
  z-index: 1;
  width: 200px;
}

#carousel div.selected {
  z-index: 10;
  left: 50%;
  transform: translateY(0px) translateX(-50%);
}

#carousel div.next {
  z-index: 5;
  left: 70%;
  transform: translateY(50px) translateX(-50%);
}

#carousel div.next img {
  width: 300px;
}

#carousel div.nextRightSecond {
  z-index: 4;
  left: 85%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}

#carousel div.nextRightSecond img {
  width: 200px;
}

/*previous or next buttons css*/

.buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
}

.button-82-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform 600ms cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%);
}

.button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform 600ms cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-6px);
  transition:
    transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition:
    transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>