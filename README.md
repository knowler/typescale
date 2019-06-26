# @knowler/typescale

A simple modular typescale utility.

## Usage

Here’s a simple example:

```
const typescale = require('@knowler/typescale')

typescale({
  ratio: 1.25,    // Defaults to 1.25
  start: -2,      // Defaults to -1
  end: 8,         // Required
  base: 16,       // Defaults to 1
  unit: 'px',     // Defaults to 'rem'
  prefix: 'f'     // Defaults to 's'
})
```

This outputs:

```
{
  'f-2': '10.24px',
  'f-1': '12.8px',
  f0: '16px',
  f1: '20px',
  f2: '25px',
  f3: '31.25px',
  f4: '39.063px',
  f5: '48.828px',
  f6: '61.035px',
  f7: '76.294px',
  f8: '95.367px'
}
```
