export const initScrollReveal = function initScrollReveal() {
  const node = this.node
  if (!node || this.__scrollInitialized) return
  this.__scrollInitialized = true

  node.style.opacity = '0'
  node.style.transform = 'translateY(40px)'
  node.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'

  const observer = new IntersectionObserver(
    function onIntersect(entries) {
      entries.forEach(function handleEntry(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  observer.observe(node)
}
