import React from "react";
import Link from "../components/Link";
import Context from "../context";
import { VisibilityFilters } from "../constants";

const Footer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
