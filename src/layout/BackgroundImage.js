import React from "react";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      {/* <img
        // src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
      /> */}
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100vh;
  background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg);
  width: 100vw;

  background-size: 100%;
  @media (max-width: 600px) {
    background-color: rgba(0, 0, 0, 0.8);
    background-image: none;
  }

  /* img {
    height: 100vh;
    width: 100vw;
  } */
`;
export default BackgroundImage;
