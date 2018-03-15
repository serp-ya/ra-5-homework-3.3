function getTimeDifference(dateFromData, dateTo = new Date()) {
  const dateFrom = dateFromData instanceof Date ? dateFromData : new Date(dateFromData);
  const timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());

  return {
    days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(timeDiff / (1000 * 60 * 60)),
    minutes: Math.floor(timeDiff / (1000 * 60))
  };
}