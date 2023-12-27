function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year = currentDate.getFullYear();
  
    // Pad single-digit day and month with leading zero if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Create the formatted date string
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
  
    return formattedDate;
  }
  
  // Call the getCurrentDate function
  const currentDate = getCurrentDate();