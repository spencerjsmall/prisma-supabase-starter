// https://snapshot-six.vercel.app/snapshot/core-concepts/capture#subset-data
import { defineConfig } from "snaplet";

export default defineConfig({
  subset: {
    targets: [
      {
        table: "public.User",
        // orderBy: `"User"."createdAt" desc`,
        percent: 5
      },
    ],
  },
});
