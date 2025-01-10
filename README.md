## Table of Contents

- [Project Overview](#project-overview)
  - [Authentication and Dashboard Access](#authentication-and-dashboard-access)
  - [Token Expiration and Redirection](#token-expiration-and-redirection)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [CSRF Vulnerability](#xss-vulnerability)
  - [Exploiting the Vulnerability](#exploiting-the-vulnerability)
  - [Correcting the Vulnerability](#correcting-the-vulnerability)

## Project Overview

eBank is a prototype web application that provides online banking services. This project is divided into two main parts: the backend and the frontend. The backend is built with Node.js and Express, while the frontend is built with Angular.

### Authentication and Dashboard Access

To access the dashboard, users must log in. Upon successful login, a JSON Web Token (JWT) is provided with a 30-second expiration. The token is used to authenticate and authorize access to protected routes, including the dashboard. Log in with user `user` and password: `password`.

### Token Expiration and Redirection

The JWT has a 30-second expiration. After the token expires, the user is automatically redirected to the login page. This ensures that users must re-authenticate to maintain access to protected resources.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- Angular CLI (v12 or later)

## Installation

1. Clone the repository project
2. Got to project folder to find package.json file with command `cd project`
3. Install project frontend dependencies with command `npm install`
4. Build project frontend code with command `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.
5. Got to project backend folder to find package.json file with command `cd project/backend`
6. Install project backend dependencies with command `npm install`

## Running the Project

1. Run frontend app and backend app in two separates terminals: with command `npm start` in each package.json location.
2. Open web browser to `http://localhost:4000/`. The application will automatically reload if you change any of the source files.

## CSRF Vulnerability

This project deliberately contains a Cross-Site Request Forgery (XSS) vulnerability. The vulnerability is introduced in the login form to demonstrate how an attacker can exploit it and how it can be corrected.

### Exploiting the Vulnerability

### Correcting the Vulnerability
