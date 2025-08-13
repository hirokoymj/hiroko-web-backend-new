//import { Query } from './rootQuery.js';
import { rootTypeDefs } from './rootQuery.js';
import { categoryTypeDefs } from './category.js';
import { subCategoryTypeDefs } from './subCategory.js';
import { topicTypeDefs } from './topic.js';
import { weatherTypeDefs } from './weather.js';
import { cityTypeDefs } from './city.js';

export const typeDefs = [
  rootTypeDefs,
  categoryTypeDefs,
  subCategoryTypeDefs,
  topicTypeDefs,
  weatherTypeDefs,
  cityTypeDefs,
];
