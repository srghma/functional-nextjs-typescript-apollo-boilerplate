import * as React from 'react'
// import { Link } from '~/routes'
import { Main } from './styles'

interface Post {
  id: string
  title: string
}

interface PostListProps {
  allPosts: Post[]
  allPostsCount: number
}

export const PostList: React.StatelessComponent<PostListProps> = ({
  allPosts,
}) => {
  console.log('PostList render')
  return (
    <Main>
      {allPosts.map((post: any, index: any) => (
        <p key={index}>
          {index}, {post.title}
        </p>
      ))}
    </Main>
  )
}
