import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: "https://apn1-sweet-foxhound-33864.upstash.io",
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
