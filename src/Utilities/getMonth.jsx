//get month from excel date
export function getMonth(serial) {
    let utc_days  = Math.floor(serial - 25568);
    let utc_value = utc_days * 86400;                                        
    let date_info = new Date(utc_value * 1000);
    
    let fractional_day = serial - Math.floor(serial) + 0.0000001;
    let total_seconds = Math.floor(86400 * fractional_day);
    let seconds = total_seconds % 60;
    total_seconds -= seconds;
    
    let dateMonth = `${date_info.getMonth()+1}`
    return dateMonth
  }