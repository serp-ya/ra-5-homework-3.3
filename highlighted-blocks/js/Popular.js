const Popular = props => {
  const Component = props.children;
  const { item } = props;

  return <Component {...item}/>;
};