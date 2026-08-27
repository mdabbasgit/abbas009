# Campus Transit

A simulated campus transport application built with React.js.

## Core Features

- Route list
- Route filtering and search
- Route details
- Bus stop details
- ETA display
- Bus/service status
- Responsive navigation
- Reusable Navbar, TaskCard-style route cards, Button, Card, Form and Table components
- React Router navigation
- useState for search, filters, selections and form fields
- useEffect for ETA refresh and localStorage
- map(), filter(), find() and reduce()
- Form validation
- Empty/error states
- localStorage for favorite routes and feedback

## Project Structure

```text
first_project
└── src
    ├── pages
    │   ├── Home
    │   │   ├── Home.js
    │   │   └── Home.css
    │   ├── Routes
    │   │   ├── Routes.js
    │   │   └── Routes.css
    │   ├── RouteDetails
    │   │   ├── RouteDetails.js
    │   │   └── RouteDetails.css
    │   ├── Stops
    │   │   ├── Stops.js
    │   │   └── Stops.css
    │   └── BusStatus
    │       ├── BusStatus.js
    │       └── BusStatus.css
    ├── components
    │   ├── Navbar.js
    │   ├── Navbar.css
    │   ├── TaskCard.js
    │   ├── TaskCard.css
    │   ├── Button.js
    │   ├── Button.css
    │   ├── Card.js
    │   ├── Card.css
    │   ├── Form.js
    │   ├── Form.css
    │   ├── Table.js
    │   └── Table.css
    ├── data
    │   └── tasks.js
    ├── App.js
    ├── App.css
    ├── index.js
    └── index.css
```

## Run

```bash
npm install
npm start
```

The app opens at `http://localhost:3000`.

## GitHub

```bash
git init
git add .
git commit -m "Create Campus Transit React application"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Demonstration Points

1. Explain the campus transport problem.
2. Demonstrate Home and the main user flow.
3. Demonstrate route search and filtering.
4. Open Route Details and show ETA information.
5. Open Stops and select a stop.
6. Open Bus Status and filter service status.
7. Demonstrate favorite route persistence using localStorage.
8. Demonstrate feedback form validation.
9. Explain props, state, events, array methods and React Router.
