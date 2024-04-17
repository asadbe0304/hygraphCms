import Head from "next/head";
import Layout from "./../Layout/index"
import { Hero, Sidebar, Content, Loader } from "../components";
import { Box } from "@mui/material";
import { BlogService } from "../services/blog.service";
import { BlogType } from "../interfaces/blog.interfaces";
import { GetServerSideProps } from "next";
import SEO from "./../../src/Layout/seo/index";
import { useEffect, useState } from "react";


export default function IndexPage({ blogs, categories }: HomePageProps) {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Misol uchun, yuklash tugaganda 3 sekund kutib, keyin yuklashni tugatish
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {
        loading ? (<Loader />) : (
          <SEO>
            <Layout>
              <Head>
                <meta name="description" content="Blog app" />
                <title>
                  Blog App
                </title>
              </Head>
              <Hero blogs={blogs.slice(0, 3)} />
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px', background: 'black', flexDirection: { xs: 'column', md: 'row' } }}>
                <Sidebar blogs={blogs.slice(0, 2)} categories={categories} />
                <Content blogs={blogs} />
              </Box>
            </Layout>
          </SEO>
        )
      }
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogService.getAllBlogs();
  const categories = await BlogService.getCategories();

  return {
    props: {
      blogs,
      categories,
    }
  }
}

interface HomePageProps {
  blogs: BlogType[];
  categories: BlogType[];
}