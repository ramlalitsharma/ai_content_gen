/** @type {import("drizzle-kit").Config}*/

export default {
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url:'postgresql://neondb_owner:npg_aox7WCT6fASY@ep-gentle-voice-a87r16ml-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
    }
}