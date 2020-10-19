# Lyrical-GraphQL

Starter project from a GraphQL course on Udemy.com

# Mockup Architecture

![image](https://user-images.githubusercontent.com/16644017/96396986-77db6180-1203-11eb-9109-d571f3132c1c.png)

# Initial Packages

```js
"dependencies": {
  "nodemon": "*",
  "apollo-client": "^0.8.1",
  "axios": "^0.15.3",
  "babel-core": "^6.22.1",
  "babel-loader": "^6.2.10",
  "babel-preset-env": "^1.1.8",
  "babel-preset-react": "^6.22.0",
  "body-parser": "^1.16.0",
  "connect-mongo": "^1.3.2",
  "css-loader": "^0.26.1",
  "express": "^4.14.0",
  "express-graphql": "^0.6.1",
  "express-session": "^1.15.0",
  "graphql": "^0.8.2",
  "html-webpack-plugin": "^2.26.0",
  "lodash": "^4.17.4",
  "mongoose": "^4.7.8",
  "passport": "^0.3.2",
  "passport-local": "^1.0.0",
  "react": "15.4.2",
  "react-apollo": "^0.9.0",
  "react-dom": "15.4.2",
  "react-router": "^3.0.2",
  "style-loader": "^0.13.1",
  "webpack": "^2.2.0",
  "webpack-dev-middleware": "^1.9.0"
}
```

# Apollo + React

![image](https://user-images.githubusercontent.com/16644017/96401395-21bfeb80-120e-11eb-97c5-ca1674292080.png)

- **Apollo Store** communicates directly with the GraphQL server. Client side repository of all the data that is coming from the GraphQL Server. It's existence is abstracted from React's standalone SPA (Single Page Application).

# Checklist to work with GraphQL with React

![image](https://user-images.githubusercontent.com/16644017/96402529-220db600-1211-11eb-87de-19dad7247e25.png)

**1. Identify required by the component.**  
e.g.: We only want the `title` of each songs in the SongList component.
Thus we don't need to fetch a bunch of details about the song that we don't need.

# Running `Query` and `Mutation`

Make use of the library `graphql-tag`
