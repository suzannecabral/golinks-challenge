import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";

// import { makeStyles } from "@mui/styles";
import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
// import testReposGithub from "../api/testReposGithub.json";

const RepoList = () => {
  // #TODO: make this changeable
  const [orgUrl, setOrgUrl] = useState(
    "https://api.github.com/orgs/netflix/repos"
  );
  const [orgRepos, setOrgRepos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListClick = (e, idx) => {
    setSelectedIndex(idx);
  };

  const getRepos = () => {
    axios
      .get(orgUrl, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GH_PAT}`,
        },
      })
      .then((res) => {
        setOrgRepos(res.data);
        console.log("API loaded repo list");
      })
      .catch((err) => {
        console.log("Error loading repo list");
        return err;
      })
      .finally(() => {
        console.log("API request finished");
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Box>
      <Typography variant="h5" component="h2">
        Repos:
      </Typography>
      <List dense>
        {orgRepos.map((repo, idx) => {
          return (
            <ListItemButton
              key={repo.id}
              selected={selectedIndex === idx}
              onClick={(e) => handleListClick(e, idx)}
            >
              <ListItemText
                secondaryTypographyProps={{
                  // display: "block",
                  width: "45vw",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                primary={`/${repo.name}`}
                secondary={
                  repo.description ? repo.description : "(no description)"
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default RepoList;
