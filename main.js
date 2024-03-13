gsap.registerPlugin(ScrollTrigger)
import { initHoverRevealGallery } from './js/gallery'
import { initNavigation } from './js/navbar'
import { initHeaderTilt } from './js/header'
import { initPortfolioHover } from './js/portfolio'
import { initImageParallax } from './js/parallax'

function init() {
  initNavigation()
  initHeaderTilt()
  initHoverRevealGallery()
  initPortfolioHover()
  initImageParallax()
}

window.addEventListener('load', function () {
  init()
})
