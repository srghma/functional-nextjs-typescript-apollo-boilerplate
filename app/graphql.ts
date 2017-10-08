/* tslint:disable */

export type DateTime = any
/* An object with an ID */
export interface Node {
  id: string /* The id of the object. */
}

export interface Query {
  allFiles: File[]
  allPosts: Post[]
  allUsers: User[]
  _allFilesMeta: _QueryMeta
  _allPostsMeta: _QueryMeta
  _allUsersMeta: _QueryMeta
  File?: File
  Post?: Post
  User?: User
  user?: User
  node?: Node /* Fetches an object given its ID */
}

export interface File extends Node {
  contentType: string
  createdAt?: DateTime
  id: string
  name: string
  secret: string
  size: number
  updatedAt?: DateTime
  url: string
}

export interface Post extends Node {
  createdAt?: DateTime
  id: string
  title: string
  updatedAt?: DateTime
  url: string
  votes?: number
}

export interface User extends Node {
  createdAt?: DateTime
  email?: string
  firstName: string
  id: string
  lastName: string
  password?: string
  updatedAt?: DateTime
}
/* Meta information about the query. */
export interface _QueryMeta {
  count: number
}

export interface Mutation {
  createFile?: File
  createPost?: Post
  updateFile?: File
  updatePost?: Post
  updateUser?: User
  updateOrCreateFile?: File
  updateOrCreatePost?: Post
  updateOrCreateUser?: User
  deleteFile?: File
  deletePost?: Post
  deleteUser?: User
  signinUser: SigninPayload
  createUser?: User
}
/* If authentication was successful the payload contains the user and a token. If unsuccessful this payload is null. */
export interface SigninPayload {
  token?: string
  user?: User
}

export interface Subscription {
  File?: FileSubscriptionPayload
  Post?: PostSubscriptionPayload
  User?: UserSubscriptionPayload
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType
  node?: File
  updatedFields: string[]
  previousValues?: FilePreviousValues
}

export interface FilePreviousValues {
  contentType: string
  createdAt?: DateTime
  id: string
  name: string
  secret: string
  size: number
  updatedAt?: DateTime
  url: string
}

export interface PostSubscriptionPayload {
  mutation: _ModelMutationType
  node?: Post
  updatedFields: string[]
  previousValues?: PostPreviousValues
}

export interface PostPreviousValues {
  createdAt?: DateTime
  id: string
  title: string
  updatedAt?: DateTime
  url: string
  votes?: number
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType
  node?: User
  updatedFields: string[]
  previousValues?: UserPreviousValues
}

export interface UserPreviousValues {
  createdAt?: DateTime
  email?: string
  firstName: string
  id: string
  lastName: string
  password?: string
  updatedAt?: DateTime
}

