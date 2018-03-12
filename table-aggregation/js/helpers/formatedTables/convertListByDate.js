const convertListByDate = (list, type) => {
  return list.map(item => {
    const splitedDate = item.date.split('-');
    const year = splitedDate[0];
    const monthIndex = Number(splitedDate[1]);
    const month = MONTHS_DICTIONARY[monthIndex];
    const {amount} = item;

    if (type === 'years') {
      return {year, amount};

    } else if (type === 'months') {
      return {month, monthIndex, amount};

    } else {
      return {...item};
    }
  })
};