import { useState } from "react";

import styled from "styled-components";

import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";

export default function Task({ task }) {
  const [visible, setVisible] = useState("hidden");

  function showCloseIcon() {
    setVisible("visible");
  }

  function hideCloseIcon() {
    setVisible("hidden");
  }

  return (
    <ListItem>
      <TaskCard onMouseEnter={showCloseIcon} onMouseLeave={hideCloseIcon}>
        <CropSquareIcon />
        {task}
        <CloseIcon visibility={visible} />
      </TaskCard>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TaskCard = styled(Card)`
  padding: 1em;
  display: flex;
`;
