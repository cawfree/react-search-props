function shouldSearchProps(
  ref = {},
  inSearchOf = 'onPress',
) {
  const { props } = ref;
  const { children } = props || {};
  return [
    (props || {})[inSearchOf],
    ...React.Children.toArray(children || [])
      .map(e => shouldSearchProps(e))
      .reduce(
        (v, a) => ([
          ...v,
          ...a,
        ]),
        [],
      ),
  ]
    .filter(e => !!e);
};

export default shouldSearchProps;
