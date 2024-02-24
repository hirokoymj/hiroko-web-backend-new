# GraphQL API for hirokoymj.com

- Production URL: https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/
- Database: [MongoDB Atlas](https://account.mongodb.com/account/login?nds=true):

## Technologies

- Node.js (Typescript)
- Apollo Server version 3
- Mongoose version 8.2.0
- Open Weather Map API

## Deployment platform

- Heroku
- Region: United States
- Plan: Basic (Max of $7.00/month)
- App Name: hirokoymj-backend-new
- Features: Heroku CLI, Auto-deploy from Github repository

## OpenWeather Map API

- Plan: Free (60 calls/minute, 1,000,000 calls/month)
- Available APIs:
  - [Current Weather](https://openweathermap.org/current)
  - [3-hour Forecast 5 days](https://openweathermap.org/forecast5)

## Testing my GraphQL API

- https://studio.apollographql.com/sandbox/explorer

**Test Query 1**

```
query GetCat {
  categoryAll {
    id
  }
}
```

**Test Query 2**

```
query GetCat {
  categories {
    categoryFeed {
      abbr
    }
  }
}
```

**Test Query 3**

```
query CurrentWeather($lat: Float!, $lon: Float!) {
  currentWeather(lat: $lat, lon: $lon) {
    cityId
    cityInfo {
      country
      name
      lat
      lon
      country
    }
    weather {
      condition
      description
      dt
      feelsLike
      humidity
      icon
      temperature {
        day
        max
        min
      }
    }
  }
}
## Query Variable
{
  "lat": 35.6895,
  "lon": 139.6917
}
```

**Test Query 4**

```
query DailyForecast($lat: Float!, $lon: Float!) {
  dailyForecast(lat: $lat, lon: $lon) {
    cityId
  }
}
## Query Variable
{
  "lat": 35.6895,
  "lon": 139.6917
}
```

## References

**graphql-tools**

- [graphql-tools](https://the-guild.dev/graphql/tools/docs/introduction)
- [Modularizing your GraphQL schema code](https://www.apollographql.com/blog/modularizing-your-graphql-schema-code)

**Mongoose**

- [mongoose version8.0.4](https://mongoosejs.com/docs/connections.html#options)
- https://mongoosejs.com/docs/async-await.html

<hr />

**Heroku Deployment**

- [Heroku: Deploying with Git](https://devcenter.heroku.com/articles/git#create-a-heroku-remote)
- [heroku sh: 1: tsc: not found](https://stackoverflow.com/questions/70707931/heroku-sh-1-tsc-not-found)

**Miscellaneous**

- [Receive DEP0170 when connecting MongoDB Atlas with Node.js 20.3.1](https://stackoverflow.com/questions/76594556/receive-dep0170-when-connecting-mongodb-atlas-with-node-js-20-3-1)
- [Why is 'type: module' in package.json file?](https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file)

- https://openweathermap.org/api

## History

| Date       | Description                          |
| ---------- | ------------------------------------ |
| 01.14.2024 | Migrated Apollo Server v2 to v3.     |
| 01.14.2024 | Added _type:module_ in package.json. |
| 01.18.2024 | Fixed datasource bug. Backed to use  |

- 01.18.2024 - Fixed the bug of datasources property for a REST API. Since makeExecutableSchema() doesn't work datasources property, I stopped using it and then create a schema object and then pass to ApolloServer as a parameter.
- 01.18.2024 - Installed Typescript and @types/node. Converted all file extension from .js to .ts.
- 02.10.2024 - Changed a sort key with category in `subCategoryAll` resolver.
