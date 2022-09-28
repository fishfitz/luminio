module.exports = {
  f11: function () {
    $ui.fullscreen()
  },
  'j,ctrl+j': function () {
    $ui.focus('#journal')
  },
  'h,ctrl+h,m,ctrl+m': function () {
    $ui.focus('#card_0')
  },
  'e,ctrl+e,f,ctrl+f': function () {
    $ui.focus('#foe_0')
  },
  'p,ctrl+p': function () {
    $ui.focus('#last_position')
  }
}
