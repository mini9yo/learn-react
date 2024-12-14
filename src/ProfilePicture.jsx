function ProfilePicture() {
  const imgUrl = "./src/assets/imresizer-1734065720686.jpg";

  // access event object has a lot of possibilites : this hides the image
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <>
      <img src={imgUrl} onClick={(e) => handleClick(e)} />
    </>
  );
}

export default ProfilePicture;
