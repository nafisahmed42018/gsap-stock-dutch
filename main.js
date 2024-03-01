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

function createHoverReveal(e) {
  // console.log(e.type)
  const {
    image,
    imageMask,
    imageBlock,
    text,
    textCopy,
    textMask,
    textParagraph,
  } = e.target
  let tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: 'Power4.out',
    },
  })
  if (e.type === 'mouseenter') {
    tl.to([imageMask, imageBlock, textCopy, textParagraph, textMask], {
      yPercent: 0,
    })
      .to(
        text,
        {
          y: () => -getTextHeight(textCopy) / 2,
        },
        0,
      )
      .to(image, { duration: 1.1, scale: 1 }, 0)
  } else if (e.type === 'mouseleave') {
    // the chained 'to' tweens execute in serial sequence
    // to make them execute at the same time or before one another you can set a execution delay
    // set to 0 for both of the tweens to execute at the same time
    tl.to([imageMask, textParagraph], { yPercent: 100 })
      .to([imageBlock, textMask], { yPercent: -101 }, 0)
      .to(text, { y: 0 }, 0)
      .to(image, { scale: 1.2 }, 0)
  }
  return tl
}

function getTextHeight(textCopy) {
  return textCopy.clientHeight
}

function initHoverRevealGallery() {
  const sections = document.querySelectorAll('.rg__column')

  sections.forEach((section) => {
    section.imageBlock = section.querySelector('.rg__image')
    section.image = section.querySelector('.rg__image img')
    section.imageMask = section.querySelector('.rg__image--mask')
    section.text = section.querySelector('.rg__text')
    section.textCopy = section.querySelector('.rg__text--copy')
    section.textMask = section.querySelector('.rg__text--mask')
    section.textParagraph = section.querySelector('.rg__text--copy p')

    gsap.set([section.imageBlock, section.textMask], { yPercent: -101 })
    gsap.set([section.imageMask, section.textParagraph], { yPercent: 100 })
    gsap.set(section.image, { scale: 1.2 })

    section.addEventListener('mouseenter', createHoverReveal)
    section.addEventListener('mouseleave', createHoverReveal)
  })
}

function init() {
  initNavigation()
  initHeaderTilt()
  initHoverRevealGallery()
}

window.addEventListener('load', function () {
  init()
})
