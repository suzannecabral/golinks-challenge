import React, { useState, useEffect } from "react";
import axios from "axios";
import shortid from "shortid";
// import dotenv from "dotenv";
import testReposGithub from "../api/testReposGithub.json";

const RepoList = () => {
  const [orgRepos, setOrgRepos] = useState([]);
  let counter = 0;
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
    counter += 1;
    console.log(counter);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      <h2>Repos:</h2>
      <ol>
        {orgRepos.map((repo) => {
          return (
            <li key={repo.id}>
              ({repo.allow_forking ? repo.forks_count : 0}) {repo.name}:{" "}
              {repo.description}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RepoList;
