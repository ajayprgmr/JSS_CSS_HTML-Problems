const showModalBtn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const minimizeBtn = document.querySelector('.minimize')
const closeBtn = document.querySelector('.close')
const maximizeBtn = document.querySelector('.maximize')

//...................functions.............................
function closeModal() {
  modal.classList.add('hidden')
}

function showModal() {
  modal.classList.remove('hidden')
}

function minimizeModal() {
  modal.classList.remove('modal')
  modal.classList.add('modalMinimize')
}

function maximizeModal() {
  modal.classList.add('modal')
  modal.classList.remove('modalMinimize')
}

// ......................Events....................................
showModalBtn.addEventListener('click', function () {
  showModal()
})

closeBtn.addEventListener('click', function () {
  closeModal()
})

minimizeBtn.addEventListener('click', function () {
  minimizeModal()
})

maximizeBtn.addEventListener('click', function () {
  maximizeModal()
})

// Ctrl+Z shortcut event listener
document.addEventListener('keydown', function (event) {
  if (
    event.altKey &&
    event.key === 'z' &&
    !modal.classList.contains('hidden')
  ) {
    if (modal.classList.contains('modalMinimize')) {
      maximizeModal()
    } else if (modal.classList.contains('modal')) {
      minimizeModal()
    }
  }
})
