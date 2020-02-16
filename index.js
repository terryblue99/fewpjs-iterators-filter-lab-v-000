const findMatching = (drivers, driverName) => {
  return drivers.filter(name => name.toLowerCase() === driverName.toLowerCase())
}

const fuzzyMatch = (drivers, firstLetters) => {
  return drivers.filter(name => name.toLowerCase().includes(firstLetters.toLowerCase()))
}