export interface FileFilter {
  AND: FileFilter[] /* Logical AND on all given filters. */
  OR: FileFilter[] /* Logical OR on all given filters. */
  contentType?: string
  contentType_not?: string /* All values that are not equal to given value. */
  contentType_in: string[] /* All values that are contained in given list. */
  contentType_not_in: string[] /* All values that are not contained in given list. */
  contentType_lt?: string /* All values less than the given value. */
  contentType_lte?: string /* All values less than or equal the given value. */
  contentType_gt?: string /* All values greater than the given value. */
  contentType_gte?: string /* All values greater than or equal the given value. */
  contentType_contains?: string /* All values containing the given string. */
  contentType_not_contains?: string /* All values not containing the given string. */
  contentType_starts_with?: string /* All values starting with the given string. */
  contentType_not_starts_with?: string /* All values not starting with the given string. */
  contentType_ends_with?: string /* All values ending with the given string. */
  contentType_not_ends_with?: string /* All values not ending with the given string. */
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  name?: string
  name_not?: string /* All values that are not equal to given value. */
  name_in: string[] /* All values that are contained in given list. */
  name_not_in: string[] /* All values that are not contained in given list. */
  name_lt?: string /* All values less than the given value. */
  name_lte?: string /* All values less than or equal the given value. */
  name_gt?: string /* All values greater than the given value. */
  name_gte?: string /* All values greater than or equal the given value. */
  name_contains?: string /* All values containing the given string. */
  name_not_contains?: string /* All values not containing the given string. */
  name_starts_with?: string /* All values starting with the given string. */
  name_not_starts_with?: string /* All values not starting with the given string. */
  name_ends_with?: string /* All values ending with the given string. */
  name_not_ends_with?: string /* All values not ending with the given string. */
  secret?: string
  secret_not?: string /* All values that are not equal to given value. */
  secret_in: string[] /* All values that are contained in given list. */
  secret_not_in: string[] /* All values that are not contained in given list. */
  secret_lt?: string /* All values less than the given value. */
  secret_lte?: string /* All values less than or equal the given value. */
  secret_gt?: string /* All values greater than the given value. */
  secret_gte?: string /* All values greater than or equal the given value. */
  secret_contains?: string /* All values containing the given string. */
  secret_not_contains?: string /* All values not containing the given string. */
  secret_starts_with?: string /* All values starting with the given string. */
  secret_not_starts_with?: string /* All values not starting with the given string. */
  secret_ends_with?: string /* All values ending with the given string. */
  secret_not_ends_with?: string /* All values not ending with the given string. */
  size?: number
  size_not?: number /* All values that are not equal to given value. */
  size_in: number[] /* All values that are contained in given list. */
  size_not_in: number[] /* All values that are not contained in given list. */
  size_lt?: number /* All values less than the given value. */
  size_lte?: number /* All values less than or equal the given value. */
  size_gt?: number /* All values greater than the given value. */
  size_gte?: number /* All values greater than or equal the given value. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
  url?: string
  url_not?: string /* All values that are not equal to given value. */
  url_in: string[] /* All values that are contained in given list. */
  url_not_in: string[] /* All values that are not contained in given list. */
  url_lt?: string /* All values less than the given value. */
  url_lte?: string /* All values less than or equal the given value. */
  url_gt?: string /* All values greater than the given value. */
  url_gte?: string /* All values greater than or equal the given value. */
  url_contains?: string /* All values containing the given string. */
  url_not_contains?: string /* All values not containing the given string. */
  url_starts_with?: string /* All values starting with the given string. */
  url_not_starts_with?: string /* All values not starting with the given string. */
  url_ends_with?: string /* All values ending with the given string. */
  url_not_ends_with?: string /* All values not ending with the given string. */
}

export interface PostFilter {
  AND: PostFilter[] /* Logical AND on all given filters. */
  OR: PostFilter[] /* Logical OR on all given filters. */
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  title?: string
  title_not?: string /* All values that are not equal to given value. */
  title_in: string[] /* All values that are contained in given list. */
  title_not_in: string[] /* All values that are not contained in given list. */
  title_lt?: string /* All values less than the given value. */
  title_lte?: string /* All values less than or equal the given value. */
  title_gt?: string /* All values greater than the given value. */
  title_gte?: string /* All values greater than or equal the given value. */
  title_contains?: string /* All values containing the given string. */
  title_not_contains?: string /* All values not containing the given string. */
  title_starts_with?: string /* All values starting with the given string. */
  title_not_starts_with?: string /* All values not starting with the given string. */
  title_ends_with?: string /* All values ending with the given string. */
  title_not_ends_with?: string /* All values not ending with the given string. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
  url?: string
  url_not?: string /* All values that are not equal to given value. */
  url_in: string[] /* All values that are contained in given list. */
  url_not_in: string[] /* All values that are not contained in given list. */
  url_lt?: string /* All values less than the given value. */
  url_lte?: string /* All values less than or equal the given value. */
  url_gt?: string /* All values greater than the given value. */
  url_gte?: string /* All values greater than or equal the given value. */
  url_contains?: string /* All values containing the given string. */
  url_not_contains?: string /* All values not containing the given string. */
  url_starts_with?: string /* All values starting with the given string. */
  url_not_starts_with?: string /* All values not starting with the given string. */
  url_ends_with?: string /* All values ending with the given string. */
  url_not_ends_with?: string /* All values not ending with the given string. */
  votes?: number
  votes_not?: number /* All values that are not equal to given value. */
  votes_in: number[] /* All values that are contained in given list. */
  votes_not_in: number[] /* All values that are not contained in given list. */
  votes_lt?: number /* All values less than the given value. */
  votes_lte?: number /* All values less than or equal the given value. */
  votes_gt?: number /* All values greater than the given value. */
  votes_gte?: number /* All values greater than or equal the given value. */
}

