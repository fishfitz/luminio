export const alter = (key, value, ...args) => {
  return $world.TRINKETS
    .map(trinket => trinket?.alter?.[key])
    .filter(alter => alter)
    .sort((a, b) => (a?.priority || 0) - (b?.priority || 0))
    .map(alter => alter.handle || alter)
    .reduce((acc, alter) => alter(acc, ...args), value)
}

export const on = (key, ...args) => {
  return $world.TRINKETS
    .forEach(trinket => trinket?.on?.[key]?.(...args))
}
