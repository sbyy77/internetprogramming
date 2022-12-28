import styled from "styled-components";
import MainContent from "../../mainContent/mainContent";

const Content = () => {
    return (
        <>
            <ContentWrap>
                <MainContent />
            </ContentWrap>
        </>
    );
};

export default Content;

const ContentWrap = styled.div`
    display: flex;
`;
