import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORE_INFO } from "../../GraphQl/GraphQl";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader"
function Authore() {
  const { loading, data, error } = useQuery(GET_AUTHORE_INFO);
  if (loading) return <h3><Loader/></h3>;
  if (error) return <h3>{error.message}</h3>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0 ,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((item , index) => (
        <React.Fragment key={item.id}>
          <Grid item xs={12} padding={2}>
            <Link to={`/authors/${item.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={item.avatar.url} sx={{ ml: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {item.name}
              </Typography>
            </Link>
          </Grid>
          {index !== item.length-1 &&
          <Grid item xs={12}>
            <Divider variant='middle'/>
          </Grid>
          }
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authore;
