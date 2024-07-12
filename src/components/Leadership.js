import React from 'react';
import Header from "./Header";
import Footer from "../global/Footer";
import HeadingGlobal from '../global/HeadingGlobal';
import { Box, Typography, Avatar } from '@mui/material';
import bharti from './../assets/bharti.jpg'
import siddhart from './../assets/Siddhartha.jpeg'
import anil from './../assets/anil.png';
import leadfirst from './../assets/leadfront.jpg';
import bhartagg from './../assets/Bhartagg.jpg'
import ravi from './../assets/ravi.jpg'
import Sumana from './../assets/Sumana.jpg'
import Maheshwari from './../assets/Maheshwari.jpg'
import saurabh from './../assets/saurabh.jpg'
import mahesh from './../assets/mahesh.jpg'
import anita from './../assets/anita.jpg'

const Leadership = () => {
    const textColor = '#5b3c14';

    return (
        <>
            <Header />
            <Box
                component="img"
                src={leadfirst}
                alt="Leadership Introduction"
                sx={{
                    width: '100%',
                    height: { lg: '500px', xs: '300px' },
                    objectFit: 'cover'
                }}
            />
            <Box sx={{ p: { lg: '50px 40px', xs: '40px 20px' }, color: textColor }}>
                <HeadingGlobal title="WHO WE ARE" />
            
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Mr. Siddhartha Pareek" 
                    src={siddhart} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Mr. Siddhartha Pareek
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                 A passionate social worker, Mr. Siddhartha Pareek’s career span of 3 decades as a Cop exposed him to the daily travails faced by marginalized youth in the society and helped him conceptualize several social projects run by Delhi Police, Prayas JAC Society & Delhi Commission for Protection of Child Rights (DCPCR) and Mewat Rural Education Programme. Inspired by his spiritual master, Baba Sevanand Ji Maharaj’s teachings on “SELFLESS SERVICE”, Mr. Pareek started his dream initiative of forming SEVA Srijan Foundation to support marginalized children and youth realize their life dreams.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Dr. R.C. Maheshwari" 
                    src={Maheshwari} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Dr. R.C. Maheshwari
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
              An alumnus of IIT, Kharagpur, Dr. R.C. Maheshwari, Ex-Vice Chancellor, SDAU has done hid doctoral degree in Agricultural Engineering. He held the post of Asst. Director General (Technical Coordination) at the Indian Council of Agricultural Research, New Delhi for more than half a decade. In his brief stint as Vice Chancellor, SDAU from 2006 to 2011 he has several innovative initiatives to his credit like introducing the ‘seed village’ concept and ‘my village’ concept and playing key role in the establishment of a college of Renewable Energy and Environmental Engineering.
His passion for social work has driven him in his dynamic involvement with many renowned NGOs working towards the cause of education, women empowerment and skill development. 

                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Bharti Pareek" 
                    src={bharti} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Mrs. Bharti Pareek
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
               Mrs. Bharti Pareek, a dedicated and compassionate social worker cum educationist possesses three decades of rich experience in the field of child education and counselling. Her natural flair to reach every student and inculcate a love for learning in them was the purpose behind her joining SEVA Srijan Foundation and lead the “Child-focused” activities run by the Organization. Her strong emotional bonding with the students helps in boosting creativity and confidence in them.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Dr. (Ms.) Sumana Raychaudhuri" 
                    src={Sumana} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Dr. (Ms.) Sumana Raychaudhuri
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                      Doctorate in Law and an Associate Member of the Institute of Company Secretaries of India (ICSI) possesses more than two decades’ experience in Legal and Secretarial arena having headed several national level Corporates as Company Secretary & Compliance Officer and as Legal Head, exclusively handling legal and secretarial matters. She is an Independent Director in several listed and public limited companies. Being a passionate social worker, she is associated with several NGOs of national repute. Presently, she is a Group Partner in SEVA Group of organisations and an active volunteer at SEVA Srijan Foundation Think Tank.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Anil Kumar" 
                    src={anil} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Anil Kumar
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                   A Senior software engineer possessing more than 10 years of experience of being associated with a fortune 500 company. He has completed BCA from MDU and MCA from BIT Mesra. A dedicated social worker, a promising software professional and a sincere educator, his commitment towards SEVA Srijan Foundation reflects from his relentless efforts in developing the Skill Development programme.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Bharti Agrawal" 
                    src={bhartagg} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Bharti Agrawal
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        Currently Working as Scientific Executive-1 in Anusandhan National Research Foundation (ANRF) a statuary body under Department of Science and Technology, New Delhi.
                        Volunteering as a craft instructor at Srijan Seva foundation (SSF) offers a unique opportunity to make a meaningful impact on the community by empowering children through creative expression. As a craft instructor, I can provide valuable skills and a therapeutic outlet for those in need, fostering creativity, boosting self-esteem, and promoting mental well-being. Additionally, I will gain personal fulfilment from seeing the positive changes in children lives, develop my own teaching and interpersonal skills, and contribute to the foundation mission of creating a more inclusive and supportive society.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Ravi Kumar" 
                    src={ravi} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Ravi Kumar
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                Bachelor's degree in Interior Design, I am a passionate and creative Interior Designer. My academic background equips me with the knowledge and skills to transform spaces into aesthetically pleasing and functional environments. Driven by a commitment to design excellence and client satisfaction, I bring innovative ideas and meticulous attention to detail to every project, ensuring that each space reflects the unique personality and needs of its occupants.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Mahesh Prajapati" 
                    src={mahesh} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                      Mahesh Prajapati
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
             Mr. Mahesh’s passion for social work is the driving force behind his association with SEVA Srijan Foundation as a Volunteer to teach Art & Craft. He did his MFA in Sculpture from BHU.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Anita Prajapati" 
                    src={anita} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                      Anita Prajapati
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
          Mrs. Anita Prajapati possessing BFA in Pottery Ceramics from BHU is associated with SEVA Srijan Foundation as a Volunteer teaching Art & Craft to the students.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Dr. Saurabh Agarwal" 
                    src={saurabh} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                      Dr. Saurabh Agarwal
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
         Dr. Saurabh Agarwal, having Doctoral Degree in Bio-technology is working as a project coordinator in the Technology Development Board, a statutory body DST, new Delhi. Currently he is associated with SEVA Srijan Foundation as a Volunteer.
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Leadership;
