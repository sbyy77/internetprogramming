import styled from "styled-components";
import PrevBtnImg from "../../../images/postImages/previous.png";
import NextBtnImg from "../../../images/postImages/next.png";
const PostList = () => {
    return (
        <>
            <PostListWrap>
                <PrevBtn />
                <PostListNum>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </PostListNum>
                <NextBtn />
            </PostListWrap>
        </>
    );
};
export default PostList;

const PostListWrap = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1.5rem;
    justify-content: center;
    align-items: center;
`;

const PostListNum = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;

    & li {
        margin-inline: 1rem;
    }
`;

const PrevBtn = styled.div`
    width: 1rem;
    height: 1rem;
    background: url(${PrevBtnImg}) no-repeat center;
    background-size: cover;
`;
const NextBtn = styled.div`
    width: 1rem;
    height: 1rem;
    background: url(${NextBtnImg}) no-repeat center;
    background-size: cover;
`;
