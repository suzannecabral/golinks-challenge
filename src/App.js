import React from "react";
import { Typography, Box } from "@mui/material";
import OrgSelect from "./components/OrgSelect";
import RepoList from "./components/RepoList";
import CommitFrame from "./components/CommitFrame";
import OrgContext from "./contexts/OrgContext";
import RepoContext from "./contexts/RepoContext";
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
        <RepoContext.Provider>
          <OrgContext.Provider>
            <RepoList
              commitsUrl={commitsUrl}
              setCommitsUrl={setCommitsUrl}
              commitsLoading={commitsLoading}
              setCommitsLoading={setCommitsLoading}
            />
          </OrgContext.Provider>
          <CommitFrame
            commitsUrl={commitsUrl}
            setCommitsUrl={setCommitsUrl}
            commitsLoading={commitsLoading}
            setCommitsLoading={setCommitsLoading}
          />
        </RepoContext.Provider>
      </Box>
    </Box>
  );
}

export default App;
