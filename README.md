# @cawfree/react-search-props
Recurse through the React DOM in search of a named prop. Compatible with [React](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/).

## 🤔 About
This library accumulates all of the values of a specific named prop inherited by all children of a specified node. There are _plenty_ of caveats to its use, and you should likely _never_ need to use this at all. Normally, ascertaining the values of particular props is achieved using either a well structured application _state_ using a framework such as [redux](https://redux.js.org/introduction/getting-started), or via a _callback_ interface. You will only ever need to use this if you're doing something intentionally _hacky_.

This library exports a single function:

```javascript
searchPropsByName(
  ref, // PropTypes.element.isRequired,
  inSearchOf, // PropTypes.string (defaults to 'onPress'),
); // 1d array of implemented values
```

## 🚀 Getting Started

Using [`npm`]():

```sh
npm install --save @cawfree/react-search-props
```

Using [`yarn`]():

```sh
yarn add @cawfree/react-search-props
```

## ✍️  Example

```javascript
import React from 'react';
import { View } from 'react-native';

import searchPropsByName from '@cawfree/react-search-props';

class App extends React.Component {
  componentDidMount() {
    const { root } = this.refs;
    const [ onPress ] = searchPropsByName(
      root,
      'onPress',
    );
    console.log(onPress()); // 'hi'
  }
  render() {
    <View
      ref="root"
    >
      <View
        onPress={() => 'hi'}
      />
    </View>
  }
}

```

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
