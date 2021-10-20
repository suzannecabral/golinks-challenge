import React from "react";
import { Typography, Box } from "@mui/material";
import RepoBox from "./components/RepoBox";
// import RepoList from "./components/RepoList";
// import RepoGrid from "./components/RepoGrid";
import CommitList from "./components/CommitList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [selectedRepo, setSelectedRepo] = React.useState({});
  const [commitsUrl, setCommitsUrl] = React.useState(
    "https://api.github.com/repos/Netflix/astyanax/commits"
  );
  const [commitsLoading, setCommitsLoading] = React.useState(false);

  // TODO: transition animations
  return (
    <Box>
      {/* TODO: org title from api */}
      <Box sx={{ display: "Flex", flexDirection: "row" }}>
        <Typography variant="h3" component="h1">
          Netflix
        </Typography>
        {/* <OrgSelect /> */}
      </Box>
      <Box sx={{ display: "Flex" }}>
        <RepoBox
          commitsUrl={commitsUrl}
          setCommitsUrl={setCommitsUrl}
          commitsLoading={commitsLoading}
          setCommitsLoading={setCommitsLoading}
        />
        {/* <RepoList
          commitsUrl={commitsUrl}
          setCommitsUrl={setCommitsUrl}
          commitsLoading={commitsLoading}
          setCommitsLoading={setCommitsLoading}
        /> */}
        {/* <RepoGrid
          commitsUrl={commitsUrl}
          setCommitsUrl={setCommitsUrl}
          commitsLoading={commitsLoading}
          setCommitsLoading={setCommitsLoading}
        /> */}
        <CommitList
          commitsUrl={commitsUrl}
          setCommitsUrl={setCommitsUrl}
          commitsLoading={commitsLoading}
          setCommitsLoading={setCommitsLoading}
        />
      </Box>
    </Box>
  );
}

export default App;
