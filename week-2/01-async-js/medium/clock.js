function updateClock() {
    const now = new Date();
  
    // 24-hour format
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;
  
    // 12-hour format with AM/PM
    const hours12 = String((now.getHours() % 12) || 12).padStart(2, '0');
    const period = now.getHours() < 12 ? 'AM' : 'PM';
    const time12 = `${hours12}:${minutes}:${seconds} ${period}`;
  
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
  }
  
  // Initial call to set the clock when the script runs
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  