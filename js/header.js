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

export function initHeaderTilt() {
  document.querySelector('header').addEventListener('mousemove', moveImages)
}
