"use client";

import { Button, ButtonGroup, Box } from "@mui/material";
import { ViewMode } from "@/types";

interface ViewControlsProps {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  numArticles: number;
  setNumArticles: (numArticles: number) => void;
}

export function ViewControls({
  viewMode,
  setViewMode,
  numArticles,
  setNumArticles,
}: ViewControlsProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ marginBottom: "16px", marginLeft: "10px", marginRight: "10px" }}
    >
      <ButtonGroup variant="contained">
        <Button
          onClick={() => setViewMode("card")}
          color={viewMode === "card" ? "primary" : "inherit"}
        >
          Card View
        </Button>
        <Button
          onClick={() => setViewMode("tab")}
          color={viewMode === "tab" ? "primary" : "inherit"}
        >
          Tab View
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button
          onClick={() => setNumArticles(15)}
          color={numArticles === 15 ? "primary" : "inherit"}
        >
          15
        </Button>
        <Button
          onClick={() => setNumArticles(20)}
          color={numArticles === 20 ? "primary" : "inherit"}
        >
          20
        </Button>
        <Button
          onClick={() => setNumArticles(25)}
          color={numArticles === 25 ? "primary" : "inherit"}
        >
          25
        </Button>
      </ButtonGroup>
    </Box>
  );
}
