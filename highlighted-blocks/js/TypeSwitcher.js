const TypeSwitcher = ({ item }) => {
  switch (item.type) {
    case 'video':
      return (
        <PopularitySwitcher item = {item}>
          {Video}
        </PopularitySwitcher>
      );

    case 'article':
      return (
        <PopularitySwitcher item = {item}>
          {Article}
        </PopularitySwitcher>
      );

    default:
      return null;
  }
};