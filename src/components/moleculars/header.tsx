import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AppBar, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Summary from "../../tabs/Summary";
import Graph from "../../tabs/Graph";
import List from "../../tabs/List";
import Setting from "../../tabs/Setting";
import YearMonthSelector from "./YearMonthSelector";

const Header = () => {
  const [value, setValue] = useState("summary");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <AppBar position="static">
          <YearMonthSelector />
          <TabList
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="まとめページ" value="summary" />
            <Tab label="グラフページ" value="graph" />
            <Tab label="リストページ" value="list" />
            <Tab label="設定ページ" value="setting" />
          </TabList>
        </AppBar>
        <TabPanel value="summary">
          <Summary />
        </TabPanel>
        <TabPanel value="graph">
          <Graph />
        </TabPanel>
        <TabPanel value="list">
          <List />
        </TabPanel>
        <TabPanel value="setting">
          <Setting />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Header;
