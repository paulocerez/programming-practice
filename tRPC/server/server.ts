import { z } from "zod";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
  }),
});
