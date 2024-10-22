import AboutMeText from "../../components/dashboard/settings/AboutMeText";
import DashboardHobby from "../../components/dashboard/settings/DashboardHobby";
import DashboardSkillAdd from "../../components/dashboard/settings/DashboardSkillAdd";
import EmailUpdate from "../../components/dashboard/settings/EmailUpdate";
import HomePageHeadingSubtitle from "../../components/dashboard/settings/HomePageHeadingSubtitle";
import HomepageHeadingTitle from "../../components/dashboard/settings/HomepageHeadingTitle";
import Motivation from "../../components/dashboard/settings/Motivation";
import ProfileImage from "../../components/dashboard/settings/ProfileImage";
import ResumeLinkUpdate from "../../components/dashboard/settings/ResumeLinkUpdate";
import { addProjectStyles } from "../../styles";

const Settings = () => {
  return (
    <main className="pb-32">
      <h1 className={`${addProjectStyles.headingText} mt-14`}>Profile</h1>
      <>
        <ProfileImage />
        <HomepageHeadingTitle />
        <HomePageHeadingSubtitle />
        <AboutMeText />
        <Motivation />
        <EmailUpdate />
        <ResumeLinkUpdate />
        <DashboardSkillAdd />
        <DashboardHobby />
        {/* <SocialLinks /> */}
      </>
    </main>
  );
};

export default Settings;
