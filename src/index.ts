import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

function main() {
  console.log("初始化Drizzle");
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  const client = postgres(databaseUrl, { prepare: false });
  drizzle({ client });
}

main();