export interface UserFilter {
  AND: UserFilter[] /* Logical AND on all given filters. */
  OR: UserFilter[] /* Logical OR on all given filters. */
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  email?: string
  email_not?: string /* All values that are not equal to given value. */
  email_in: string[] /* All values that are contained in given list. */
  email_not_in: string[] /* All values that are not contained in given list. */
  email_lt?: string /* All values less than the given value. */
  email_lte?: string /* All values less than or equal the given value. */
  email_gt?: string /* All values greater than the given value. */
  email_gte?: string /* All values greater than or equal the given value. */
  email_contains?: string /* All values containing the given string. */
  email_not_contains?: string /* All values not containing the given string. */
  email_starts_with?: string /* All values starting with the given string. */
  email_not_starts_with?: string /* All values not starting with the given string. */
  email_ends_with?: string /* All values ending with the given string. */
  email_not_ends_with?: string /* All values not ending with the given string. */
  firstName?: string
  firstName_not?: string /* All values that are not equal to given value. */
  firstName_in: string[] /* All values that are contained in given list. */
  firstName_not_in: string[] /* All values that are not contained in given list. */
  firstName_lt?: string /* All values less than the given value. */
  firstName_lte?: string /* All values less than or equal the given value. */
  firstName_gt?: string /* All values greater than the given value. */
  firstName_gte?: string /* All values greater than or equal the given value. */
  firstName_contains?: string /* All values containing the given string. */
  firstName_not_contains?: string /* All values not containing the given string. */
  firstName_starts_with?: string /* All values starting with the given string. */
  firstName_not_starts_with?: string /* All values not starting with the given string. */
  firstName_ends_with?: string /* All values ending with the given string. */
  firstName_not_ends_with?: string /* All values not ending with the given string. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  lastName?: string
  lastName_not?: string /* All values that are not equal to given value. */
  lastName_in: string[] /* All values that are contained in given list. */
  lastName_not_in: string[] /* All values that are not contained in given list. */
  lastName_lt?: string /* All values less than the given value. */
  lastName_lte?: string /* All values less than or equal the given value. */
  lastName_gt?: string /* All values greater than the given value. */
  lastName_gte?: string /* All values greater than or equal the given value. */
  lastName_contains?: string /* All values containing the given string. */
  lastName_not_contains?: string /* All values not containing the given string. */
  lastName_starts_with?: string /* All values starting with the given string. */
  lastName_not_starts_with?: string /* All values not starting with the given string. */
  lastName_ends_with?: string /* All values ending with the given string. */
  lastName_not_ends_with?: string /* All values not ending with the given string. */
  password?: string
  password_not?: string /* All values that are not equal to given value. */
  password_in: string[] /* All values that are contained in given list. */
  password_not_in: string[] /* All values that are not contained in given list. */
  password_lt?: string /* All values less than the given value. */
  password_lte?: string /* All values less than or equal the given value. */
  password_gt?: string /* All values greater than the given value. */
  password_gte?: string /* All values greater than or equal the given value. */
  password_contains?: string /* All values containing the given string. */
  password_not_contains?: string /* All values not containing the given string. */
  password_starts_with?: string /* All values starting with the given string. */
  password_not_starts_with?: string /* All values not starting with the given string. */
  password_ends_with?: string /* All values ending with the given string. */
  password_not_ends_with?: string /* All values not ending with the given string. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
}

export interface UpdateFile {
  id: string
  name?: string
}

export interface CreateFile {
  name: string
}

export interface UpdatePost {
  id: string
  title?: string
  url?: string
  votes?: number
}

export interface CreatePost {
  title: string
  url: string
  votes?: number
}

export interface UpdateUser {
  firstName?: string
  id: string
  lastName?: string
}

export interface CreateUser {
  firstName: string
  lastName: string
}

export interface AUTH_PROVIDER_EMAIL {
  email: string
  password: string
}

export interface AuthProviderSignupData {
  email?: AUTH_PROVIDER_EMAIL
}

export interface FileSubscriptionFilter {
  AND: FileSubscriptionFilter[] /* Logical AND on all given filters. */
  OR: FileSubscriptionFilter[] /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[] /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[] /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[] /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: FileSubscriptionFilterNode
}

