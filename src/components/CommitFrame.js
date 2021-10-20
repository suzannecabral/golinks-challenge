import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import propTypes from "prop-types";
import CommitList from "./CommitList";
import CommitDetails from "./CommitDetails";

const CommitFrame = (props) => {
  const { commitsUrl, setCommitsUrl, commitsLoading, setCommitsLoading } =
    props;
  return (
    <Box>
      {commitsLoading ? (
        <CircularProgress />
      ) : (
        <CommitList
          commitsUrl={commitsUrl}
          setCommitsUrl={setCommitsUrl}
          commitsLoading={commitsLoading}
          setCommitsLoading={setCommitsLoading}
        />
      )}
      {/* <CommitList commitsUrl={commitsUrl} setCommitsUrl={setCommitsUrl} /> */}
      {/* <CommitDetails commitsUrl={commitsUrl} /> */}
    </Box>
  );
};

CommitFrame.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
  commitsLoading: propTypes.bool.isRequired,
  setCommitsLoading: propTypes.func.isRequired,
};

export default CommitFrame;
