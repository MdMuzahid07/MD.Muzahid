import AboutMeText from "../../components/dashboard/settings/AboutMeText";
import HomepageHeadingTitle from "../../components/dashboard/settings/HomepageHeadingTitle";
import ProfileImage from "../../components/dashboard/settings/ProfileImage";
import SocialLinks from "../../components/dashboard/settings/SocialLinks";
import { addProjectStyles } from "../../styles";

const Settings = () => {
  return (
    <main className="mb-32">
      <h1 className={`${addProjectStyles.headingText} mt-14`}>Settings</h1>
      <div>
        <ProfileImage />
        <HomepageHeadingTitle />
        <AboutMeText />
        <SocialLinks />
      </div>
    </main>
  );
};

export default Settings;
