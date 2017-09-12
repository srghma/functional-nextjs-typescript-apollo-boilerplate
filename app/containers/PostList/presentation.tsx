import * as React from 'react'
// import { Link } from '~/routes'
import { Main } from './styles'
import Spin from 'antd/lib/spin'

// interface Post {
//   id: string
//   title: string
// }

// interface PostListProps {
//   allPosts: Post[]
//   allPostsCount: number
// }

export const PostList: React.StatelessComponent<any> = ({
  data: { loading, allPosts, error },
}) => {
  console.log('PostList render', loading, error)
  if (loading) {
    return <Spin />
  } else if (allPosts.length === 0) {
    return <p>no posts yet</p>
  } else {
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
}
