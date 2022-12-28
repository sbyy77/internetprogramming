import HeaderLogo from "./headerLogo";
import styled from "styled-components";

const TopLeftMenu = () => {
    // console.log("찍히고 있니")
    return (
        <>
            <TopLeftMenuWrap>
                <a href="./main">
                    <HeaderLogo />
                </a>
            </TopLeftMenuWrap>
        </>
    );
};
export default TopLeftMenu;

const TopLeftMenuWrap = styled.div`
    height: 100%;
    /* display: flex; */
    align-items: center;
`;
