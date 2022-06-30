import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1>Nextjs - Sanity Sandbox</h1>

      <p>Instructions</p>

      <ol>
        <li>
          Set your development/local environment variables:
          <ul>
            <li>
              <code className="inline">SANITY_STUDIO_API_VERSION</code>
            </li>
            <li>
              <code className="inline">SANITY_STUDIO_API_PROJECT_ID</code>
            </li>
            <li>
              <code className="inline">SANITY_STUDIO_API_DATASET</code>
            </li>
          </ul>
        </li>
        <li>
          This sandbox makes use of the environment variable&nbsp;
          <code className="inline">NEXT_PUBLIC_HM_FUNCTION</code> to identify the current
          site&apos;s function. Add this variable to simulate the same.
        </li>
        <li>
          Choose a use case from the menu to check out how querying sanity.io
          works.
        </li>
      </ol>
    </>
  );
};

export default Home;
