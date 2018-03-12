const sortListByDate = (type) => {
  return (itemA, itemB) => {
    if (type === 'years') {
      return itemA.year > itemB.year ? 1 : -1;

    } else if (type === 'months') {
      return itemA.monthIndex > itemB.monthIndex ? 1 : -1;

    } else {
      return itemA
    }
  };
};