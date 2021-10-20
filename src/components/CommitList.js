import React, { useState, useEffect } from "react";
import {
  Box,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import propTypes from "prop-types";

const CommitList = (props) => {
  const { commitsUrl, setCommitsUrl } = props;
  const [repoCommits, setRepoCommits] = useState([]);

  const getCommits = () => {
    axios
      .get(commitsUrl, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GH_PAT}`,
        },
      })
      .then((res) => {
        setRepoCommits(res.data);
        // console.log("API loaded repo list");
      })
      .catch((err) => {
        // console.log("Error loading repo list");
        return err;
      })
      .finally(() => {
        // console.log("API request finished");
      });
  };

  useEffect(() => {
    getCommits();
  }, [commitsUrl]);

  return (
    <Box>
      <Typography variant="h5" component="h2">
        Commits:
      </Typography>
      <Box sx={{ overflowY: "scroll", height: "90vh" }}>
        {repoCommits.map((commit, idx) => {
          const commitDate = new Date(commit.commit.author.date);
          return (
            <Box sx={{ marginBottom: "12px" }} key={commit.id}>
              <Link
                href={commit.html_url}
                variant="subtitle2"
                sx={{
                  display: "block",
                  width: "45vw",
                  // overflow: "hidden",
                  // textOverflow: "ellipsis",
                  // whiteSpace: "nowrap",
                }}
              >
                {commit.commit.message}
              </Link>
              <Typography variant="caption" sx={{ display: "block" }}>
                by {commit.commit.author.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "#a8a7a7" }}
              >
                {commitDate.toTimeString()}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  width: "45vw",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "#a8a7a7",
                }}
              >
                {commit.sha}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

CommitList.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
};

export default CommitList;
