import { Typography, List, ListItem, ListItemText } from "@mui/material";
import React, { useState, useEffect } from "react";

// import { makeStyles } from "@mui/styles";
import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
// import testReposGithub from "../api/testReposGithub.json";

// const useStyles = makeStyles({
//   ellipsis: {
//     border: "1px solid blue",
//   },
// });

const RepoList = () => {
  // const classes = useStyles();
  const [orgRepos, setOrgRepos] = useState([]);
  const getRepos = () => {
    axios
      .get("https://api.github.com/orgs/netflix/repos", {
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
    <div>
      <Typography variant="h5" component="h2">
        Repos:
      </Typography>
      <List dense>
        {orgRepos.map((repo) => {
          return (
            <ListItem key={repo.id}>
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
                dense
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default RepoList;
