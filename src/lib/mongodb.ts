import { MongoClient } from 'mongodb'

const options = {}

/**
 * Returns a connected MongoClient.
 *
 * Note: This is intentionally lazy.
 * Next.js may evaluate API route modules during `next build` (collecting page data).
 * We must avoid throwing (or creating rejected promises) at import-time.
 */
export async function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }

  if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }

    return globalWithMongo._mongoClientPromise
  }

  const client = new MongoClient(uri, options)
  return client.connect()
}
