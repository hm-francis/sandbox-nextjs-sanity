import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Key } from "react";

const Functions = ({
  functions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const codeString: string = `
    export const getStaticProps: GetStaticProps = async (context) => {
      const client = require("@sanity/client")({
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_API_DATASET,
        apiVersion: process.env.SANITY_STUDIO_API_VERSION,
        useCdn: true,
      });
      const query = \`*[_type == "function" && !(_id in path("drafts.**"))]\`;
      const result = await client.fetch(query);
    
      return {
        props: {
          functions: result,
        },
      };
    };`;
  return (
    <>
      <h1>code</h1>
      <pre>{codeString}</pre>
      <h1>result</h1>
      <pre>{JSON.stringify(functions, undefined, 2)}</pre>
      <h1>render</h1>
      <div>
        {functions.map(
          (f: {
            slug: string;
            blocks: {
              backgroundColor: string;
              foreColor: string;
              number: number;
              name: string;
              abbr: string;
            }[];
          }) => (
            <div key={f.slug} style={{ display: "flex", flexDirection: "row" }}>
              {f.blocks.map((b) => (
                <div
                  key={b.number}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 60,
                    height: 60,
                    margin: 2,
                    padding: 3,
                    backgroundColor: `${b.backgroundColor}`,
                    color: `${b.foreColor}`,
                  }}
                >
                  <div style={{ alignSelf: "end", fontSize: 7 }}>
                    {b.number}
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {b.abbr}
                  </div>
                  <div style={{ fontSize: 8 }}>{b.name}</div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = require("@sanity/client")({
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
    useCdn: true,
  });
  const query = `*[_type == "function" && !(_id in path("drafts.**"))]{name, 'slug': slug.current, tagline, url, blocks[]->{number, abbr, name, 'backgroundColor': backgroundColor.hex, 'foreColor': foreColor.hex}}`;
  const result = await client.fetch(query);

  return {
    props: {
      functions: result,
    },
  };
};

export default Functions;
