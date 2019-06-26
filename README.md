# @knowler/typescale

A simple modular typescale utility.

```
npm i @knowler/typescale
```

## Usage

Here’s a simple example:

```
const typescale = require('@knowler/typescale')

typescale({
  ratio: 4/3,     // Defaults to 1.25
  top: 8,         // Required
  bottom: -3,     // Defaults to -1
  base: 16,       // Defaults to 1
  unit: 'px',     // Defaults to 'rem'
  precision: 2,   // Defaults to 3
  prefix: 'f'     // Defaults to 's'
})
```

This generates the following typescale:

```
{
  'f-2': '9px',
  'f-1': '12px',
  f0: '16px',
  f1: '21.33px',
  f2: '28.44px',
  f3: '37.93px',
  f4: '50.57px',
  f5: '67.42px',
  f6: '89.9px',
  f7: '119.86px',
  f8: '159.82px'
}
```
