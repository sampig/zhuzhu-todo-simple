const convertDateToString = (milliseconds) => {
  return (new Date(milliseconds)).toISOString().split('.')[0].split('T').join(' ')
}

export {
  convertDateToString,
}
