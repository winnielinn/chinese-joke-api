# Chinese Joke API 🎺

Offers Chinese jokes with description & answer by using an API built on the Express.js framework in Node.js and MongoDB database.

This api is deployed on [Heroku](https://www.heroku.com/). 🚀

## API Document

### Joke APIs

BASE_URL = `https://quiet-atoll-68130.herokuapp.com`

#### GET /api/chinesejoke

- Parameters: None

- Request Body：None

- Response:

  - status: 200 OK

```
{
    "description": "先進船的人會說什麼？"
    "answer": "Online，因為仙(先)境(進)傳(船)說 Online。"
}
```

## Contribute

If you want to expand more interesting Chinese jokes, welcome to submit a Pull Request.

This API only offers Chinese jokes now. If you want it to support jokes of various languages, welcome to create an issue to discuss or submit a Pull Request.

## Getting Start

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this project to local

```
$ git clone https://github.com/winnielinn/joke-api.git
```

2. Change directory and install all dependencies

```
$ cd joke-api
$ npm install
```

### Configuration

#### env file

⚠️ Please refer `.env.example` to set environment variables.

```
PORT=
MONGODB_URI=
```

### Usage

#### Seed data

Create bulk seed data through this command.

```
$ npm run seed
```

#### Start server

Run server on localhost.

If successful, `App is listening on port 3000` and `MongoDB connection` will show in the terminal.

```
$ npm run start
```

If you have installed [nodemon](https://www.npmjs.com/package/nodemon), you could use this command.

```
$ npm run dev
```

**Stop server**

Pressing Ctrl + C to stop server running.

## Contributor

- [Winnie Lin](https://github.com/winnielinn)
