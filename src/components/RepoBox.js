import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import { makeStyles } from "@mui/styles";
import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
// import testReposGithub from "../api/testReposGithub.json";

const RepoBox = (props) => {
  const { commitsUrl, setCommitsUrl, commitsLoading, setCommitsLoading } =
    props;

  // TODO: make org changeable
  const [orgUrl, setOrgUrl] = useState(
    "https://api.github.com/orgs/netflix/repos"
  );
  const [orgRepos, setOrgRepos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const commitsLoadingPromise = (resolve, reject) => {
  //   resolve(true);
  //   reject(new Error("Error Loading Commit List for Selected Repo"));
  // };

  // function resolveAfter2Seconds() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       setCommitsLoading(false);
  //       resolve("resolved");
  //     }, 2000);
  //   });
  // }
  // const resolveCommitLoading = () => {
  //   return new Promise((resolve) => {
  //     setCommitsLoading(false);
  //     resolve("resolved");
  //   });
  // };

  const handleListClick = (e, idx) => {
    setSelectedIndex(idx);

    // remove /{sha} from commits_url
    const newUrl = orgRepos[idx].commits_url;
    setCommitsUrl(newUrl.substr(0, newUrl.lastIndexOf("/") - 1));
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
    getRepos();
  }, []);

  return (
    <Box>
      <Typography variant="h5" component="h2">
        Repos:
      </Typography>
      <List sx={{ overflowY: "scroll" }}>
        {orgRepos.map((repo, idx) => {
          return (
            <ListItemButton
              key={repo.id}
              selected={selectedIndex === idx}
              onClick={(e) => handleListClick(e, idx)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "spaceBetween",
                  width: "140px",
                }}
              >
                <Box>
                  <Typography variant="caption">
                    {repo.stargazers_count.toLocaleString("en-US")}
                  </Typography>
                  <StarIcon />
                </Box>
                <Box>
                  <Typography variant="caption">
                    {repo.forks.toLocaleString("en-US")}
                  </Typography>
                  <AccountTreeIcon />
                </Box>
              </Box>
              <Typography
                variant="subtitle2"
                display="block"
                sx={{ display: "block", marginRight: "12px" }}
              >
                /${repo.name}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{
                  display: "block",
                  width: "30vw",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {repo.description ? repo.description : "(no description)"}
              </Typography>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

RepoBox.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
  commitsLoading: propTypes.bool.isRequired,
  setCommitsLoading: propTypes.func.isRequired,
};

export default RepoBox;
