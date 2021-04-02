import { Helmet } from "react-helmet";
import React from "react";
const Seo = ({ title, description, pathSlug, keywords }) => {
  const url = `https://stepzen.com/${pathSlug}`;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          name: "keywords",
          content: keywords.join(),
        },
      ]}
      links={[
        {
          rel: "canonical",
          href: url,
        },
      ]}
    />
  );
};
export default Seo;
