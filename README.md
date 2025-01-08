# Survey App

A flexible and interactive survey application built using **Next.js**, **Redux**, and **TypeScript**. The app allows users to participate in surveys, answer questions, and view their results after completing the survey.

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Dynamic Survey Flow**: Questions and their order are flexible and managed via a JSON configuration file.
- **User Input Management**: User responses are captured and stored using **Redux**.
- **Next.js Pages**: Uses dynamic routing via `getStaticPaths` or `generateStaticParams` to generate survey pages.
- **Survey Personalization**: Placeholder values like `{Gender}` are replaced with dynamic user input.

## Requirements

- **Node.js** (version 16 or higher)
- **npm** for managing dependencies

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   git clone https://github.com/DanielDzh/test-survey.git
   cd test-survey

2. Install the dependencies:
   npm install

## Development

1. To run the app in development mode:
   npm run dev

The app will be available at http://localhost:3000.

## Production Build

1. To build the app for production:
   npm run build

2. After building, you can run it with:
   npm run start

The app will be available at http://localhost:3000.

## Dynamic Questions

Survey questions may contain dynamic content, such as placeholders like {Gender}, which will be replaced with the answers from previous questions.

## ESLint & Prettier

This project uses ESLint and Prettier for code quality and formatting. You can run the following commands:

1. To check for linting issues:
   npm run lint
