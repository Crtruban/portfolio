<template>
  <div class="whView">
    <div class="header">
      Work History
    </div>
    <div id="carousel">
      <div class="prev">
        <img  @click="selectWH(prev)" :src="getImgUrl(prev.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.prvTrans}">
      </div>
      <div class="selected">
        <img  @click="selectWH(current)" :src="getImgUrl(current.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.crnTrans}">
        </div>
        <div class="next">
        <img  @click="selectWH(next)" :src="getImgUrl(next.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.nxtTrans}">
      </div>
      </div> 
      <!-- <div id='item_3' class="prev" @click="selectWH(prev)">
        <img class="transObject" :src="getImgUrl(prev.img)" :class="{'fade-out': !transObject.prvTrans}">
      </div>
      <div id='item_4' class="selected" @click="selectWH(current)">
        <img :src="getImgUrl(current.img)" :class="{'fade-out': !transObject.crnTrans}">
      </div>

      <div id='item_5' class="next" :value="next.name" @click="selectWH(next)">
        <img :src="getImgUrl(next.img)" :class="{'fade-out': !transObject.nxtTrans}">
      </div> -->
    <Transition>
    <div v-if="transObject.msgTrans" class="whMessage">
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
    let transObject = {
      msgTrans: true,
      prvTrans: true,
      crnTrans: true,
      nxtTrans: true
    };
    return { current, prev, next, transObject }
  },
  methods: {
    selectWH(value) {
      let { current, prev, next } = this;
      if (value != current) {
        this.transObject.msgTrans = !this.transObject.msgTrans;
        this.transObject.crnTrans = !this.transObject.crnTrans
        let swap = current;
        if (prev == value) {
          console.log("prev");
          this.transObject.prvTrans = !this.transObject.prvTrans;
          setTimeout(() => {
            this.prev = swap;
          this.current = value;
            this.transObject.crnTrans = true;
            this.transObject.prvTrans = true;
            this.transObject.nxtTrans = true;
            this.transObject.msgTrans = true;
          }, 1500);
        }
        else {
          console.log("next");
          this.transObject.nxtTrans = !this.transObject.nxtTrans
          
          setTimeout(() => {
            this.next = swap;
          this.current = value;
            this.transObject.crnTrans = true;
            this.transObject.prvTrans = true;
            this.transObject.nxtTrans = true;
            this.transObject.msgTrans = true;
          }, 1000);
        }
        
      }
    },
    getImgUrl(pic) {
      return require('../../../assets/' + pic + '.png')
    }
  }

}
</script>
<style scoped>
.img {
  transition: opacity 1s;
}

.img.fade-out {
  opacity: 0;
}
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
img {
  width: 400px;
  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
  border-radius: 10px;
}
.img-holder .crnt img {
  height: 750;
  cursor: pointer;
}
.img-holder img:hover {
  cursor: pointer;
}
#carousel {
  position: relative;
  height: 400px;
  transform: translateY(30%) translateX(8%);
  overflow: hidden;
}

#carousel div {
  position: absolute;
}

#carousel div img {
  width: 400px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
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


</style>