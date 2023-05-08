module.exports = {
  // Convenient shortcuts
  f11: function () {
    $ui.fullscreen()
  },
  'space,enter': function () {
    document.activeElement.click()
  },

  // Accessibility shortcuts
  l: function () {
    $world.focusGroup('luminio')
  },
  e: function () {
    $world.focusGroup('foes')
  },
  m: function () {
    $world.focusGroup('hand')
  },
  j: function () {
    $world.focusGroup('journal')
  },
  s: function () {
    $world.focusGroup('story')
  },
  f: function () {
    document.getElementById('continue').click()
  },

  // Accessibility navigation
  up: function () {
    $ui.focusPreviousElementInGroup()
  },
  down: function () {
    $ui.focusNextElementInGroup()
  },
  left: function () {
    $ui.focusPreviousGroup()
  },
  right: function () {
    $ui.focusNextGroup()
  },

  // Debug shortcuts
  'ctrl+d': function () {
    $ui.downloadLogs()
  },
  'ctrl+g': function () {
    $world.DEBUG_MODE = true
    $world.FIGHT_FOES[0]?.receiveDamages(10000)
    $world.CANDELAS = $world.MAX_CANDELAS
  }
}
