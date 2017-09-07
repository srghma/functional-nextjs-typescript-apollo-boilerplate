import * as React from 'react'
// import { Link } from '~/routes'

interface Post {
  id: string
  title: string
}

export interface PresentationProps {
  allPosts: Post[]
  loading: boolean
  allPostsCount?: number
  loadMorePosts?: boolean
}

export const Presentation: React.StatelessComponent<PresentationProps> = ({
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
        {allPosts.map((post, index) => (
          <p>
            {index}, {post.title}
          </p>
        ))}
      </div>
    )
  }
}

