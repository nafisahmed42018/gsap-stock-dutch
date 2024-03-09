gsap.registerPlugin(ScrollTrigger)
import { initHoverRevealGallery } from './js/gallery'
import { initNavigation } from './js/navbar'
import { initHeaderTilt } from './js/header'
import { initPortfolioHover } from './js/portfolio'

function init() {
  initNavigation()
  initHeaderTilt()
  initHoverRevealGallery()
  initPortfolioHover()
}

window.addEventListener('load', function () {
  init()
})
