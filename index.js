const findMatching = (drivers, name) => {
  return drivers.filter(name => name.toLowerCase() === name.toLowerCase())
}
