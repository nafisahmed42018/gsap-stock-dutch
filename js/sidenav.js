export function initPinNavigation() {
  ScrollTrigger.create({
    trigger: '.fixed-nav',
    // [start,scroll-start]
    start: 'top center',
    endTrigger: '#stage4',
    // [end,scroll-end]
    end: 'center center',
    pin: true,
    markers: true,
  })
}
