import React from "react";
import Link from "../components/Link";
import Context from "../Context";
import { VisibilityFilters } from "../constants";

const Footer = () => {
  return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <span>Show: </span>
            <Link
              active={VisibilityFilters.SHOW_ALL === context.state.visibility}
              onClick={() => context.setVisibility(VisibilityFilters.SHOW_ALL)}
            >
              All
            </Link>
            <Link
              active={
                VisibilityFilters.SHOW_ACTIVE === context.state.visibility
              }
              onClick={() =>
                context.setVisibility(VisibilityFilters.SHOW_ACTIVE)
              }
            >
              Active
            </Link>
            <Link
              active={
                VisibilityFilters.SHOW_COMPLETED === context.state.visibility
              }
              onClick={() =>
                context.setVisibility(VisibilityFilters.SHOW_COMPLETED)
              }
            >
              Completed
            </Link>
          </React.Fragment>
        )}
      </Context.Consumer>
  );
};

export default Footer;
