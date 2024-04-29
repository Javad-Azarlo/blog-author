import { useQuery } from "@apollo/client";
import React from "react";
import {GET_BLOG_INFO} from "../../GraphQl/GraphQl";
import { Grid } from "@mui/material";
import CardEl from "../Shared/CardEl";
import Loader from "../Shared/Loader"

function Blog() {
  const { data, error, loading } = useQuery(GET_BLOG_INFO);
  console.log(data);
  if (loading) return <h1>{<Loader/>}</h1>;
  return (
    <>
      {loading && <h1>loading ...</h1>}
      <Grid container spacing={2}>
        {data.posts.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CardEl {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Blog;
