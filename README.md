# hirokoymj.com backend API

- **Production API**: https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/
- **Localhost**: http://localhost:4000/
- **Apollo Sandbox**: https://studio.apollographql.com/sandbox/explorer
- **MongoDB Atlas**: https://account.mongodb.com/account/login?nds=true

## Technologies

- Apollo Server v3(GraphQL), Typescript, MongoDB/Mongoose, RESTful API(Open Weather Map)

## Deployment - Heroku

- Heroku app name: hiroko-web-backend-new

```js
heroku login
//Verify the heroku and github remote repositories.
git remote -v
git push heroku master
```

## References:

**Apollo Server**

- [Apollo Server v3](https://www.apollographql.com/docs/apollo-server/v3)
- [Apollo Server 3: Custom scalars](https://www.apollographql.com/docs/apollo-server/v3/schema/custom-scalars)
- [Apollo Server 3: Data sources](https://www.apollographql.com/docs/apollo-server/v3/data/data-sources)
- [Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/v3/migration)
- [apollo-datasource-rest](https://www.npmjs.com/package/apollo-datasource-rest)

**Mongoose**

- [mongoose](https://mongoosejs.com/docs/connections.html#options)
- https://mongoosejs.com/docs/async-await.html
