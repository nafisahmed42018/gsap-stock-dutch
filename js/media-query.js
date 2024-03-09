// const mq = window.matchMedia('(min-width: 768px)')

// window.addEventListener('resize', () => handleWidthChange(mq))

// function resetProps(elements) {
//   gsap.killTweensOf('*')
//   if (elements.length) {
//     elements.forEach((element) => {
//       element && gsap.set(element, { clearProps: 'all' })
//     })
//   }
// }

// function handleWidthChange(mq) {
//   if (mq.matches) {
//     initHoverRevealGallery()
//   } else {
//     sections.forEach((section) => {
//       section.removeEventListener('mouseenter', createHoverReveal)
//       section.removeEventListener('mouseleave', createHoverReveal)

//       const {
//         image,
//         imageMask,
//         imageBlock,
//         text,
//         textCopy,
//         textMask,
//         textParagraph,
//       } = section
//       resetProps([
//         image,
//         imageMask,
//         imageBlock,
//         text,
//         textCopy,
//         textMask,
//         textParagraph,
//       ])
//     })
//   }
// }
