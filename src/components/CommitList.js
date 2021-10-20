import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
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
  }, []);

  return (
    <Box>
      <Typography variant="h5" component="h2">
        Commits:
      </Typography>
      <List dense>
        {repoCommits.map((commit) => {
          return (
            <ListItem key={commit.id}>
              <ListItemText
                secondaryTypographyProps={{
                  width: "45vw",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                primary={commit.commit.author.name}
                secondary={commit.sha}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

CommitList.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
};

export default CommitList;
