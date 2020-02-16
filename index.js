const findMatching = (drivers, driverName) => {
  return drivers.filter(name => name.toLowerCase() === driverName.toLowerCase())
}
