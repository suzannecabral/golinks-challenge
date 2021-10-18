import React from "react";
import OrgSelect from "./components/OrgSelect";
import RepoList from "./components/RepoList";

function App() {
  // TODO: Material Theme
  // TODO: transition animations

  return (
    <div>
      {/* TODO: org title from api */}
      <h1>Netflix</h1>
      <OrgSelect />
      <RepoList />
    </div>
  );
}

export default App;