export interface FileSubscriptionFilterNode {
  contentType?: string
  contentType_not?: string /* All values that are not equal to given value. */
  contentType_in: string[] /* All values that are contained in given list. */
  contentType_not_in: string[] /* All values that are not contained in given list. */
  contentType_lt?: string /* All values less than the given value. */
  contentType_lte?: string /* All values less than or equal the given value. */
  contentType_gt?: string /* All values greater than the given value. */
  contentType_gte?: string /* All values greater than or equal the given value. */
  contentType_contains?: string /* All values containing the given string. */
  contentType_not_contains?: string /* All values not containing the given string. */
  contentType_starts_with?: string /* All values starting with the given string. */
  contentType_not_starts_with?: string /* All values not starting with the given string. */
  contentType_ends_with?: string /* All values ending with the given string. */
  contentType_not_ends_with?: string /* All values not ending with the given string. */
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  name?: string
  name_not?: string /* All values that are not equal to given value. */
  name_in: string[] /* All values that are contained in given list. */
  name_not_in: string[] /* All values that are not contained in given list. */
  name_lt?: string /* All values less than the given value. */
  name_lte?: string /* All values less than or equal the given value. */
  name_gt?: string /* All values greater than the given value. */
  name_gte?: string /* All values greater than or equal the given value. */
  name_contains?: string /* All values containing the given string. */
  name_not_contains?: string /* All values not containing the given string. */
  name_starts_with?: string /* All values starting with the given string. */
  name_not_starts_with?: string /* All values not starting with the given string. */
  name_ends_with?: string /* All values ending with the given string. */
  name_not_ends_with?: string /* All values not ending with the given string. */
  secret?: string
  secret_not?: string /* All values that are not equal to given value. */
  secret_in: string[] /* All values that are contained in given list. */
  secret_not_in: string[] /* All values that are not contained in given list. */
  secret_lt?: string /* All values less than the given value. */
  secret_lte?: string /* All values less than or equal the given value. */
  secret_gt?: string /* All values greater than the given value. */
  secret_gte?: string /* All values greater than or equal the given value. */
  secret_contains?: string /* All values containing the given string. */
  secret_not_contains?: string /* All values not containing the given string. */
  secret_starts_with?: string /* All values starting with the given string. */
  secret_not_starts_with?: string /* All values not starting with the given string. */
  secret_ends_with?: string /* All values ending with the given string. */
  secret_not_ends_with?: string /* All values not ending with the given string. */
  size?: number
  size_not?: number /* All values that are not equal to given value. */
  size_in: number[] /* All values that are contained in given list. */
  size_not_in: number[] /* All values that are not contained in given list. */
  size_lt?: number /* All values less than the given value. */
  size_lte?: number /* All values less than or equal the given value. */
  size_gt?: number /* All values greater than the given value. */
  size_gte?: number /* All values greater than or equal the given value. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
  url?: string
  url_not?: string /* All values that are not equal to given value. */
  url_in: string[] /* All values that are contained in given list. */
  url_not_in: string[] /* All values that are not contained in given list. */
  url_lt?: string /* All values less than the given value. */
  url_lte?: string /* All values less than or equal the given value. */
  url_gt?: string /* All values greater than the given value. */
  url_gte?: string /* All values greater than or equal the given value. */
  url_contains?: string /* All values containing the given string. */
  url_not_contains?: string /* All values not containing the given string. */
  url_starts_with?: string /* All values starting with the given string. */
  url_not_starts_with?: string /* All values not starting with the given string. */
  url_ends_with?: string /* All values ending with the given string. */
  url_not_ends_with?: string /* All values not ending with the given string. */
}

export interface PostSubscriptionFilter {
  AND: PostSubscriptionFilter[] /* Logical AND on all given filters. */
  OR: PostSubscriptionFilter[] /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[] /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[] /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[] /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: PostSubscriptionFilterNode
}

export interface PostSubscriptionFilterNode {
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  title?: string
  title_not?: string /* All values that are not equal to given value. */
  title_in: string[] /* All values that are contained in given list. */
  title_not_in: string[] /* All values that are not contained in given list. */
  title_lt?: string /* All values less than the given value. */
  title_lte?: string /* All values less than or equal the given value. */
  title_gt?: string /* All values greater than the given value. */
  title_gte?: string /* All values greater than or equal the given value. */
  title_contains?: string /* All values containing the given string. */
  title_not_contains?: string /* All values not containing the given string. */
  title_starts_with?: string /* All values starting with the given string. */
  title_not_starts_with?: string /* All values not starting with the given string. */
  title_ends_with?: string /* All values ending with the given string. */
  title_not_ends_with?: string /* All values not ending with the given string. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
  url?: string
  url_not?: string /* All values that are not equal to given value. */
  url_in: string[] /* All values that are contained in given list. */
  url_not_in: string[] /* All values that are not contained in given list. */
  url_lt?: string /* All values less than the given value. */
  url_lte?: string /* All values less than or equal the given value. */
  url_gt?: string /* All values greater than the given value. */
  url_gte?: string /* All values greater than or equal the given value. */
  url_contains?: string /* All values containing the given string. */
  url_not_contains?: string /* All values not containing the given string. */
  url_starts_with?: string /* All values starting with the given string. */
  url_not_starts_with?: string /* All values not starting with the given string. */
  url_ends_with?: string /* All values ending with the given string. */
  url_not_ends_with?: string /* All values not ending with the given string. */
  votes?: number
  votes_not?: number /* All values that are not equal to given value. */
  votes_in: number[] /* All values that are contained in given list. */
  votes_not_in: number[] /* All values that are not contained in given list. */
  votes_lt?: number /* All values less than the given value. */
  votes_lte?: number /* All values less than or equal the given value. */
  votes_gt?: number /* All values greater than the given value. */
  votes_gte?: number /* All values greater than or equal the given value. */
}

