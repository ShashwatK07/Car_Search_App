# Car Search App

This is a simple React application for searching and displaying car information. Users can search for cars by name, view a paginated list of cars, and sort the results by relevance. It uses React Router for routing and Material-UI for styling components.

## Features

Search for cars by name.
Paginated display of search results.
Sort results by relevance.
Display total car count and current displayed car count.

## Usage

Enter a car name in the search bar and press Enter to search for cars that match the name.
The results are displayed in a paginated format with a maximum of 6 cars per page.
You can navigate between pages using the pagination controls.
You can also sort the results by relevance using the dropdown menu.

## Components

### App.js

The main component that sets up the application's routing and manages state.

### Cards.jsx

Responsible for fetching and displaying the car data based on the current search query and page.

### Pages.jsx

Displays pagination controls and the total number of cars.

### SearchBar.jsx

Provides the search bar and sorting options.

### Data

The car data is loaded from a JSON file (data.json) for demonstration purposes. You can replace this data with your own or fetch it from an API.

## Dependencies

React
React Router
Material-UI
