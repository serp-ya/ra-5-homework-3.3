function prettifyDateFunction(timeDifference) {
  if (timeDifference.days) {
    return `${timeDifference.days} дней`;

  } else if (timeDifference.hours) {
    return `${timeDifference.hours} часов`;

  } else if (timeDifference.minutes) {
    return `${timeDifference.minutes} минут`;
  }

  return null;
}