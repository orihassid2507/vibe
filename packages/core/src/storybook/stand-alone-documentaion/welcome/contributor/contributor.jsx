import React from "react";
import cx from "classnames";
import { InformationBox, InformationBoxTitle, Link } from "vibe-storybook-components";
import { elementColorsNames } from "../../../../utils/colors-vars-map";
import { Flex, IconButton } from "../../../../components";
import { Email } from "@vibe/icons";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";

export const Contributor = ({ imgSrc, className, fullName, title, email }) => {
  const contributorTitle = (
    <Flex justify={Flex.justify.SPACE_BETWEEN}>
      <InformationBoxTitle>{fullName}</InformationBoxTitle>
      {email && (
        <Link tabIndex="-1" href={`mailto:${email}`} target="_parent">
          <IconButton icon={Email} kind="tertiary" ariaLabel={`Contact ${fullName}`} />
        </Link>
      )}
    </Flex>
  );
  const contributorVisualImage = (
    <div className={cx(`${BASE_CLASS}_visual-element`, className)}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );
  return <InformationBox component={contributorVisualImage} title={contributorTitle} description={title} />;
};

Contributor.colors = elementColorsNames;
