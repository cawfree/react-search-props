# @cawfree/react-search-props
Recurse through the React DOM in search of a named prop. Compatible with [React](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/).

## 🤔 About
This library accumulates all of the values of a specific named prop inherited by all children of a specified node. There are _plenty_ of caveats to its use, and you should likely never need to use this at all. Normally, ascertaining the values of particular props is achieved using either a well structured application state using a framework such as [redux](https://redux.js.org/introduction/getting-started), or via a child-to-parent callback interface.

You will only ever need to use this if you're doing something **intentionally hacky**.

This library exports a single function:

```javascript
searchPropsByName(
  ref, // PropTypes.element.isRequired,
  inSearchOf, // PropTypes.string (defaults to 'onPress'),
);
```

And returns an array of the accumulated values. That's it.

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

Below, we show how to recurse through rendered JSX in search of any props named `onPress`. Starting at the `root` node, we programmatically resolve the `onPress` function that is supplied to the child `<View/>`. This is returned as an array in the form `[(f)]`.

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

<p align="center">
  <a href="https://www.buymeacoffee.com/cawfree">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy @cawfree a coffee" width="232" height="50" />
  </a>
</p>
