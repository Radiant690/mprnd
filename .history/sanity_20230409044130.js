// client.ts
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "u44623j8", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

// import sanityClient from "@sanity/client";

// const client = sanityClient({
//   projectId: "u3fmvnfg",
//   dataset: "production",
//   useCdn: true,
// });

// export default client;
