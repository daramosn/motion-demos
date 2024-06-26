<template>
  <main class="infinite-text">
    <section>
      <img :src="image1" alt="art-museum" />
      <div class="text-container">
        <div class="text">
          <p aria-hidden="true">Infinite text with move on scroll -</p>
          <p>Infinite text with move on scroll -</p>
          <p aria-hidden="true">Infinite text with move on scroll -</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import image1 from '../assets/images/art-museum.jpg'

let progress = 0
let direction = 1

function slide() {
  const $text = document.body.querySelector('.text') as HTMLElement

  if (progress < -100 / 3) progress = 0
  if (0 < progress) progress = -100 / 3
  $text.style.transform = `translateX(${-100 / 3 + progress}%)`

  progress += 0.03 * direction

  requestAnimationFrame(slide)
}

onMounted(() => {
  slide()

  // GSAP
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('.text-container', {
    scrollTrigger: {
      trigger: document.body.querySelector('section'),
      start: 'top top',
      end: 'bottom top',
      scrub: 0.3,
      onUpdate: (e) => (direction = -e.direction)
    },
    x: '-=300px'
  })

  // // Motion one
  // let lastProgress = 0
  // scroll((info) => {
  //   if (info.y.progress > lastProgress && direction === -1) direction = 1
  //   if (info.y.progress < lastProgress && direction === 1) direction = -1
  //   lastProgress = info.y.progress
  // })
  // scroll(animate('.text-container', { x: [0, 500 * direction + 'px'] }, { easing: 'ease-in' }))
})
</script>

<style>
.infinite-text {
  height: 200vh;

  section {
    height: 100svh;
    contain: paint;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .text-container {
      font-family: 'Bebas Neue';
      position: fixed;
      bottom: 32px;
      text-wrap: nowrap;

      .text {
        display: flex;
        transform: translate(-33.333333%);
        p {
          text-transform: uppercase;
          padding-left: 32px;
          font-weight: 600;
          letter-spacing: 4px;
          margin: 0;
          font-size: customClamp(96px, 196px, 536px, 1200px);
        }
      }
    }
  }
}
</style>
