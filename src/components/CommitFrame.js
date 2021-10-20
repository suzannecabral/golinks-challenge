import React from "react";
import { Typography, Box } from "@mui/material";
import propTypes from "prop-types";
import CommitList from "./CommitList";
import CommitDetails from "./CommitDetails";

const CommitFrame = (props) => {
  const { commitsUrl, setCommitsUrl } = props;
  return (
    <Box>
      <Typography variant="h2">Frame</Typography>
      <CommitList commitsUrl={commitsUrl} setCommitsUrl={setCommitsUrl} />
      <CommitDetails commitsUrl={commitsUrl} />
    </Box>
  );
};

CommitFrame.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
};

export default CommitFrame;
