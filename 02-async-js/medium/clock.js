setInterval(() => {
  const now = new Date();

  var hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  console.clear();
  console.log(`${hours}:${minutes}:${seconds} :${ampm}`);
}, 1000);
