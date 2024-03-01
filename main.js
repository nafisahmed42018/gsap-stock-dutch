gsap.registerPlugin(ScrollTrigger)

function initNavigation() {
  // store all the nav links to an array
  const mainNavLinks = gsap.utils.toArray('.main-nav a')
  const mainNavLinksReverse = gsap.utils.toArray('.main-nav a').reverse()

  // loop over each links to add effects
  mainNavLinks.forEach((link) => {
    link.addEventListener('mouseleave', (e) => {
      link.classList.add('animate-out')
      setTimeout(() => {
        link.classList.remove('animate-out')
      }, 300)
    })
  })

  // Nav links animation tween
  function navAnimation(direction) {
    const scrollingDown = direction === 1

    const links = scrollingDown ? mainNavLinks : mainNavLinksReverse

    return gsap.to(links, {
      duration: 0.6,
      stagger: 0.05,
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: 'Power4.out',
    })
  }

  // Trigger for navigation bar elements
  ScrollTrigger.create({
    start: 100,
    end: 'bottom bottom-=20',
    toggleClass: {
      targets: 'body',
      className: 'has-scrolled',
    },
    onEnter: ({ direction }) => navAnimation(direction),
    onToggle: ({ direction }) => navAnimation(direction),
    // markers: true,
  })
}

function moveImages(e) {
  const { offsetX, offsetY, target } = e
  const { clientWidth, clientHeight } = target
  // console.log(offsetX, offsetY, clientHeight, clientWidth)
  const xPos = offsetX / clientWidth - 0.5
  const yPos = offsetY / clientHeight - 0.5

  const leftImages = gsap.utils.toArray('.hg__left .hg__image')
  const rightImages = gsap.utils.toArray('.hg__right .hg__image')

  const modifier = (index) => index * 1.2 + 0.5

  leftImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: -yPos * 30 * modifier(index),
      rotationX: yPos * 20,
      rotationY: xPos * 40,
      ease: 'Power3.out',
    })
  })
  rightImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: yPos * 30 * modifier(index),
      rotationX: yPos * 20,
      rotationY: xPos * 40,
      ease: 'Power3.out',
    })
  })
  gsap.to('.decor__circle', {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: 'Power4.out',
  })
}

function initHeaderTilt() {
  document.querySelector('header').addEventListener('mousemove', moveImages)
}

function init() {
  initNavigation()
  initHeaderTilt()
}

window.addEventListener('load', function () {
  init()
})
