/* tslint:disable */

export interface Query {
  allFiles: Array<File>
  allPosts: Array<Post>
  allUsers: Array<User>
  _allFilesMeta: _QueryMeta
  _allPostsMeta: _QueryMeta
  _allUsersMeta: _QueryMeta
  File: File | null
  Post: Post | null
  User: User | null
  user: User | null
  node: Node | null
}

export interface AllFilesQueryArgs {
  filter: FileFilter | null
  orderBy: FileOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface AllPostsQueryArgs {
  filter: PostFilter | null
  orderBy: PostOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface AllUsersQueryArgs {
  filter: UserFilter | null
  orderBy: UserOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface AllFilesMetaQueryArgs {
  filter: FileFilter | null
  orderBy: FileOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface AllPostsMetaQueryArgs {
  filter: PostFilter | null
  orderBy: PostOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface AllUsersMetaQueryArgs {
  filter: UserFilter | null
  orderBy: UserOrderBy | null
  skip: number | null
  after: string | null
  before: string | null
  first: number | null
  last: number | null
}

export interface FileQueryArgs {
  id: string | null
  secret: string | null
  url: string | null
}

export interface PostQueryArgs {
  id: string | null
}

export interface UserQueryArgs {
  email: string | null
  id: string | null
}

export interface NodeQueryArgs {
  id: string
}

export interface FileFilter {
  AND: Array<FileFilter>
  OR: Array<FileFilter>
  contentType: string | null
  contentType_not: string | null
  contentType_in: Array<string>
  contentType_not_in: Array<string>
  contentType_lt: string | null
  contentType_lte: string | null
  contentType_gt: string | null
  contentType_gte: string | null
  contentType_contains: string | null
  contentType_not_contains: string | null
  contentType_starts_with: string | null
  contentType_not_starts_with: string | null
  contentType_ends_with: string | null
  contentType_not_ends_with: string | null
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  name: string | null
  name_not: string | null
  name_in: Array<string>
  name_not_in: Array<string>
  name_lt: string | null
  name_lte: string | null
  name_gt: string | null
  name_gte: string | null
  name_contains: string | null
  name_not_contains: string | null
  name_starts_with: string | null
  name_not_starts_with: string | null
  name_ends_with: string | null
  name_not_ends_with: string | null
  secret: string | null
  secret_not: string | null
  secret_in: Array<string>
  secret_not_in: Array<string>
  secret_lt: string | null
  secret_lte: string | null
  secret_gt: string | null
  secret_gte: string | null
  secret_contains: string | null
  secret_not_contains: string | null
  secret_starts_with: string | null
  secret_not_starts_with: string | null
  secret_ends_with: string | null
  secret_not_ends_with: string | null
  size: number | null
  size_not: number | null
  size_in: Array<number>
  size_not_in: Array<number>
  size_lt: number | null
  size_lte: number | null
  size_gt: number | null
  size_gte: number | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
  url: string | null
  url_not: string | null
  url_in: Array<string>
  url_not_in: Array<string>
  url_lt: string | null
  url_lte: string | null
  url_gt: string | null
  url_gte: string | null
  url_contains: string | null
  url_not_contains: string | null
  url_starts_with: string | null
  url_not_starts_with: string | null
  url_ends_with: string | null
  url_not_ends_with: string | null
}

export type DateTime = any

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

export interface File extends Node {
  contentType: string
  createdAt: DateTime | null
  id: string
  name: string
  secret: string
  size: number
  updatedAt: DateTime | null
  url: string
}

export interface Node {
  id: string
}

export interface PostFilter {
  AND: Array<PostFilter>
  OR: Array<PostFilter>
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  title: string | null
  title_not: string | null
  title_in: Array<string>
  title_not_in: Array<string>
  title_lt: string | null
  title_lte: string | null
  title_gt: string | null
  title_gte: string | null
  title_contains: string | null
  title_not_contains: string | null
  title_starts_with: string | null
  title_not_starts_with: string | null
  title_ends_with: string | null
  title_not_ends_with: string | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
  url: string | null
  url_not: string | null
  url_in: Array<string>
  url_not_in: Array<string>
  url_lt: string | null
  url_lte: string | null
  url_gt: string | null
  url_gte: string | null
  url_contains: string | null
  url_not_contains: string | null
  url_starts_with: string | null
  url_not_starts_with: string | null
  url_ends_with: string | null
  url_not_ends_with: string | null
  votes: number | null
  votes_not: number | null
  votes_in: Array<number>
  votes_not_in: Array<number>
  votes_lt: number | null
  votes_lte: number | null
  votes_gt: number | null
  votes_gte: number | null
}

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

export interface Post extends Node {
  createdAt: DateTime | null
  id: string
  title: string
  updatedAt: DateTime | null
  url: string
  votes: number | null
}

export interface UserFilter {
  AND: Array<UserFilter>
  OR: Array<UserFilter>
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  email: string | null
  email_not: string | null
  email_in: Array<string>
  email_not_in: Array<string>
  email_lt: string | null
  email_lte: string | null
  email_gt: string | null
  email_gte: string | null
  email_contains: string | null
  email_not_contains: string | null
  email_starts_with: string | null
  email_not_starts_with: string | null
  email_ends_with: string | null
  email_not_ends_with: string | null
  firstName: string | null
  firstName_not: string | null
  firstName_in: Array<string>
  firstName_not_in: Array<string>
  firstName_lt: string | null
  firstName_lte: string | null
  firstName_gt: string | null
  firstName_gte: string | null
  firstName_contains: string | null
  firstName_not_contains: string | null
  firstName_starts_with: string | null
  firstName_not_starts_with: string | null
  firstName_ends_with: string | null
  firstName_not_ends_with: string | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  lastName: string | null
  lastName_not: string | null
  lastName_in: Array<string>
  lastName_not_in: Array<string>
  lastName_lt: string | null
  lastName_lte: string | null
  lastName_gt: string | null
  lastName_gte: string | null
  lastName_contains: string | null
  lastName_not_contains: string | null
  lastName_starts_with: string | null
  lastName_not_starts_with: string | null
  lastName_ends_with: string | null
  lastName_not_ends_with: string | null
  password: string | null
  password_not: string | null
  password_in: Array<string>
  password_not_in: Array<string>
  password_lt: string | null
  password_lte: string | null
  password_gt: string | null
  password_gte: string | null
  password_contains: string | null
  password_not_contains: string | null
  password_starts_with: string | null
  password_not_starts_with: string | null
  password_ends_with: string | null
  password_not_ends_with: string | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
}

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

export interface User extends Node {
  createdAt: DateTime | null
  email: string | null
  firstName: string
  id: string
  lastName: string
  password: string | null
  updatedAt: DateTime | null
}

export interface _QueryMeta {
  count: number
}

export interface Mutation {
  createFile: File | null
  createPost: Post | null
  updateFile: File | null
  updatePost: Post | null
  updateUser: User | null
  updateOrCreateFile: File | null
  updateOrCreatePost: Post | null
  updateOrCreateUser: User | null
  deleteFile: File | null
  deletePost: Post | null
  deleteUser: User | null
  signinUser: SigninPayload
  createUser: User | null
}

export interface CreateFileMutationArgs {
  name: string
}

export interface CreatePostMutationArgs {
  title: string
  url: string
  votes: number | null
}

export interface UpdateFileMutationArgs {
  id: string
  name: string | null
}

export interface UpdatePostMutationArgs {
  id: string
  title: string | null
  url: string | null
  votes: number | null
}

export interface UpdateUserMutationArgs {
  firstName: string | null
  id: string
  lastName: string | null
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
  email: AUTH_PROVIDER_EMAIL | null
}

export interface CreateUserMutationArgs {
  firstName: string
  lastName: string
  authProvider: AuthProviderSignupData
}

export interface UpdateFile {
  id: string
  name: string | null
}

export interface CreateFile {
  name: string
}

export interface UpdatePost {
  id: string
  title: string | null
  url: string | null
  votes: number | null
}

export interface CreatePost {
  title: string
  url: string
  votes: number | null
}

export interface UpdateUser {
  firstName: string | null
  id: string
  lastName: string | null
}

export interface CreateUser {
  firstName: string
  lastName: string
}

export interface AUTH_PROVIDER_EMAIL {
  email: string
  password: string
}

export interface SigninPayload {
  token: string | null
  user: User | null
}

export interface AuthProviderSignupData {
  email: AUTH_PROVIDER_EMAIL | null
}

export interface Subscription {
  File: FileSubscriptionPayload | null
  Post: PostSubscriptionPayload | null
  User: UserSubscriptionPayload | null
}

export interface FileSubscriptionArgs {
  filter: FileSubscriptionFilter | null
}

export interface PostSubscriptionArgs {
  filter: PostSubscriptionFilter | null
}

export interface UserSubscriptionArgs {
  filter: UserSubscriptionFilter | null
}

export interface FileSubscriptionFilter {
  AND: Array<FileSubscriptionFilter>
  OR: Array<FileSubscriptionFilter>
  mutation_in: Array<_ModelMutationType>
  updatedFields_contains: string | null
  updatedFields_contains_every: Array<string>
  updatedFields_contains_some: Array<string>
  node: FileSubscriptionFilterNode | null
}

export type _ModelMutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface FileSubscriptionFilterNode {
  contentType: string | null
  contentType_not: string | null
  contentType_in: Array<string>
  contentType_not_in: Array<string>
  contentType_lt: string | null
  contentType_lte: string | null
  contentType_gt: string | null
  contentType_gte: string | null
  contentType_contains: string | null
  contentType_not_contains: string | null
  contentType_starts_with: string | null
  contentType_not_starts_with: string | null
  contentType_ends_with: string | null
  contentType_not_ends_with: string | null
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  name: string | null
  name_not: string | null
  name_in: Array<string>
  name_not_in: Array<string>
  name_lt: string | null
  name_lte: string | null
  name_gt: string | null
  name_gte: string | null
  name_contains: string | null
  name_not_contains: string | null
  name_starts_with: string | null
  name_not_starts_with: string | null
  name_ends_with: string | null
  name_not_ends_with: string | null
  secret: string | null
  secret_not: string | null
  secret_in: Array<string>
  secret_not_in: Array<string>
  secret_lt: string | null
  secret_lte: string | null
  secret_gt: string | null
  secret_gte: string | null
  secret_contains: string | null
  secret_not_contains: string | null
  secret_starts_with: string | null
  secret_not_starts_with: string | null
  secret_ends_with: string | null
  secret_not_ends_with: string | null
  size: number | null
  size_not: number | null
  size_in: Array<number>
  size_not_in: Array<number>
  size_lt: number | null
  size_lte: number | null
  size_gt: number | null
  size_gte: number | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
  url: string | null
  url_not: string | null
  url_in: Array<string>
  url_not_in: Array<string>
  url_lt: string | null
  url_lte: string | null
  url_gt: string | null
  url_gte: string | null
  url_contains: string | null
  url_not_contains: string | null
  url_starts_with: string | null
  url_not_starts_with: string | null
  url_ends_with: string | null
  url_not_ends_with: string | null
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType
  node: File | null
  updatedFields: Array<string>
  previousValues: FilePreviousValues | null
}

export interface FilePreviousValues {
  contentType: string
  createdAt: DateTime | null
  id: string
  name: string
  secret: string
  size: number
  updatedAt: DateTime | null
  url: string
}

export interface PostSubscriptionFilter {
  AND: Array<PostSubscriptionFilter>
  OR: Array<PostSubscriptionFilter>
  mutation_in: Array<_ModelMutationType>
  updatedFields_contains: string | null
  updatedFields_contains_every: Array<string>
  updatedFields_contains_some: Array<string>
  node: PostSubscriptionFilterNode | null
}

export interface PostSubscriptionFilterNode {
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  title: string | null
  title_not: string | null
  title_in: Array<string>
  title_not_in: Array<string>
  title_lt: string | null
  title_lte: string | null
  title_gt: string | null
  title_gte: string | null
  title_contains: string | null
  title_not_contains: string | null
  title_starts_with: string | null
  title_not_starts_with: string | null
  title_ends_with: string | null
  title_not_ends_with: string | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
  url: string | null
  url_not: string | null
  url_in: Array<string>
  url_not_in: Array<string>
  url_lt: string | null
  url_lte: string | null
  url_gt: string | null
  url_gte: string | null
  url_contains: string | null
  url_not_contains: string | null
  url_starts_with: string | null
  url_not_starts_with: string | null
  url_ends_with: string | null
  url_not_ends_with: string | null
  votes: number | null
  votes_not: number | null
  votes_in: Array<number>
  votes_not_in: Array<number>
  votes_lt: number | null
  votes_lte: number | null
  votes_gt: number | null
  votes_gte: number | null
}

export interface PostSubscriptionPayload {
  mutation: _ModelMutationType
  node: Post | null
  updatedFields: Array<string>
  previousValues: PostPreviousValues | null
}

export interface PostPreviousValues {
  createdAt: DateTime | null
  id: string
  title: string
  updatedAt: DateTime | null
  url: string
  votes: number | null
}

export interface UserSubscriptionFilter {
  AND: Array<UserSubscriptionFilter>
  OR: Array<UserSubscriptionFilter>
  mutation_in: Array<_ModelMutationType>
  updatedFields_contains: string | null
  updatedFields_contains_every: Array<string>
  updatedFields_contains_some: Array<string>
  node: UserSubscriptionFilterNode | null
}

export interface UserSubscriptionFilterNode {
  createdAt: DateTime | null
  createdAt_not: DateTime | null
  createdAt_in: Array<DateTime>
  createdAt_not_in: Array<DateTime>
  createdAt_lt: DateTime | null
  createdAt_lte: DateTime | null
  createdAt_gt: DateTime | null
  createdAt_gte: DateTime | null
  email: string | null
  email_not: string | null
  email_in: Array<string>
  email_not_in: Array<string>
  email_lt: string | null
  email_lte: string | null
  email_gt: string | null
  email_gte: string | null
  email_contains: string | null
  email_not_contains: string | null
  email_starts_with: string | null
  email_not_starts_with: string | null
  email_ends_with: string | null
  email_not_ends_with: string | null
  firstName: string | null
  firstName_not: string | null
  firstName_in: Array<string>
  firstName_not_in: Array<string>
  firstName_lt: string | null
  firstName_lte: string | null
  firstName_gt: string | null
  firstName_gte: string | null
  firstName_contains: string | null
  firstName_not_contains: string | null
  firstName_starts_with: string | null
  firstName_not_starts_with: string | null
  firstName_ends_with: string | null
  firstName_not_ends_with: string | null
  id: string | null
  id_not: string | null
  id_in: Array<string>
  id_not_in: Array<string>
  id_lt: string | null
  id_lte: string | null
  id_gt: string | null
  id_gte: string | null
  id_contains: string | null
  id_not_contains: string | null
  id_starts_with: string | null
  id_not_starts_with: string | null
  id_ends_with: string | null
  id_not_ends_with: string | null
  lastName: string | null
  lastName_not: string | null
  lastName_in: Array<string>
  lastName_not_in: Array<string>
  lastName_lt: string | null
  lastName_lte: string | null
  lastName_gt: string | null
  lastName_gte: string | null
  lastName_contains: string | null
  lastName_not_contains: string | null
  lastName_starts_with: string | null
  lastName_not_starts_with: string | null
  lastName_ends_with: string | null
  lastName_not_ends_with: string | null
  password: string | null
  password_not: string | null
  password_in: Array<string>
  password_not_in: Array<string>
  password_lt: string | null
  password_lte: string | null
  password_gt: string | null
  password_gte: string | null
  password_contains: string | null
  password_not_contains: string | null
  password_starts_with: string | null
  password_not_starts_with: string | null
  password_ends_with: string | null
  password_not_ends_with: string | null
  updatedAt: DateTime | null
  updatedAt_not: DateTime | null
  updatedAt_in: Array<DateTime>
  updatedAt_not_in: Array<DateTime>
  updatedAt_lt: DateTime | null
  updatedAt_lte: DateTime | null
  updatedAt_gt: DateTime | null
  updatedAt_gte: DateTime | null
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType
  node: User | null
  updatedFields: Array<string>
  previousValues: UserPreviousValues | null
}

export interface UserPreviousValues {
  createdAt: DateTime | null
  email: string | null
  firstName: string
  id: string
  lastName: string
  password: string | null
  updatedAt: DateTime | null
}

export namespace AllPostsQuery {
  export type Variables = {
    first: number
    skip: number
  }

  export type Result = {
    allPosts: Array<AllPosts>
    _allPostsMeta: AllPostsMeta
  }

  export type AllPosts = {
    id: string
    title: string
    votes: number
    createdAt: DateTime
  }

  export type AllPostsMeta = {
    count: number
  }
}
