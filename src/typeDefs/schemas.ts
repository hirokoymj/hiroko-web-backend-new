import { rootTypeDefs } from './rootQuery';
import { categoryTypeDefs } from './category';
import { subCategoryTypeDefs } from './subCategory';
import { topicTypeDefs } from './topic';
import { weatherTypeDefs } from './weather';
import { cityTypeDefs } from './city';

export const typeDefs = [
  rootTypeDefs,
  categoryTypeDefs,
  subCategoryTypeDefs,
  topicTypeDefs,
  weatherTypeDefs,
  cityTypeDefs,
];
