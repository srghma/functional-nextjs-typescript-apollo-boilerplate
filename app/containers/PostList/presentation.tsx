import * as React from 'react'
// import { Link } from '~/routes'

type Post = {
  id: number
  title: string
}

type PostListProps = {
  allPosts: Post[]
  loading: boolean
  allPostsCount?: number
  loadMorePosts?: boolean
}

const PostList: React.StatelessComponent<PostListProps> = ({
  allPosts,
  loading,
}) => {
  if (loading) {
    return <p>Loading</p>
  } else if (allPosts.length === 0) {
    return <p>no posts yet</p>
  } else {
    return (
      <div>
      {
        allPosts.map((post, index) =>
          <p>
            {index}, {post.title}
          </p>
        )
      }
      </div>
    )
  }
}

export default PostList
