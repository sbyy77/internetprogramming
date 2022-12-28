import styled from "styled-components";
import LoginBackgroundImg from "../../images/loginImages/bg-cloud.png";

const LoginWrapper = () => {
    return <LoginBackground />;
};
export default LoginWrapper;

const LoginBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 540px;
    min-height: 1000px;
    z-index: -1;
    background: url(${LoginBackgroundImg}) no-repeat center fixed;
    background-size: cover;
`;
