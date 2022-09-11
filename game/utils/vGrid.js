const listeners = {}

export default {
  mounted (el, { arg, value: { rowIndex, colIndex } }) {
    el.dataset.grid = `${arg}-${rowIndex}-${colIndex}`

    listeners[el.dataset.grid] = event => {
      let y = rowIndex
      let x = colIndex
      switch (event.key) {
        case 'ArrowRight': {
          x += 1
          break
        }
        case 'ArrowLeft': {
          x -= 1
          break
        }
        case 'ArrowDown': {
          y += 1
          break
        }
        case 'ArrowUp': {
          y -= 1
          break
        }
      }

      document.querySelector(`[data-grid='${arg}-${y}-${x}']`)?.focus()
    }

    el.addEventListener('keyup', listeners[el.dataset.grid])
  },
  beforeUnmount (el) {
    el.removeEventListener('keyup', listeners[el.dataset.grid])
  }
}
