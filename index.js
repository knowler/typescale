module.exports = function({
  start = -1,
  end,
  ratio = 1.25,
  base = 1,
  unit = 'rem',
  prefix = 's',
}) {
  let obj = {}
  for (let i = start; i <= end; i++) {
    obj = {
      ...obj,
      [`s${i}`]: Math.round(base * Math.pow(ratio, i) * 1000) / 1000 + unit,
    }
  }
  return obj
}
