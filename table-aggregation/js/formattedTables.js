const formattedTables = (Component, monthsDictionary) => {
  return class FormattedTable extends React.Component {

    sortListByDate(type) {
      return (itemA, itemB) => {
        if (type === 'years') {
          return itemA.year > itemB.year ? 1 : -1;

        } else if (type === 'months') {
          return itemA.monthIndex > itemB.monthIndex ? 1 : -1;

        }

        return itemA
      };
    }

    convertListByDate(list, type, monthsDictionary) {
      return list.map(item => {
        const splittedDate = item.date.split('-');
        const year = splittedDate[0];
        const monthIndex = Number(splittedDate[1]);
        const month = monthsDictionary[monthIndex];
        const {amount} = item;

        if (type === 'years') {
          return {year, amount};

        } else if (type === 'months') {
          return {month, monthIndex, amount};
        }

        return {...item};
      })
    }

    render() {
      const { list, type } = this.props;
      const carriedSortFunction = this.sortListByDate(type);
      const convertedList = this.convertListByDate(list, type, monthsDictionary).sort(carriedSortFunction);

      return <Component {...this.props} list = {convertedList} />
    }
  }
};