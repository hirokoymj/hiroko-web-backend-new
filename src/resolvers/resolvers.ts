import { categoryResolvers } from './category';
import { subCategoryResolvers } from './subCategory';
import { topicResolvers } from './topic';
import { dateScalarResolver } from './dateScaler';
import { weatherResolvers } from './weather';
import { cityResolvers } from './city';

export const resolvers = [
  dateScalarResolver,
  categoryResolvers,
  subCategoryResolvers,
  topicResolvers,
  weatherResolvers,
  cityResolvers,
];
