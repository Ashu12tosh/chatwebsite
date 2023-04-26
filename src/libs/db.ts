import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: "https://apn1-sweet-foxhound-33864.upstash.io",
  token: "AYRIASQgZDJhM2ExMTctMDZlYy00NjM3LTk3MmQtMTVlMTFjYjBlOTQ3MGY2OTVkYmZjNzhmNGQ3MDk5M2MyNTE1ODZmNWZmMjE",
})
