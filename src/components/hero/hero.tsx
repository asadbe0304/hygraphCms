import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography, Button } from "@mui/material";
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { HeroProps } from './props.hero';
import { calculatedEstimatedTime } from '../../helpers/time.format';
import Link from 'next/link';

const hero = ({ blogs }: HeroProps) => {

  return (
    <>
      <Box width={'100%'} height={'90vh'} sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Carousel
          infinite={true}
          showDots={true}
          ssr={true}
          autoPlay
          autoPlaySpeed={4400}
          responsive={{
            mobile: {
              breakpoint: { max: 4000, min: 0 },
              items: 1
            }
          }}
        >
          {
            blogs.map(item => (
              <Box key={item.id} sx={{ display: "flex", gap: "10px", position: "relative", borderRadius: "10px", width: "98%", height: "90vh" }}>
                <Image src={item.image.url} priority={true} alt={item.title} fill style={{ objectFit: 'cover', borderRadius: "10px", marginRight: "10px", marginLeft: "10px", zIndex: 99, opacity: 0.3 }} />
                <Link href={`blog/${item.slug}`} >
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgb(0,0,0, 0.5)',
                  }}>
                    <Box width={{ xs: '100%', xl: '70%' }} position={'relative'} sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: { xs: '10px', md: '50px' } }} color={'#FFF'} zIndex={999}>
                      <Typography variant='h5' sx={{ fontSize: { xs: '30px', md: '50px', color: '#FFF' } }}>
                        {item.title}
                      </Typography>
                      <Typography variant='h5' sx={{ fontSize: { xs: '25px', md: '30px', color: '#FF5' } }}>
                        {item.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px', gap: '10px' }}>
                        <Avatar alt='Asadbek' src={item.profile.url} />
                        <Box>
                          <Typography variant='h5'>{item.asadbek}</Typography>
                          <Box sx={{ fontSize: '14px' }}>
                            {item.createdAt.slice(0, 10)} ,  {calculatedEstimatedTime(item.desciption.text)} min read
                          </Box>
                          <Button variant={"contained"} sx={{ width: '100%', marginTop: '10px', background: '#7000FF' }} aria-label='read more button'>
                            Read more
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Box>

            ))
          }
        </Carousel>
      </Box>
    </>
  );
};

export default hero;