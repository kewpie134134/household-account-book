"use client";
import { useState } from "react";
import Header from "../components/moleculars/Header";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AppBar, Tab } from "@mui/material";
import { Box } from "@mui/system";
import Summary from "../tabs/Summary";
import Graph from "../tabs/Graph";
import List from "../tabs/List";
import Setting from "../tabs/Setting";
import { useRecoilValue } from "recoil";
import { monthState } from "@/globalStates/date/month";
import { yearState } from "@/globalStates/date/year";

export default function Page() {
  const [value, setValue] = useState("summary");

  // Recoil で値を read する際は useRecoilValue を使う
  const month = useRecoilValue(monthState);
  const year = useRecoilValue(yearState);
  console.log(`${year}年${month}月`);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Header />
      <TabContext value={value}>
        <AppBar position="static">
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
}