export interface UserSubscriptionFilter {
  AND: UserSubscriptionFilter[] /* Logical AND on all given filters. */
  OR: UserSubscriptionFilter[] /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[] /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains?: string /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[] /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[] /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: UserSubscriptionFilterNode
}

export interface UserSubscriptionFilterNode {
  createdAt?: DateTime
  createdAt_not?: DateTime /* All values that are not equal to given value. */
  createdAt_in: DateTime[] /* All values that are contained in given list. */
  createdAt_not_in: DateTime[] /* All values that are not contained in given list. */
  createdAt_lt?: DateTime /* All values less than the given value. */
  createdAt_lte?: DateTime /* All values less than or equal the given value. */
  createdAt_gt?: DateTime /* All values greater than the given value. */
  createdAt_gte?: DateTime /* All values greater than or equal the given value. */
  email?: string
  email_not?: string /* All values that are not equal to given value. */
  email_in: string[] /* All values that are contained in given list. */
  email_not_in: string[] /* All values that are not contained in given list. */
  email_lt?: string /* All values less than the given value. */
  email_lte?: string /* All values less than or equal the given value. */
  email_gt?: string /* All values greater than the given value. */
  email_gte?: string /* All values greater than or equal the given value. */
  email_contains?: string /* All values containing the given string. */
  email_not_contains?: string /* All values not containing the given string. */
  email_starts_with?: string /* All values starting with the given string. */
  email_not_starts_with?: string /* All values not starting with the given string. */
  email_ends_with?: string /* All values ending with the given string. */
  email_not_ends_with?: string /* All values not ending with the given string. */
  firstName?: string
  firstName_not?: string /* All values that are not equal to given value. */
  firstName_in: string[] /* All values that are contained in given list. */
  firstName_not_in: string[] /* All values that are not contained in given list. */
  firstName_lt?: string /* All values less than the given value. */
  firstName_lte?: string /* All values less than or equal the given value. */
  firstName_gt?: string /* All values greater than the given value. */
  firstName_gte?: string /* All values greater than or equal the given value. */
  firstName_contains?: string /* All values containing the given string. */
  firstName_not_contains?: string /* All values not containing the given string. */
  firstName_starts_with?: string /* All values starting with the given string. */
  firstName_not_starts_with?: string /* All values not starting with the given string. */
  firstName_ends_with?: string /* All values ending with the given string. */
  firstName_not_ends_with?: string /* All values not ending with the given string. */
  id?: string
  id_not?: string /* All values that are not equal to given value. */
  id_in: string[] /* All values that are contained in given list. */
  id_not_in: string[] /* All values that are not contained in given list. */
  id_lt?: string /* All values less than the given value. */
  id_lte?: string /* All values less than or equal the given value. */
  id_gt?: string /* All values greater than the given value. */
  id_gte?: string /* All values greater than or equal the given value. */
  id_contains?: string /* All values containing the given string. */
  id_not_contains?: string /* All values not containing the given string. */
  id_starts_with?: string /* All values starting with the given string. */
  id_not_starts_with?: string /* All values not starting with the given string. */
  id_ends_with?: string /* All values ending with the given string. */
  id_not_ends_with?: string /* All values not ending with the given string. */
  lastName?: string
  lastName_not?: string /* All values that are not equal to given value. */
  lastName_in: string[] /* All values that are contained in given list. */
  lastName_not_in: string[] /* All values that are not contained in given list. */
  lastName_lt?: string /* All values less than the given value. */
  lastName_lte?: string /* All values less than or equal the given value. */
  lastName_gt?: string /* All values greater than the given value. */
  lastName_gte?: string /* All values greater than or equal the given value. */
  lastName_contains?: string /* All values containing the given string. */
  lastName_not_contains?: string /* All values not containing the given string. */
  lastName_starts_with?: string /* All values starting with the given string. */
  lastName_not_starts_with?: string /* All values not starting with the given string. */
  lastName_ends_with?: string /* All values ending with the given string. */
  lastName_not_ends_with?: string /* All values not ending with the given string. */
  password?: string
  password_not?: string /* All values that are not equal to given value. */
  password_in: string[] /* All values that are contained in given list. */
  password_not_in: string[] /* All values that are not contained in given list. */
  password_lt?: string /* All values less than the given value. */
  password_lte?: string /* All values less than or equal the given value. */
  password_gt?: string /* All values greater than the given value. */
  password_gte?: string /* All values greater than or equal the given value. */
  password_contains?: string /* All values containing the given string. */
  password_not_contains?: string /* All values not containing the given string. */
  password_starts_with?: string /* All values starting with the given string. */
  password_not_starts_with?: string /* All values not starting with the given string. */
  password_ends_with?: string /* All values ending with the given string. */
  password_not_ends_with?: string /* All values not ending with the given string. */
  updatedAt?: DateTime
  updatedAt_not?: DateTime /* All values that are not equal to given value. */
  updatedAt_in: DateTime[] /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */
  updatedAt_lt?: DateTime /* All values less than the given value. */
  updatedAt_lte?: DateTime /* All values less than or equal the given value. */
  updatedAt_gt?: DateTime /* All values greater than the given value. */
  updatedAt_gte?: DateTime /* All values greater than or equal the given value. */
}
export interface AllFilesQueryArgs {
  filter?: FileFilter
  orderBy?: FileOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface AllPostsQueryArgs {
  filter?: PostFilter
  orderBy?: PostOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface AllUsersQueryArgs {
  filter?: UserFilter
  orderBy?: UserOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface AllFilesMetaQueryArgs {
  filter?: FileFilter
  orderBy?: FileOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface AllPostsMetaQueryArgs {
  filter?: PostFilter
  orderBy?: PostOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface AllUsersMetaQueryArgs {
  filter?: UserFilter
  orderBy?: UserOrderBy
  skip?: number
  after?: string
  before?: string
  first?: number
  last?: number
}
export interface FileQueryArgs {
  id?: string
  secret?: string
  url?: string
}
export interface PostQueryArgs {
  id?: string
}
export interface UserQueryArgs {
  email?: string
  id?: string
}
export interface NodeQueryArgs {
  id: string /* The ID of an object */
}
export interface CreateFileMutationArgs {
  name: string
}
export interface CreatePostMutationArgs {
  title: string
  url: string
  votes?: number
}
export interface UpdateFileMutationArgs {
  id: string
  name?: string
}
export interface UpdatePostMutationArgs {
  id: string
  title?: string
  url?: string
  votes?: number
}
export interface UpdateUserMutationArgs {
  firstName?: string
  id: string
  lastName?: string
}
export interface UpdateOrCreateFileMutationArgs {
  update: UpdateFile
  create: CreateFile
}
export interface UpdateOrCreatePostMutationArgs {
  update: UpdatePost
  create: CreatePost
}
export interface UpdateOrCreateUserMutationArgs {
  update: UpdateUser
  create: CreateUser
}
export interface DeleteFileMutationArgs {
  id: string
}
export interface DeletePostMutationArgs {
  id: string
}
export interface DeleteUserMutationArgs {
  id: string
}
export interface SigninUserMutationArgs {
  email?: AUTH_PROVIDER_EMAIL
}
export interface CreateUserMutationArgs {
  firstName: string
  lastName: string
  authProvider: AuthProviderSignupData
}
export interface FileSubscriptionArgs {
  filter?: FileSubscriptionFilter
}
export interface PostSubscriptionArgs {
  filter?: PostSubscriptionFilter
}
export interface UserSubscriptionArgs {
  filter?: UserSubscriptionFilter
}

export type FileOrderBy =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'secret_ASC'
  | 'secret_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'url_ASC'
  | 'url_DESC'

export type PostOrderBy =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'votes_ASC'
  | 'votes_DESC'

export type UserOrderBy =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type _ModelMutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export namespace AllPosts {
  export type Variables = {
    first: number
    skip: number
  }

  export type Query = {
    allPosts: AllPosts[]
    _allPostsMeta: AllPostsMeta
  }

  export type AllPosts = {
    id: string
    title: string
    votes?: number
    createdAt?: DateTime
  }

  export type AllPostsMeta = {
    count: number
  }
}
