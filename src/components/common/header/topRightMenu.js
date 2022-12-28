import styled from "styled-components";
import NewArticle from "./newArticle";

const TopRightMenu = () => {
    return (
        <>
            <TopRightMenuWrap>
                <NewArticle />
            </TopRightMenuWrap>
        </>
    );
};
export default TopRightMenu;

const TopRightMenuWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`