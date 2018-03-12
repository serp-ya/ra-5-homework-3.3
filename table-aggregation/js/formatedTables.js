'use strict';

const formatedTables = Component => props => {
  const { list, type } = props;
  const carryedSortFunction = sortListByDate(type);
  const convertedList = convertListByDate(list, type).sort(carryedSortFunction);

  return <Component list = {convertedList} />
};