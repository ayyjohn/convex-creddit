import { query } from 'convex-dev/server'
import { Post } from '../lib/common'

export default query(async ({ db }): Promise<Post[]> => {
  console.log('listing posts')
  const posts: Post[] = await db.table('posts').collect()
  posts.sort((a, b) => b.votes - a.votes)
  return posts
})
