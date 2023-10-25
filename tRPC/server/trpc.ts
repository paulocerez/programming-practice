import { initTRPC } from "@trpc/server";

// Initialization of tRPC backend -> creating a router instance
// router = collection of procedures (API Endpoints) that can be addressed under the same namespace

const t = initTRPC.create();

// export reusable router and helper functions/procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;
