import { mutation } from 'convex-dev/server'
import { Id } from 'convex-dev/values'
import { Post } from '../lib/common'

// Upvote a post
export default mutation(async ({ db }, id: Id) => {
  console.log('upvoting', id)
  const post: Post | null = await db.get(id)
  if (post === null) {
    throw new Error(`no post with id ${id}`)
  }
  db.update(id, { votes: post.votes + 1 })
})
