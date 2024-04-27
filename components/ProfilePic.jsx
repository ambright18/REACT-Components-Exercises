

const ProfilePic = () => {
    const imageUrl = '../assets/profile.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return (
      <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Url-pic"></img>
    );
}

export default ProfilePic;