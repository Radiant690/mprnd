// client.ts
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "u3fmvnfg", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

// import sanityClient from "@sanity/client";

// const client = sanityClient({
//   projectId: "u3fmvnfg",
//   dataset: "production",
//   useCdn: true,
// });

// export default client;
