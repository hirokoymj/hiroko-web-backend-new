# hirokoymj.com backend API

- **Production API**: https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/
- **Localhost**: http://localhost:4000/
- **Apollo Sandbox**: https://studio.apollographql.com/sandbox/explorer
- **MongoDB Atlas**: https://account.mongodb.com/account/login?nds=true

## Technologies

- Apollo Server 5.0
- Typescript 5.3
- Mongoose
- datasource-rest v6.4 (Weather API for RESTful)

## Deploy to Heroku

- **Production app name** : hiroko-backend-new
- **Test app name** : hiroko-backend-test

**Deploy Heroku**

```js
heroku login
git remote -v
git push heroku master
```

**Remove Heroku remote URL**

```js
git remote rm heroku
```

**Set a new Heroku URL**

```js
heroku git:remote -a  ############
```

## References:

- [Apollo Server official site](https://www.apollographql.com/docs/apollo-server)
- [Mongoose API docs](https://mongoosejs.com/docs/connections.html#options)
- [Apollo Odyssey Tutorial - GraphQL with TypeScript and Apollo Server](https://www.apollographql.com/tutorials/intro-typescript)
