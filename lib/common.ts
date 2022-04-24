import { Id } from 'convex-dev/values'

export type Post = {
  _id: Id //convex-assigned ID
  title: string
  date: number // unix ms
  votes: number
}
