function locomotive() {
  gsap.registerPlugin(ScrollTrigger)

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  })
  locoScroll.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

  ScrollTrigger.refresh()
}
locomotive()

var tl = gsap.timeline()

tl.from('.line h1', {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
})

tl.from('#line1-part1', {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector('#line1-part1 h5')
    var grow = 0
    setInterval(function () {
      if (grow < 10) h5timer.textContent = '0' + grow++
      else if (grow < 100) h5timer.textContent = grow++
      else h5timer.textContent = 100
    }, 33)
  },
})

tl.to('.line h2', {
  animationName: 'anime',
  opacity: 1,
})

tl.to('#loader', {
  opacity: 0,
  duration: 0.2,
  delay: 4,
})

tl.from('#page1', {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
})

tl.to('#loader', {
  display: none,
})
