import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import Home from "components/templates/Home";

const appTitle = import.meta.env.ExprosiveWoekout;

const IndexRoutes: FC = () => {
  return (
    <>
      <Helmet>
        <title>{appTitle}</title>
      </Helmet>
      <Home />
    </>
  );
};

export default IndexRoutes;
