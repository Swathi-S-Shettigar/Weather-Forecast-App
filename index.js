 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Weather App</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
<link rel="stylesheet" href="style.css"/>

</head>
<body>
  <div class="weather-app">
    <div class="search-box">
      <input type="text" id="cityInput" placeholder="Enter city name" />
      <button onclick="searchCity()">Search</button>
    </div>
    <div class="weather-info" id="currentWeather"></div>
    <div class="details" id="extraDetails"></div>
    <div class="forecast">
      <h3>Hourly Forecast</h3>
      <div class="hourly" id="hourlyForecast"></div>
      <h3>7-Day Forecast</h3>
      <div class="daily" id="dailyForecast"></div>
    </div>
  </div>
<script src="script.js"></script>
</body>
</html> 


