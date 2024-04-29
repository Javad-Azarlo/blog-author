import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENT_POST } from "../../GraphQl/GraphQl";
import { Grid, Avatar, Box, Typography } from "@mui/material";

function Comment({ slug }) {
  const { loading, data } = useQuery(GET_COMMENT_POST, {
    variables: { slug },
  });
  if (loading) return null;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{item.name[0]}</Avatar>
              <Typography
                component="span"
                variant="p"
                fontWeight={700}
                mt={1}
                mr={1}
              >
                {item.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comment;
