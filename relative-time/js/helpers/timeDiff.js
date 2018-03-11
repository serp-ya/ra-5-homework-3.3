function getTimeDifference(dateFrom, dateTo = new Date()) {
  const timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());

  return {
    days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(timeDiff / (1000 * 60 * 60)),
    minutes: Math.floor(timeDiff / (1000 * 60))
  };
}