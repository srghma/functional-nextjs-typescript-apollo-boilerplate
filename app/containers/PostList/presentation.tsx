import * as React from 'react'
// import { Link } from '~/routes'
import { Loading, Main } from './styles'

interface Post {
  id:    string
  title: string
}

export interface PostListProps {
  allPosts:       Post[]
  loading:        boolean
  allPostsCount?: number
}

export const PostList: React.StatelessComponent<PostListProps> = ({
  allPosts,
  loading,
}) => {
  if (loading) {
    return <Loading>Loading</Loading>
  } else if (allPosts.length === 0) {
    return <p>no posts yet</p>
  } else {
    return (
      <Main>
        {allPosts.map((post, index) => (
          <p key={index}>
            {index}, {post.title}
          </p>
        ))}
      </Main>
    )
  }
}

