# Flight Search App

<h1>Demo Video of the app.</h1>

https://github.com/ashish-sng/flight-booking-fare/assets/68745052/e19ed16b-726e-4ade-a401-e3ef4abe673e

<h1>Also a few example picutres are attached below as the data is genereated because no free apis were available that were free and provide data on fares so it might be difficult to find flights at times in this generated data.<h1>

![screencapture-ashishsng-flight-fare-app-netlify-app-flights-2023-06-06-22_19_04](https://github.com/ashish-sng/flight-booking-fare/assets/68745052/97273fe0-0441-4534-a7d6-312947a9d132)

![screencapture-localhost-3000-flights-2023-06-06-22_02_50](https://github.com/ashish-sng/flight-booking-fare/assets/68745052/47e5d8d1-f871-44b5-ac5a-00027c42c30c)

![screencapture-localhost-3000-flights-2023-06-06-22_03_57](https://github.com/ashish-sng/flight-booking-fare/assets/68745052/a5199d3d-bc44-4183-ad92-be64024dab18)


![screencapture-localhost-3000-flights-2023-06-06-22_04_49](https://github.com/ashish-sng/flight-booking-fare/assets/68745052/e79a54c7-6555-4eef-aaad-5805ee054561)


The Flight Search App is a web application that allows users to search for available flights based on their source and destination cities. It provides users with a convenient way to find flights and obtain relevant information such as departure time, flight name, and duration.

## Features

- **Flight Search:** Users can enter their source and destination cities to search for available flights.
- **Date Filtering:** Users can filter flights based on the desired departure date.
- **Flight Details:** The app displays detailed information about each flight, including the flight name, departure time, and duration.
- **Dynamic Pricing:** The app calculates the total fare based on the selected flight and the number of passengers.
- **User Authentication:** Users can register and log in to the app to access the flight search functionality.
- **User-Friendly Interface:** The app provides an intuitive and responsive user interface for a seamless flight search experience.

## Technologies Used

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Communication:** Axios
- **Routing:** React Router
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

To get started with the Flight Search App, follow these steps:

1. Clone the repository: `git clone https://github.com/ashish-sng/flight-booking-fare.git`
2. Install the dependencies: `npm install`
3. Set up the backend:
   - Create a MongoDB database and update the connection details in the backend configuration.
   - Start the backend server: `npm start`
4. Set up the frontend:
   - Update the backend API URL in the frontend configuration.
   - Start the frontend development server: `npm start`
5. Open your browser and navigate to `http://localhost:3000` to access the Flight Search App.

## Project Structure

The project follows a client-server architecture, with the frontend and backend components separated into their respective directories. Here's a brief overview of the project structure:

- `/backend`: Contains the server-side code written in Node.js and Express.js.
- `/frontend`: Contains the client-side code written in React.js.
- `/components`: Contains reusable React components used in the frontend.
- `/routes`: Contains the API routes and endpoints for the backend.
- `/models`: Contains the data models and schemas used in the backend.

## Contributions

Contributions to the Flight Search App are welcome! If you encounter any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
