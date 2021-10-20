import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// import { makeStyles } from "@mui/styles";
import axios from "axios";
// import shortid from "shortid";
// import dotenv from "dotenv";
// import testReposGithub from "../api/testReposGithub.json";

const RepoList = (props) => {
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
    </Box>
  );
};

RepoList.propTypes = {
  commitsUrl: propTypes.string.isRequired,
  setCommitsUrl: propTypes.func.isRequired,
  commitsLoading: propTypes.bool.isRequired,
  setCommitsLoading: propTypes.func.isRequired,
};

export default RepoList;
