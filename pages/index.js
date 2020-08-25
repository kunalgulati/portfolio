import Grid from '@material-ui/core/Grid'
/** Custom Modules */
import NavBar from '../components/NavBar';
import DescriptionList from '../components/index/Description'
import SkillSet from '../components/index/SkillSet'
import WorkExperience from '../components/index/WorkExperience'
import Education from '../components/index/Education'
import ProgrammingProjects from '../components/index/ProgrammingProjects'

import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <NavBar />
      <Grid container spacing={3}>
        <DescriptionList />
        <ProgrammingProjects />
        <SkillSet/>
        <WorkExperience/>
        <Education/>
      </Grid>
      <Footer />
    </>

  )
}
