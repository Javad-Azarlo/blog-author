import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import { GET_POST_INFO } from "../../GraphQl/GraphQl";
import { Typography, Grid, Container, Avatar, Box } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import sanitizeHtml from "sanitize-html";
import CommentPage from "../Comment/CommentPage";
import Comment from "../Comment/Comment";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  console.log(slug);
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading)
    return (
      <h3>
        <Loader />
      </h3>
    );
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRounded
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography
              component="p"
              color="text.secondary"
              variant="p"
              fontWeight={700}
            >
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentPage slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comment slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
