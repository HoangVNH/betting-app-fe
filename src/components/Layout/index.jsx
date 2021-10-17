import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            pt: 8,
            pb: 6,
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
}
