const PopularitySwitcher = props => {
  const { item } = props;

  if (item.views < 100) {
    return <New {...props} />;

  } else if (item.views > 1000) {
    return <Popular {...props} />;
  }

  return null;
};