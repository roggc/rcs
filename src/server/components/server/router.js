import React from "react";
import HomeRSC from "./home-rsc.js";
import GreetingRSC from "./greeting-rsc.js";
import Layout from "../client/layout.js";
import Provider from "../../../client/slices.js";

export default async function Router({ url }) {
  const props = JSON.parse(url.searchParams.get("props"));

  switch (url.pathname) {
    case "/":
      return (
        <Provider __isClient__="../client/slices.js">
          <Layout __isClient__="../server/components/client/layout.js">
            <HomeRSC />
          </Layout>
        </Provider>
      );
    case "/home":
      return <HomeRSC {...props} />;
    case "/greeting":
      return <GreetingRSC {...props} />;
    default:
      return <HomeRSC {...props} />;
  }
}
