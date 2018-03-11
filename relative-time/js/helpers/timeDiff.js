function getTimeDifference(dateFrom, dateTo = new Date()) {
  const timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());

  return {
    days: Math.ceil(timeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.ceil(timeDiff / (1000 * 60 * 60)),
    minutes: Math.ceil(timeDiff / (1000 * 60)),
    seconds: Math.ceil(timeDiff / 1000)
  };
}