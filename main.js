export function typescale({
  bottom = -1,
  top,
  ratio = 1.25,
  base = 1,
  unit = 'rem',
  prefix = 's',
  precision = 3,
  step = 1,
}) {
  let obj = {}
  for (let i = bottom; i <= top; i += step) { const rounding = Math.pow(10, precision)
    obj = {
      ...obj,
      [prefix + String(i).replace(/\./, '-')]: Math.round(base * Math.pow(ratio, i) * rounding) / rounding + unit,
    }
  }
  return obj
}

export default typescale
