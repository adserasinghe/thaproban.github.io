<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking</title>
    <link rel="icon" type="image/x-icon" href="./images/logo.png">
    <link rel="stylesheet" href="./css/booking.css">
</head>
<body>
    <div class="booking-container">
        <div class="booking-header">
          <h1>Book Your Perfect Journey</h1>
          <p>Find and book your Place</p>
          <div class="wave"></div>
        </div>
        
        <form class="booking-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Shamal Asiri" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="yourmail@mail.com" required>
          </div>
          
          <div class="form-group">
            <label for="Booking-date">Booking Date</label>
            <input type="date" id="check-in" required>
          </div>

          <div class="form-group">
            <label for="room-type">Destination</label>
            <select id="room-type" required>
              <option value="">Select the Location</option>
              <option value="Galle">Galle</option>
              <option value="Kandy">Kandy</option>
              <option value="Nuwaraeliya">Nuwaraeliya</option>
              <option value="Matara">Matara</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Colombo">Colombo</option>
              <option value="Kataragama">Kataragama</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="guests">Number of Guests</label>
            <input type="number" placeholder="Number of Guests" id="quantity" name="quantity" min="1" max="5">
            </select>
          </div>
          
          <div class="form-group">
            <label for="room-type">Room Type</label>
            <select id="room-type" required>
              <option value="">Select room type</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
              <option value="family">Family Room</option>
            </select>
          </div>
          
          <button type="submit" class="btn-submit">Book Now</button>
          <a href="./index.php" class="return-menu">Cancel</a>
        </form>
      </div>
</body>
</html>