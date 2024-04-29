import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authore from "../Authore/Authore";
import Blog from "../Blog/Blog";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight="700">
            نویسنده ها
          </Typography>
          <Authore />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight="700">
            مقالات
          </Typography>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
