import { z } from "zod";

import { 
  createTrpcRouter, 
  publicProcedure, 
  protectedProcedure
} from "../trpc";

export const exampleRouter = createTrpcRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});