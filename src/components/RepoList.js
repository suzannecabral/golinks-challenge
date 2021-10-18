import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
import testReposGithub from "../api/testReposGithub.json";

// const useStyles = makeStyles({
//   ellipsis: {
//     border: "1px solid blue",
//   },
// });

const RepoList = () => {
  // const classes = useStyles();
  const [orgRepos, setOrgRepos] = useState([]);
  const getRepos = () => {
    // axios
    //   .get("https://api.github.com/orgs/netflix/repos", {
    //     headers: {
    //       // TODO: how to get OAUTH_TOKEN
    //       Authorization: `token ${process.env.OAUTH_TOKEN}`,
    //     },
    //   })
    //   .then((res) => {
    //     setOrgRepos(res.data);
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
    setOrgRepos(testReposGithub);
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
