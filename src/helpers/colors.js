/**
 * Don't modify this file!
 * Colors generated by themes!
 */

/* eslint-disable */

export const colors = {
  light: '#ddd',
  stable: '#b2b2b2',
  primary: '#387ef5',
  info: '#11c1f3',
  success: '#33cd5f',
  warning: '#ffc900',
  error: '#ef473a',
  royal: '#886aea',
  dark: '#444',
}

export const isPresetColor = (color) => {
  if (!color) {
    return false
  }
  return colors[color] ? colors[color] : color
}

/* eslint-enable */
