gsap.registerPlugin(ScrollTrigger)
import { initHoverRevealGallery } from './js/gallery'
import { initNavigation } from './js/navbar'
import { initHeaderTilt } from './js/header'
import { initPortfolioHover } from './js/portfolio'
import { initImageParallax } from './js/parallax'
import { initPinNavigation } from './js/sidenav'

function init() {
  initNavigation()
  initHeaderTilt()
  initHoverRevealGallery()
  initPortfolioHover()
  initImageParallax()
  initPinNavigation()
}

window.addEventListener('load', function () {
  init()
})
