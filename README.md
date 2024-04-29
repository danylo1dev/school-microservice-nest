# Graphql feed app

This project is the implementation of the server part with a microservice architecture for an online school. I improved my understanding of this architecture and gained practical skills. Used nx to create a monorepository and rabbitMQ to interact between microservices.

# Installing

## Prerequisites

Before you begin, ensure you have Node.js version 18.16.0 or later installed on your machine.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/danylo1dev/school-microservice-nest
   ```

2. Install all dependencies:

   ```bash
   npm i
   ```

## Environment Configuration

The repository includes an `example.*.env` file. You should create in `envs` directory the following environment files:

- `account.env`: env file
- `api.env`: env file

You can use the `example.*.env` files as a template.

## Running the Application

To run the application, use the following commands:

- **Development**:

  ```bash
  npm run start
  ```
