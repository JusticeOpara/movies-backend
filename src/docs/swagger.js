// import swaggerJSDoc from "swagger-jsdoc";

// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Movie API",
//       version: "1.0.0",
//       description: "Movie backend API documentation",
//     },
//     servers: [
//       {
//         url: "http://localhost:3001",
//       },
//     ],
//   },

//   // 👇 Swagger will read comments from your route files
//   apis: ["./src/routes/*.js"],
// };

// const swaggerSpec = swaggerJSDoc(swaggerOptions);

// export default swaggerSpec;

import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie API",
      version: "1.0.0",
      description: "Movie backend API documentation",
    },
    servers: [{ url: "http://localhost:3001" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        RegisterInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
          },
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
        Movie: {
          type: "object",
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            overview: { type: "string" },
            releaseYear: { type: "number" },
          },
        },
        MovieInput: {
          type: "object",
          required: ["title", "overview", "releaseYear"],
          properties: {
            title: { type: "string" },
            overview: { type: "string" },
            releaseYear: { type: "number" },
          },
        },

        WatchlistInput: {
          type: "object",
          required: ["movieId"],
          properties: {
            movieId: {
              type: "string",
              description: "ID of the movie to add to watchlist",
            },
          },
        },

        WatchlistUpdateInput: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "watched",
            },
            rating: {
              type: "number",
              minimum: 1,
              maximum: 5,
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
