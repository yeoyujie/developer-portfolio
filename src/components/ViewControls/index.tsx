"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ViewMode } from "@/types";

interface ViewControlsProps {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  numArticles: number;
  setNumArticles: (numArticles: number) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#80DED9",
    },
  },
});

export function ViewControls({
  viewMode,
  setViewMode,
  numArticles,
  setNumArticles,
}: ViewControlsProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginBottom: "16px", marginLeft: "10px", marginRight: "10px" }}
      >
        <Tabs
          value={viewMode}
          onChange={(event, newValue) => setViewMode(newValue)}
        >
          <Tab label="Card View" value="card" sx={{ color: "white" }} />
          <Tab label="Tab View" value="tab" sx={{ color: "white" }} />
        </Tabs>
        <Tabs
          value={numArticles}
          onChange={(event, newValue) => setNumArticles(newValue)}
        >
          <Tab label="15" value={15} sx={{ color: "white" }} />
          <Tab label="20" value={20} sx={{ color: "white" }} />
          <Tab label="25" value={25} sx={{ color: "white" }} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
