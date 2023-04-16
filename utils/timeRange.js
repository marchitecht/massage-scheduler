const generateHoursInterval = (
    startHourInMinute,
    endHourInMinute,
    interval,
  ) => {
    const times = [];
  
    for (let i = 0; startHourInMinute < 24 * 60; i++) {
      if (startHourInMinute > endHourInMinute) break;
  
      var hh = Math.floor(startHourInMinute / 60); // getting hours of day in 0-24 format
  
      var mm = startHourInMinute % 60; // getting minutes of the hour in 0-55 format
  
      times[i] = ('0' + (hh % 24)).slice(-2) + ':' + ('0' + mm).slice(-2);
  
      startHourInMinute = startHourInMinute + interval;
    }
  
    return times;
  };
  
  const interval = 30; //minutes interval
  
  const startDate = 60 * 10; // start time in minutes
  
  const endDate = 60 * 20; // end time in minutes
  
 export const range = generateHoursInterval(startDate, endDate, interval);
  
