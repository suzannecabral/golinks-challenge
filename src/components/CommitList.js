import React, { useState, useEffect } from "react";
import { Typography, List, ListItem } from "@mui/material";
// import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
import testCommitsGithub from "../api/testCommitsGithub.json";

const RepoList = () => {
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
    setOrgRepos(testCommitsGithub);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      <Typography variant="h5" component="h2">
        Commits:
      </Typography>
      <List dense>
        {orgRepos.map((repo) => {
          return (
            <ListItem key={repo.id}>
              ({repo.allow_forking ? repo.forks_count : 0}) {repo.name}:{" "}
              {repo.description}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default RepoList;
