import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  abbr: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coord>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CityInfo = {
  __typename?: 'CityInfo';
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  lon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Coord = {
  __typename?: 'Coord';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

export type CurrentWeather = {
  __typename?: 'CurrentWeather';
  cityInfo?: Maybe<CityInfo>;
  id: Scalars['Int']['output'];
  weather?: Maybe<Weather>;
};

export type DailyForecast = {
  __typename?: 'DailyForecast';
  cityInfo?: Maybe<CityInfo>;
  forecastList?: Maybe<Array<Maybe<Forecast>>>;
  id: Scalars['Int']['output'];
};

export type Forecast = {
  __typename?: 'Forecast';
  condition?: Maybe<Scalars['String']['output']>;
  dt: Scalars['Int']['output'];
  humidity?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  rain?: Maybe<Scalars['Float']['output']>;
  sunrise?: Maybe<Scalars['Int']['output']>;
  sunset?: Maybe<Scalars['Int']['output']>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createSubCategory?: Maybe<SubCategory>;
  createTopic?: Maybe<Topic>;
  deleteCategory?: Maybe<Category>;
  deleteSubCategory?: Maybe<SubCategory>;
  deleteTopic?: Maybe<Topic>;
  updateCategory?: Maybe<Category>;
  updateSubCategory?: Maybe<SubCategory>;
  updateTopic?: Maybe<Topic>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateSubCategoryArgs = {
  input?: InputMaybe<CreateSubCategoryInput>;
};


export type MutationCreateTopicArgs = {
  input?: InputMaybe<CreateTopicInput>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationUpdateSubCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSubCategoryInput;
};


export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTopicInput;
};

export type PaginatedCategories = {
  __typename?: 'PaginatedCategories';
  categories: Array<Category>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedSubCategories = {
  __typename?: 'PaginatedSubCategories';
  subCategories: Array<SubCategory>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedTopics = {
  __typename?: 'PaginatedTopics';
  topics: Array<Topic>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Category>>;
  categoryAll?: Maybe<PaginatedCategories>;
  categoryById: Category;
  cities?: Maybe<Array<Maybe<City>>>;
  currentWeatherByCity?: Maybe<CurrentWeather>;
  dailyForecast?: Maybe<DailyForecast>;
  subCategories?: Maybe<Array<SubCategory>>;
  subCategoryAll?: Maybe<PaginatedSubCategories>;
  subCategoryByCategory?: Maybe<Array<SubCategory>>;
  subCategoryById?: Maybe<SubCategory>;
  topicAll?: Maybe<PaginatedTopics>;
  topicByCategory?: Maybe<Array<Topic>>;
  topicByCategoryAbbr?: Maybe<Array<Topic>>;
  topicById: Topic;
  topics?: Maybe<Array<Topic>>;
};


export type QueryCategoryAllArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCitiesArgs = {
  city: Scalars['String']['input'];
};


export type QueryCurrentWeatherByCityArgs = {
  city: Scalars['String']['input'];
  unit?: InputMaybe<Units>;
};


export type QueryDailyForecastArgs = {
  city: Scalars['String']['input'];
  unit?: InputMaybe<Units>;
};


export type QuerySubCategoryAllArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubCategoryByCategoryArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTopicAllArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTopicByCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryTopicByCategoryAbbrArgs = {
  abbr: Scalars['String']['input'];
};


export type QueryTopicByIdArgs = {
  id: Scalars['ID']['input'];
};

export type SubCategory = {
  __typename?: 'SubCategory';
  category?: Maybe<Category>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type Temperature = {
  __typename?: 'Temperature';
  day?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type Topic = {
  __typename?: 'Topic';
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  subCategory?: Maybe<SubCategory>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url: Scalars['String']['output'];
};

export enum Units {
  Imperial = 'imperial',
  Metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  condition?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dt: Scalars['Int']['output'];
  feelsLike?: Maybe<Scalars['String']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Temperature>;
};

export type CreateCategoryInput = {
  abbr: Scalars['String']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSubCategoryInput = {
  category: Scalars['ID']['input'];
  categoryOrder?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTopicInput = {
  category: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  subCategory: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  abbr?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubCategoryInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTopicInput = {
  category: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  subCategory: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  City: ResolverTypeWrapper<City>;
  CityInfo: ResolverTypeWrapper<CityInfo>;
  Coord: ResolverTypeWrapper<Coord>;
  CurrentWeather: ResolverTypeWrapper<CurrentWeather>;
  DailyForecast: ResolverTypeWrapper<DailyForecast>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Forecast: ResolverTypeWrapper<Forecast>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginatedCategories: ResolverTypeWrapper<PaginatedCategories>;
  PaginatedSubCategories: ResolverTypeWrapper<PaginatedSubCategories>;
  PaginatedTopics: ResolverTypeWrapper<PaginatedTopics>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubCategory: ResolverTypeWrapper<SubCategory>;
  Temperature: ResolverTypeWrapper<Temperature>;
  Topic: ResolverTypeWrapper<Topic>;
  Units: Units;
  Weather: ResolverTypeWrapper<Weather>;
  createCategoryInput: CreateCategoryInput;
  createSubCategoryInput: CreateSubCategoryInput;
  createTopicInput: CreateTopicInput;
  updateCategoryInput: UpdateCategoryInput;
  updateSubCategoryInput: UpdateSubCategoryInput;
  updateTopicInput: UpdateTopicInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  City: City;
  CityInfo: CityInfo;
  Coord: Coord;
  CurrentWeather: CurrentWeather;
  DailyForecast: DailyForecast;
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  Forecast: Forecast;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaginatedCategories: PaginatedCategories;
  PaginatedSubCategories: PaginatedSubCategories;
  PaginatedTopics: PaginatedTopics;
  Query: {};
  String: Scalars['String']['output'];
  SubCategory: SubCategory;
  Temperature: Temperature;
  Topic: Topic;
  Weather: Weather;
  createCategoryInput: CreateCategoryInput;
  createSubCategoryInput: CreateSubCategoryInput;
  createTopicInput: CreateTopicInput;
  updateCategoryInput: UpdateCategoryInput;
  updateSubCategoryInput: UpdateSubCategoryInput;
  updateTopicInput: UpdateTopicInput;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  abbr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  coord?: Resolver<Maybe<ResolversTypes['Coord']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityInfo'] = ResolversParentTypes['CityInfo']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coord'] = ResolversParentTypes['Coord']> = {
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentWeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentWeather'] = ResolversParentTypes['CurrentWeather']> = {
  cityInfo?: Resolver<Maybe<ResolversTypes['CityInfo']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['Weather']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyForecastResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyForecast'] = ResolversParentTypes['DailyForecast']> = {
  cityInfo?: Resolver<Maybe<ResolversTypes['CityInfo']>, ParentType, ContextType>;
  forecastList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Forecast']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ForecastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Forecast'] = ResolversParentTypes['Forecast']> = {
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rain?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sunrise?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sunset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>;
  wind?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<MutationCreateCategoryArgs>>;
  createSubCategory?: Resolver<Maybe<ResolversTypes['SubCategory']>, ParentType, ContextType, Partial<MutationCreateSubCategoryArgs>>;
  createTopic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType, Partial<MutationCreateTopicArgs>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteSubCategory?: Resolver<Maybe<ResolversTypes['SubCategory']>, ParentType, ContextType, RequireFields<MutationDeleteSubCategoryArgs, 'id'>>;
  deleteTopic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType, RequireFields<MutationDeleteTopicArgs, 'id'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'input'>>;
  updateSubCategory?: Resolver<Maybe<ResolversTypes['SubCategory']>, ParentType, ContextType, RequireFields<MutationUpdateSubCategoryArgs, 'id' | 'input'>>;
  updateTopic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType, RequireFields<MutationUpdateTopicArgs, 'id' | 'input'>>;
};

export type PaginatedCategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedCategories'] = ResolversParentTypes['PaginatedCategories']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSubCategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSubCategories'] = ResolversParentTypes['PaginatedSubCategories']> = {
  subCategories?: Resolver<Array<ResolversTypes['SubCategory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedTopicsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedTopics'] = ResolversParentTypes['PaginatedTopics']> = {
  topics?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>;
  categoryAll?: Resolver<Maybe<ResolversTypes['PaginatedCategories']>, ParentType, ContextType, Partial<QueryCategoryAllArgs>>;
  categoryById?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryCategoryByIdArgs, 'id'>>;
  cities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<QueryCitiesArgs, 'city'>>;
  currentWeatherByCity?: Resolver<Maybe<ResolversTypes['CurrentWeather']>, ParentType, ContextType, RequireFields<QueryCurrentWeatherByCityArgs, 'city'>>;
  dailyForecast?: Resolver<Maybe<ResolversTypes['DailyForecast']>, ParentType, ContextType, RequireFields<QueryDailyForecastArgs, 'city'>>;
  subCategories?: Resolver<Maybe<Array<ResolversTypes['SubCategory']>>, ParentType, ContextType>;
  subCategoryAll?: Resolver<Maybe<ResolversTypes['PaginatedSubCategories']>, ParentType, ContextType, Partial<QuerySubCategoryAllArgs>>;
  subCategoryByCategory?: Resolver<Maybe<Array<ResolversTypes['SubCategory']>>, ParentType, ContextType, Partial<QuerySubCategoryByCategoryArgs>>;
  subCategoryById?: Resolver<Maybe<ResolversTypes['SubCategory']>, ParentType, ContextType, RequireFields<QuerySubCategoryByIdArgs, 'id'>>;
  topicAll?: Resolver<Maybe<ResolversTypes['PaginatedTopics']>, ParentType, ContextType, Partial<QueryTopicAllArgs>>;
  topicByCategory?: Resolver<Maybe<Array<ResolversTypes['Topic']>>, ParentType, ContextType, RequireFields<QueryTopicByCategoryArgs, 'categoryId'>>;
  topicByCategoryAbbr?: Resolver<Maybe<Array<ResolversTypes['Topic']>>, ParentType, ContextType, RequireFields<QueryTopicByCategoryAbbrArgs, 'abbr'>>;
  topicById?: Resolver<ResolversTypes['Topic'], ParentType, ContextType, RequireFields<QueryTopicByIdArgs, 'id'>>;
  topics?: Resolver<Maybe<Array<ResolversTypes['Topic']>>, ParentType, ContextType>;
};

export type SubCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubCategory'] = ResolversParentTypes['SubCategory']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temperature'] = ResolversParentTypes['Temperature']> = {
  day?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subCategory?: Resolver<Maybe<ResolversTypes['SubCategory']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Weather'] = ResolversParentTypes['Weather']> = {
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feelsLike?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  CityInfo?: CityInfoResolvers<ContextType>;
  Coord?: CoordResolvers<ContextType>;
  CurrentWeather?: CurrentWeatherResolvers<ContextType>;
  DailyForecast?: DailyForecastResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Forecast?: ForecastResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginatedCategories?: PaginatedCategoriesResolvers<ContextType>;
  PaginatedSubCategories?: PaginatedSubCategoriesResolvers<ContextType>;
  PaginatedTopics?: PaginatedTopicsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SubCategory?: SubCategoryResolvers<ContextType>;
  Temperature?: TemperatureResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  Weather?: WeatherResolvers<ContextType>;
};

