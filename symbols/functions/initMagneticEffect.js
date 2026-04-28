export const applyMagnetic = function applyMagnetic(event) {
  const node = this.node
  if (!node) return

  var rect = node.getBoundingClientRect()
  var centerX = rect.left + rect.width / 2
  var centerY = rect.top + rect.height / 2
  var distX = event.clientX - centerX
  var distY = event.clientY - centerY
  var distance = Math.sqrt(distX * distX + distY * distY)
  var proximity = 80

  if (distance < proximity) {
    var strength = (1 - distance / proximity) * 0.35
    var moveX = distX * strength
    var moveY = distY * strength
    node.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)'
  } else {
    node.style.transform = 'translate(0, 0)'
  }
}

export const resetMagnetic = function resetMagnetic() {
  var node = this.node
  if (!node) return
  node.style.transform = 'translate(0, 0)'
}
