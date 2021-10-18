import React from "react";
import {
  Typography,
  Box,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import OrgSelect from "./components/OrgSelect";
import RepoList from "./components/RepoList";
import CommitList from "./components/CommitList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === "dark" && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === "dark" && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === "light"
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: "#fff",
//             secondary: grey[500],
//           }),
//     },
//   },
// });

// const darkModeTheme = createTheme(getDesignTokens("dark"));

function App() {
  // TODO: Material Theme
  // TODO: transition animations
  const theme = useTheme();
  return (
    // <ThemeProvider theme={darkModeTheme}>
    <div>
      {/* <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          This is a {theme.palette.mode} mode theme with custom palette
        </Box> */}
      {/* TODO: org title from api */}
      <Box sx={{ display: "Flex", flexDirection: "row" }}>
        <Typography variant="h3" component="h1">
          Netflix
        </Typography>
        {/* <OrgSelect /> */}
      </Box>
      <Box sx={{ display: "Flex" }}>
        <RepoList />
        <CommitList />
      </Box>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
