import ContentInner from "./contentInner";
import MainUserProfile from "./mainUserProfile";
import styled from "styled-components";
const MainContent = () => {
    return (
        <>
            <MainContentWrap>
                <MainUserProfile />
                <ContentInner />
            </MainContentWrap>
        </>
    );
};
export default MainContent;

const MainContentWrap = styled.div`
    width: 48rem;
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    margin-inline: auto;
`;
