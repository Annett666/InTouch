import s from "./ProfileInfo.module.css";
import main from "../../../images/main.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.profileImage} src={main} alt="main" />
      </div>
      <div className={s.descriptionBlock}>user photo + description</div>
    </div>
  );
};

export default ProfileInfo;
