function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }
  
  const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  var day = d.getDay(); 
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
  document.getElementById("dates").innerHTML = dateStr;
  document.getElementById("copyright").innerHTML = year;
  
  
  const url = "https://kemblesque.github.io/final/data/scoots.json";
  fetch(url)
    .then((response) => response.json())
      .then((data) => {
          data.rentals.forEach((rental, index) => {
              document.getElementById('rhd' + (index + 1)).innerHTML = rental.half1;
              document.getElementById('rfd' + (index + 1)).innerHTML = rental.full1;
              document.getElementById('whd' + (index + 1)).innerHTML = rental.half2;
              document.getElementById('wfd' + (index + 1)).innerHTML = rental.full2;
          });
  });