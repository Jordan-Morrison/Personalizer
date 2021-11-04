# personalizer

> This proof of concept demonstrates how anonymous data collected through normal web analytics can be used to personalize the user experience. Depending on which province a user arrives from, the default language setting in their web browser, and the time of year in which they arrive, they will be served a list of links to benefits that are most commonly visited by people like them. The model to deliver these personalized results is trained on two years&#x27; worth of previous visitors to these benefit pages.

[![NPM](https://img.shields.io/npm/v/personalizer.svg)](https://www.npmjs.com/package/personalizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save personalizer
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'personalizer'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [Jordan-Morrison](https://github.com/Jordan-Morrison)
