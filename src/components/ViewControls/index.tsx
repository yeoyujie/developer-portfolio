'use client'

import { useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

type ViewMode = 'card' | 'tab';

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
    <Box display="flex" justifyContent="space-between">
      <ButtonGroup variant="contained">
        <Button
          onClick={() => setViewMode('card')}
          color={viewMode === 'card' ? 'primary' : 'inherit'}
        >
          Card View
        </Button>
        <Button
          onClick={() => setViewMode('tab')}
          color={viewMode === 'tab' ? 'primary' : 'inherit'}
        >
          Tab View
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button
          onClick={() => setNumArticles(5)}
          color={numArticles === 5 ? 'primary' : 'inherit'}
        >
          5
        </Button>
        <Button
          onClick={() => setNumArticles(10)}
          color={numArticles === 10 ? 'primary' : 'inherit'}
        >
          10
        </Button>
        <Button
          onClick={() => setNumArticles(25)}
          color={numArticles === 25 ? 'primary' : 'inherit'}
        >
          25
        </Button>
      </ButtonGroup>
    </Box>
  );
}
