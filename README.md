# City Computer

This project is a website for "City Computer", a computer repair service. It is built with React and Vite and styled with TailwindCSS and DaisyUI.

## Current State

This project is in an inconsistent state. It appears to be a combination of two different business ideas:

1.  **City Computer:** A computer repair service (featured on the home page).
2.  **Government Document Service:** A service for handling applications for government documents (featured on the services page).

The "City Computer" concept is more developed, and the intention is to proceed with this concept and remove the other.

There are also some known issues:

*   **Duplicate Footers:** There is a general footer and a footer specific to the home page.
*   **Broken Links:** Some links, like the "/contact" link, are broken.
*   **Non-functional UI:** Some buttons, like the "Get Started" button in the header, are not hooked up to any functionality.
*   **Unused Firebase Dependency:** The project includes Firebase as a dependency, but there is no Firebase integration in the code.

## Features

*   Landing page for the computer repair service.
*   Responsive design for mobile and desktop.
*   Sections for services, about us, and pricing.

## Project Structure

The project is a standard Vite-React application.

*   `src/components`: Contains all the React components.
*   `src/components/Layouts/Main.jsx`: The main layout for the application, including the header and footer.
*   `src/main.jsx`: The entry point of the application, where the routing is defined.
*   `public/`: Contains public assets.

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn)

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd city-computer-main
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the application

To run the application in development mode:

```sh
npm run dev
```

This will start the development server at `http://localhost:5173`.

### Building the application

To build the application for production:

```sh
npm run build
```

This will create a `dist` folder with the production-ready files.