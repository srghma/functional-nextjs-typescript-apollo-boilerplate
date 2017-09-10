/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type allPostsQueryVariables = {
  first: number,
  skip: number,
};

export type allPostsQuery = {
  allPosts:  Array< {
    id: string,
    title: string,
    votes: number | null,
    createdAt: string | null,
  } >,
  _allPostsMeta:  {
    count: number,
  },
};
/* tslint:enable */
