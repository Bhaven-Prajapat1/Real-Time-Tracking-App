Real-Time Location Tracker App 🌍
This project is a Real-Time Location Tracker application that uses Socket.IO and Leaflet.js to track and display the live location of multiple users on a map. The app continuously updates each user's position on the map and removes their marker when they disconnect.

Features ✨
Real-time tracking of users' location using the Geolocation API.
Users' coordinates (latitude and longitude) are sent to the server and broadcast to all connected clients.
Each user is represented by a marker on the map that updates automatically as the user moves.
When a user disconnects, their marker is removed from the map.
Utilizes OpenStreetMap tiles for the map display.
Location updates with high accuracy and no caching, ensuring that the latest positions are always displayed.
Technologies Used 🛠
Socket.IO: For real-time bi-directional communication between the server and clients.
Leaflet.js: A lightweight JavaScript library for interactive maps.
Geolocation API: To track users' location in the browser.
OpenStreetMap: For map tiles and geographic data.
How It Works 🧭
The app checks if the browser supports geolocation.
It continuously tracks the user's location using the watchPosition method of the Geolocation API.
The location data (latitude, longitude) is emitted to the server using Socket.IO.
The server broadcasts the location data to all connected clients.
The map updates in real-time to show users' locations, creating a marker for each user.
When a user disconnects, their marker is removed from the map.

Setup Instructions 🚀
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/real-time-tracker-app.git
Install dependencies:
express
ejs
socket.io

bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000.

Access from other devices:

Make sure your laptop and phone are on the same Wi-Fi network.
Find your laptop's local IP address (e.g., 192.168.x.x) and access the app on your phone by entering http://192.168.x.x:3000.
Usage 📍
When a user moves, their location is updated on the map in real-time.
When they disconnect, their marker disappears from the map.
Potential Improvements 🚧
Add user authentication for secure tracking.
Display user-specific information on the map (e.g., username or avatar).
Handle geolocation errors with user-friendly messages.
