import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import PropsContent from "../../content/PropsContent.json";
import VerhaalContent from "../../content/VerhaalContent.json";
import InkledingContent from "../../content/InkledingContent.json";
import TeamContent from "../../content/TeamContent.json";
import teamMembers from "../../content/TeamMembers.json";
import PropsInfo from "../../content/PropsInfo.json";

import { Grid, Avatar, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
          // color= {IntroContent.color}
          // backgroundColor= {IntroContent.backgroundColor}
          // border = {IntroContent.border}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />
      <ContentBlock
        direction="left"
        title={PropsContent.title}
        content={PropsContent.text}
        icon="graphs.svg"
        id="props"
      />
        <Grid container spacing={2}>
      {PropsInfo.map(prop => (
        <Grid item xs={12} sm={6} md={4} key={prop.name}>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
              <Avatar
                src={prop.imageUrl} 
                alt={prop.name} 
                style={{ height: '100px', width: '100px', borderRadius:'2px' }} 
              />
            </div>
            <div className="propInfo">
            <h3 style={{ textAlign: 'center' }}>{prop.name}</h3>
            <p style={{ textAlign: 'center' }}>{prop.description}</p>
            <div style={{ textAlign: 'center' }}>
            </div>
            </div>
        </Grid>
      ))}
    </Grid>
      <ContentBlock
        direction="right"
        title={VerhaalContent.title}
        content={VerhaalContent.text + VerhaalContent.text2}
        icon="product-launch.svg"
        id="verhaal"
      />
      <ContentBlock
        direction="left"
        title={InkledingContent.title}
        content={InkledingContent.text}
        icon="waving.svg"
        id="inkleding"
      />
      <ContentBlock
        direction="right"
        title={TeamContent.title}
        content={TeamContent.text}
        icon="waving.svg"
        id="team"
      />
         <Grid container spacing={2}>
      {teamMembers.map(member => (
        <Grid item xs={12} sm={6} md={4} key={member.name}>
          <div style= {{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
              <Avatar 
                src={member.imageUrl} 
                alt={member.name} 
                style={{ height: '200px', width: '200px' }} 
              />
            </div>
            <div className="memberName">
            <h3 style={{ textAlign: 'center' }}>{member.name}</h3>
            </div>
            <p style={{ textAlign: 'center' }}>{member.description}</p>
            <div style={{ textAlign: 'center' }}>
              <Link href={member.githubUrl} target="_blank"><GitHubIcon /></Link>
              <Link href={member.linkedinUrl} target="_blank"><LinkedInIcon /></Link>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Home;
