import s from "./profileLink.module.scss";
import Image from "next/image";

const ProfileLink = () => {
  return (
    <div className={s.profileLink}>
      <div className={s.ava}>
        <Image src='/favicon.ico' width={42} height={42} alt='ava' />
      </div>
      <div className={s.who}>
        <p id={s.name}>Name</p>
        <p id={s.job}>Project Manager</p>
      </div>
    </div>
  );
};

export default ProfileLink;
