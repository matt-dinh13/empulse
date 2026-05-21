import { Redis } from '@upstash/redis'
import { logger } from './logger'

const url = process.env.UPSTASH_REDIS_REST_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN

export const redis = url && token ? new Redis({ url, token }) : null

if (!redis) {
    logger.warn('UPSTASH_REDIS_REST_URL or TOKEN not found. Falling back to in-memory store. NOT suitable for clustered environments.')
}
