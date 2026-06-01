# Movie App - Take Home Assignment

## Overview

This project is a full-stack web application built with:

* React (Frontend)
* Node.js + Express (Backend)

The application displays a list of movies and allows users to view detailed information about a selected movie.

Movie data is loaded from:

server/movies_metadata.json

---

## Features

### Backend APIs

#### Get All Movies

GET /api/movies

Returns a list of movies containing:

* id
* title
* tagline
* vote_average

#### Get Movie By ID

GET /api/movies/:id

Returns complete movie details for the selected movie.

---

## Frontend Pages

### Movie List Page

Displayed on application startup.

Shows:

* Title
* Tagline
* Vote Average (/10)

Features:

* Responsive grid layout
* Movie cards
* Clickable navigation to movie details

### Movie Detail Page

Displays all available movie fields.

Additional formatting:

* release_date is localized using browser locale
* runtime is displayed in minutes

Includes:

* Back to Movies navigation

---

## Installation

### Clone Repository

git clone <repository-url>

cd <project-folder>

### Install Dependencies

npm install

### Start Development Server

npm start

Frontend:

http://localhost:3000

Backend:

http://localhost:3001

---

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/movies     | Get all movies    |
| GET    | /api/movies/:id | Get movie details |

---

## Project Structure

server/
├── server.js
├── movies_metadata.json

src/
├── App.js
├── pages/
│ ├── MovieListPage.js
│ └── MovieDetailPage.js

---

## Responsive Design

The movie list page uses CSS Grid for responsive layouts.

Example:

* Desktop: 4 columns
* Tablet: 2 columns
* Mobile: 1 column

---

## Technologies Used

* React 16
* React Router DOM v5
* Node.js
* Express
* CSS Grid
* Fetch API

---

## Assumptions

* Movie data is loaded from movies_metadata.json.
* Movie IDs are unique.
* Vote average is displayed out of 10.

---

## Future Improvements

* Search movies
* Pagination
* Sorting and filtering
* Loading skeletons
* Error handling
* Unit and integration tests
* TypeScript support

---

## Author

Jignesh K