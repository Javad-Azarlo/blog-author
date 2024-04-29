import React from "react";
import HomePage from "./Components/Home/HomePage";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./Components/Blog/BlogPage";
import AuthorPage from "./Components/Authore/AuthorPage"
function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage/>}/>
        <Route path="/authors/:slug" element={<AuthorPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
