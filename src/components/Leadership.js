import React from 'react';
import Header from "./Header";
import Footer from "../global/Footer";
import HeadingGlobal from '../global/HeadingGlobal';
import { Box, Typography, Avatar,Divider } from '@mui/material';
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
import frans from './../assets/fernan.jpg'
import sangeeta from './../assets/snageeta.jpg'
import jitender from './../assets/jitender.jpg'
import satish from './../assets/satish.png'
import anju from './../assets/anju.png'
import vish from './../assets/vish.png'
import vipul from './../assets/vipul.jpg'
import visnu from './../assets/visnu.jpg'

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
            <h1 style={{ textAlign: 'center', fontFamily: 'initial', color: '#5b3c14' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />FOUNDERS
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
            </h1>
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
           Mrs. Bharti Pareek, a dedicated and compassionate social worker cum educationist possesses three decades of rich experience in the field of child education and counselling. Her natural flair to reach every child and inculcate a love for learning in them was the driving force for her setting up SEVA Srijan Foundation and lead the “Child-focused” activities run by the Organization. Her strong emotional bonding with the students helps in boosting creativity and confidence in them. She played a key role in the "Mewat Rural Education Programme" (MREP) run by the Shri Ram Foundation in the most backward Mewat region of Haryana (in NCR) in 2010-2012 particularly in execution of the programme in Government Schools in Nuh, to improve the educational experience for primary children.
                    </Typography>
                </Box>
            </Box>
            <h1 style={{ textAlign: 'center', fontFamily: 'initial', padding: 20, color: '#5b3c14' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />OUR THINK TANK
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
            </h1>
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
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
            An alumnus of IIT, Kharagpur, Dr. R.C. Maheshwari, Ex-Vice Chancellor, SDAU has done hid doctoral degree in Agricultural Engineering. He held the post of Asst. Director General (Technical Coordination) at the Indian Council of Agricultural Research, New Delhi for more than half a decade. In his stint as Vice Chancellor, SDAU from 2006 to 2011 he has several innovative initiatives to his credit for rural development like introducing the ‘seed village’ concept and ‘my village’ concept and playing key role in the establishment of a college of Renewable Energy and Environmental Engineering.
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
                    alt="Mr. Vipul Kocher" 
                    src={vipul} 
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
                        Mr. Vipul Kocher
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
           Mr. Vipul Kocher is an ex-Adobe engineer and IIT alumnus with three decades of experience in Software Development and Testing industry. Apart from being  co-founder and CEO of AIEnsured/testAIng – an Artificial Intelligence (AI) governance, compliance, and testing product company, he is also responsible for Verity Software, a highly respected, niche player in the software testing training space. He is President of the Indian Testing – ISTQB Board, Convener of STEP-IN forum – Asia’s largest non-profit testers’ community, and National Convener of Indic Academy – a not-for-profit trust for preserving, protecting, and promoting all things concerning Indic civilization. He is closely associated with SEVA Srijan Foundation by actively participating in its activities.
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                    alt="Vishwajeet Ghoshal" 
                    src={vish} 
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
                     Mr. Vishwajeet Ghoshal
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
               Mr. Vishwajeet Ghoshal, a Child Rights & Social Development professional having over 24 years of working experiences (half of it in leadership positions) is a specialist in management, design and execution of qualitative & participatory research studies focusing on child sexual abuse and anti-trafficking issues. Former Joint Secretary & Director (Projects) of ‘Prayas Juvenile Aid Centre Society’, an NGO of national repute his expertise lies in desk/secondary research focuses on international/national conventions/laws/programs and studies focusing on access to justice and child protection. He has experience of interacting with the legal luminaries of nearly 80 countries on Article 51 (C) International Peace and Security (Constitution of India) at the International Chief Justice Conference in 2009. Apart from being Co-Founder of ‘Children Unbound Foundation’, a well-known child right organization, he is involved with SEVA Srijan Foundation for development of its Child Rights advocacy segment.
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
                    alt="Mr. Ashley Oswald Fernandez" 
                    src={frans} 
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
                       Mr. Ashley Oswald Fernandez
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                  An enthusiastic Educationist, visionary and a dreamer with nearly 4 decades of experience, both at National and International level, Mr. Ashley Fernandez believes in equitable and quality education for children irrespective of the social strata they belong. For him “education is a lifelong process of learn, unlearn and relearn” and no education can be complete without the key elements of holistic growth. In his current capacity as Principal of Gyan Kunj Public School, keeping in view NEP 2020 he familiarized the concept of integrated curriculum which is basically a mix of academics, extracurricular activities and Socio-Emotional Learning, Design Thinking, Numeracy & Literacy. Being committed to transforming education and achieving SDG 4 Goal, recently he has signed the COSCU Change Makers Manifesto.
                    </Typography>
                </Box>
            </Box>
            <h1 style={{ textAlign: 'center', fontFamily: 'initial', padding: 20, color: '#5b3c14' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />Volunteer Leaders 
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
            </h1>
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
                    alt="Vishnu Prakash Sharma"
                    src={visnu} 
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
                       Vishnu Prakash Sharma

                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                Mr. Vishnu Prakash Sharma, a Post-Graduate in Economics and a Retd. Economics Lecturer from Department of Education, Government of Delhi possesses nearly four decades of rich experience in the field of teaching. The founder of “Swayam Sudhar Samaj”, he is associated with SEVA Srijan Foundation since its inception.
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
         Dr. Saurabh Agarwal, having Doctoral Degree in Bio-technology is working as a project coordinator in the Technology Development Board, a statutory body DST, new Delhi. Currently he is associated with SEVA Srijan Foundation as a Volunteer.
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
                    alt="Jitender Kumar" 
                    src={jitender} 
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
                        Jitender Kumar
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
             Mr. Jitendra Kumar, a Mechanical Engineer having completed his MBA from IIM, Jitender Kumar possesses 17 years of versatile experience in the Information Technology sector and is currently working with IBM India Pvt Ltd. He is associated with SEVA Srijan Foundation as a Volunteer Leader helping underprivileged children learn computer skills.
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                            textAlign: { lg: 'justify', xs: 'justify' },
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
                    alt="Sangeeta Dixit" 
                    src={sangeeta} 
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
                        Sangeeta Dixit
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                Mrs. Sangeeta Dixit, a post graduate in Hindi is associated with SEVA Srijan Foundation as its Volunteer Leader. Having done her Sangeet Prabhakar in 2023, her deep commitment towards music found its way at SSF Delhi Centre where she holds regular Music classes for the children.
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
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
              Mr. Ravi Kumar, having done his B.Sc. science graduate is an Interior Designer by profession and a social worker by choice. He is associated with SEVA Srijan Foundation as a volunteer leader since its inception and is mainly involved in the sports activities.
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
                    alt="Satish Saini " 
                    src={satish} 
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
                     Satish Saini 
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
    Mr. Satish Saini is an entrepreneur with a penchant for social work. He is associated with SEVA Srijan Foundation as a Volunteer Leader from its initial years and is much involved in SSF’s various campaigns.
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
                    alt="Anju Saini" 
                    src={anju} 
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
                     Anju Saini
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            textAlign: { lg: 'justify', xs: 'justify' },
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        Mrs. Anju Saini, a passionate singer and music lover is associated with SEVA Srijan Foundation since its inception as a Volunteer Leader particularly tending to the needs of children who have a flair for music.
                    </Typography>
                </Box>
            </Box>
            
           
            
           
           
            <Footer />
        </>
    );
};

export default Leadership;
