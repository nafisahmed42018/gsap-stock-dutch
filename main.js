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
    markers: true,
  })
}



function init() {
  initNavigation()
}

window.addEventListener('load', function () {
  init()
})
