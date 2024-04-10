import React from 'react';
import Layout from "./../../Layout/index"
import { Avatar, Box, Button, Typography } from '@mui/material';
import SEO from './../../Layout/seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdPhone, MdMail, MdTextsms, MdBackspace } from 'react-icons/md';
import Img  from "./../../assets/p.jpg"
export default function AuthorBlog() {

  const router = useRouter()
  const GoBack = () => {
    router.push("/")
  }
  return (
    <SEO>
      <Layout>
        <Box sx={{ display: "flex", width: "100%", alignItems: 'center', flexDirection: "column", marginBottom: "20px" }}>
          <Box sx={{ display: "flex", width: "100%", alignItems: 'center', flexDirection: "column" }}>

            <Typography variant='h5' sx={{ fontSize: { xs: '30px', md: '50px', color: '#3B82F6' }, marginTop: "40px" }}>
              Author
            </Typography>
            <Image src={Img} alt="author blog picture" style={{ borderRadius: "50%", background: "black", marginTop: '35px' }} width={100} height={100} />
            <Typography variant='h5' sx={{ fontSize: { xs: '15px', md: '30px', color: '#3B82F6' }, marginTop: "20px" }}>
              Asadbek Axmadqulov
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '10px', marginTop: "20px" }}>
              <Typography sx={{ fontSize: { xs: '12px', md: '18px', color: '#fff' }, marginTop: "0px", marginBottom: "10px", fontFamily: "monospace" }}>
                Public Story 12
              </Typography>
            </Box>
            <Box sx={{ display: "flex", position: 'relative', alignItems: 'center', flexDirection: "column ", width: "95%", background: "#041722", borderRadius: "8px", paddingLeft: "10px", paddingRight: "10px" }}>
              <Typography sx={{ fontSize: { xs: '14px', md: '20px', color: '#fff' }, marginTop: "10px", marginBottom: "10px", fontFamily: "monospace" }}>
                About Author
              </Typography>
              <p style={{ marginTop: "10px", marginBottom: "10px", color: "#FFF" }}>
                I have rich experience in web application building and customization. Also I am good at Html, Css & Sass, Javascript, bootstrap, React-js. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea
              </p>
              <p style={{ marginTop: "10px", marginBottom: "30px", color: "#fff" }}>
                As a frontend developer, I am passionate about creating dynamic and interactive web applications. With a strong foundation in frontend development including HTML, CSS and JavaScript, I am experienced in developing responsive web interfaces that meet user requirements.
                <br />
                I m using React and I feel comfortable using various JavaScript libraries and frameworks such as Nextjs and have experience using version control systems such as Git. My strong problem solving skills and attention to detail have allowed me to quickly identify and resolve issues during development.
                <br />
                I am committed to learning and improving my skills as a developer and contributing to the teams success. I am always learning and adapting to new technologies to keep up with the latest industry trends.
              </p>
              <Button onClick={GoBack} sx={{
                position: "absolute", bottom: "10px", right
                  : "10px", zIndex: "4", background: "#3B82F6", color: "#fff"
              }}>
                <MdBackspace />
              </Button >
            </Box>
          </Box>
        </Box>
      </Layout>
    </SEO>
  );
};


