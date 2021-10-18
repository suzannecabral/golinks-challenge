import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
import testCommitsGithub from "../api/testCommitsGithub.json";

// const useStyles = makeStyles({
//   ellipsis: {
//     border: "1px solid blue",
//   },
// });

const RepoList = () => {
  // const classes = useStyles();
  const [repoCommits, setRepoCommits] = useState([]);
  const getCommits = () => {
    // axios
    //   .get("https://api.github.com/orgs/netflix/repos", {
    //     headers: {
    //       // TODO: how to get OAUTH_TOKEN
    //       Authorization: `token ${process.env.OAUTH_TOKEN}`,
    //     },
    //   })
    //   .then((res) => {
    //     setRepoCommits(res.data);
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
    setRepoCommits(testCommitsGithub);
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <div>
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
                // secondary={
                //   commit.description ? commit.description : "(no description)"
                // }
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
