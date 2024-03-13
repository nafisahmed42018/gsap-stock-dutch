export function initImageParallax() {
  const parallaxContainers = gsap.utils.toArray('.with-parallax')
  parallaxContainers.forEach((container) => {
    const image = container.querySelector('img')
    gsap.to(image, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        scrub: true,
        // markers: true,
      },
    })
  })
}
