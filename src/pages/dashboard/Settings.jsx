import AboutMeText from "../../components/dashboard/settings/AboutMeText";
import DashboardHobby from "../../components/dashboard/settings/DashboardHobby";
import DashboardSkillAdd from "../../components/dashboard/settings/DashboardSkillAdd";
import EmailUpdate from "../../components/dashboard/settings/EmailUpdate";
import HomePageHeadingSubtitle from "../../components/dashboard/settings/HomePageHeadingSubtitle";
import HomepageHeadingTitle from "../../components/dashboard/settings/HomepageHeadingTitle";
import Motivation from "../../components/dashboard/settings/Motivation";
import ProfileImage from "../../components/dashboard/settings/ProfileImage";
import ResumeLinkUpdate from "../../components/dashboard/settings/ResumeLinkUpdate";
import SocialLinks from "../../components/dashboard/settings/SocialLinks";
import { addProjectStyles } from "../../styles";

const Settings = () => {
  return (
    <main className="pb-32 pt-10">
      <div className="bg-slate-100 px-8 lg:px-14 py-5 lg:py-20 border rounded-2xl bg-opacity-50 mt-14">
        <h1 className={`${addProjectStyles.headingText}`}>My Profile</h1>
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
          <SocialLinks />
        </>
      </div>
    </main>
  );
};

export default Settings;
