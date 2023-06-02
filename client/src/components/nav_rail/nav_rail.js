import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import "./nav_rail.css";
import Button from "@mui/material/Button";
import "../../theme/theme.dark.css";


export const NavigationRailDark = () => {
 
  const buttonsArray = ["feed", "social", "wallet", "charts"];
  return (
    <div className="navigation-rail-dark clip-contents">
      <div className="destinations-dark clip-contents">
        <div className="segment-2">
          <Stack direction="column" spacing={3}>
            {buttonsArray.map((item) => {
              return (
                <>
                  <Button
                    variant="outlined"
                    className="buttons"
                    style={{
                      color: "var(--md-sys-color-on-secondary-container)",
                      backgroundColor:
                        "var(--md-sys-color-secondary-container)",
                    }}
                  >
                    {item}
                  </Button>
                </>
              );
            })}
          </Stack>
        </div>
      </div>
    </div>
  );
};
