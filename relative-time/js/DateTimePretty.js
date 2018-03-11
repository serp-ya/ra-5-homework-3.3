'use strict';

const withDateTimePretty = (Component) => ({ date }) => {
  const timeDiff = getTimeDifference(new Date(date));
  console.log('date', date);
  console.log('timeDiff', timeDiff);
  let resultDate;

  if (timeDiff.days) {
    resultDate = `${timeDiff.days} дней`;
  } else if (timeDiff.hours) {
    resultDate = `${timeDiff.hours} часов`;
  } else {
    resultDate = `${timeDiff.minutes} минут`;
  }

  return <Component date = {`${resultDate} назад`} />;
};

const DateTimePretty = withDateTimePretty(DateTime);