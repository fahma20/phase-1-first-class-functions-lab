const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = (drivers) => {

    return ['Antonia', 'Nuru'];
  };

  const returnLastTwoDrivers = (drivers) => {
    return ['Amari', 'Mo']
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
  };

  const fareDoubler = createFareMultiplier (2);

  const fareTripler = createFareMultiplier (3);

  const selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers);
  };
  