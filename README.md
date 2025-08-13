# hirokoymj.com backend API

- **Production API**: https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/
- **Localhost**: http://localhost:4000/
- **Apollo Sandbox**: https://studio.apollographql.com/sandbox/explorer
- **MongoDB Atlas**: https://account.mongodb.com/account/login?nds=true

## Technologies

- Apollo Server 5.0,
- Typescript 5.3,
- Mongoose
- datasource-rest v6.4(Weather API for RESTful)

## Deployment - Heroku

- Production App Name: hiroko-backend-new
- Test App Name: hiroko-backend-test

**Deployment**

```js
heroku login
//Verify the heroku and github remote repositories.
git remote -v
git push heroku master
```

**Switch Heroku app**

```js
git remote rm heroku
heroku git:remote -a <new-app-name>
```

## References:

- https://www.apollographql.com/docs/apollo-server
- https://mongoosejs.com/docs/connections.html#options
