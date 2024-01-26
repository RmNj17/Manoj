function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hour1').innerText = hours.charAt(0);
    document.getElementById('hour2').innerText = hours.charAt(1);
    document.getElementById('minute1').innerText = minutes.charAt(0);
    document.getElementById('minute2').innerText = minutes.charAt(1);
    document.getElementById('second1').innerText = seconds.charAt(0);
    document.getElementById('second2').innerText = seconds.charAt(1);
  }
  
  // Initial call to display the current time
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  