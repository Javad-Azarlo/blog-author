import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUT_INFO } from "../../GraphQl/GraphQl";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../Shared/CardEl";
import Loader from "../Shared/Loader"

function AuthorPage() {
  const { slug } = useParams();
  console.log(slug);
  const { loading, data, errors } = useQuery(GET_AUT_INFO, {
    variables: { slug },
  });

  if (loading) return <h3><Loader/></h3>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data.author.description.html),
          }}
        ></div>
      </Grid>
      <Grid item xs={12} mt={6}>
        <Typography component="h3" variant="h5" fontWeight={700}>
          مقالات {data.author.name}
        </Typography>
      </Grid>
      <Grid container spacing={2} mt={2}>
        {data.author.posts.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <CardEl title={item.title} slug={item.slug} coverPhoto={item.coverPhoto}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AuthorPage;
