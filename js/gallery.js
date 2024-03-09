const sections = document.querySelectorAll('.rg__column')
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

export function initHoverRevealGallery() {
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
