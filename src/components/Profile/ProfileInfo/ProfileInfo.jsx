import s from "./ProfileInfo.module.css";
import main from "../../../assets/images/main.jpg";
import defaultUserPhoto from "../../../assets/images/default_user.jpeg";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className={s.profileImage} src={main} alt="main" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : defaultUserPhoto
          }
        />
        <div>
          <p>{props.profile.fullName}</p>
          <p>{props.profile.aboutMe}</p>
          <p>
            <b>Contacts</b>
          </p>
          <div className={s.contactsBlock}>
            <a>Facebook: {props.profile.contacts.facebook || "-"}</a>
            <a>VK: {props.profile.contacts.vk || "-"}</a>
            <a>Twitter: {props.profile.contacts.twitter || "-"}</a>
            <a>Instagram: {props.profile.contacts.instagram || "-"}</a>
            <a>YouTube: {props.profile.contacts.youtube || "-"}</a>
            <a>Website: {props.profile.contacts.website || "-"}</a>
            <a>Main link: {props.profile.contacts.mainLink || "-"}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
