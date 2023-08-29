import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "../../";
 
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
  config: {
    uploadthingId: "someId",
    uploadthingSecret: "someSecret",
  },
});