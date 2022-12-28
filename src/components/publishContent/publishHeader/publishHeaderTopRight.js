import styled from "styled-components";
import PublishHideMenu from "./publishHideMenu";
import SaveButton from "./saveButton";

const PublishHeaderTopRight = () => {
    return (
        <>
            <TopRightMenuWrap>
                <SaveButton />
                <PublishHideMenu />
            </TopRightMenuWrap>
        </>
    );
};
export default PublishHeaderTopRight;

const TopRightMenuWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;
