module.exports = function({
  bottom = -1,
  top,
  ratio = 1.25,
  base = 1,
  unit = 'rem',
  prefix = 's',
  precision = 3,
}) {
  let obj = {}
  for (let i = bottom; i <= top; i++) {
    const rounding = Math.pow(10, precision)
    obj = {
      ...obj,
      [prefix + i]: Math.round(base * Math.pow(ratio, i) * rounding) / rounding + unit,
    }
  }
  return obj
}
