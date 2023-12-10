function menstrualFlow(firstMonth, secondMonth, lastPeriod) {
  // Calculate the next period, ovulation, and average cycle length

  let averageCycleLength = Math.floor(
    (secondMonth + lastPeriod + firstMonth) / 3
  );
  let nextPeriod = lastPeriod + averageCycleLength;
  let ovulation = nextPeriod - 14;

  // Output the results
  if (!isNaN(nextPeriod) && !isNaN(ovulation) && !isNaN(averageCycleLength)) {
    console.log(`Your next period is on the ${nextPeriod} of next month.`);
    console.log(`Your ovulation date will be on ${ovulation} of next month.`);
    console.log(
      `You have an average of ${averageCycleLength}-day menstrual cycle.`
    );
  } else {
    console.log(
      'Invalid input. Please enter valid numbers for the past three months.'
    );
  }
}

menstrualFlow(26, 26, 24);
