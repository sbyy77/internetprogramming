import styled from "styled-components";

const NewArticle = () => {
    return (
        <>
            <NewArticleWrap>
                <a href="./publish">
                    <NewArticleBtn type="button">
                        새 영화 추가하기
                    </NewArticleBtn>
                </a>
            </NewArticleWrap>
        </>
    );
};
export default NewArticle;

const NewArticleWrap = styled.div`
    height: 100%;
    margin-right: 1.35rem;
`;

const NewArticleBtn = styled.button`
    width: 10.25rem;
    height: 75%;
    border: none;
    border-radius: 0.3125rem;
    outline: none;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(102, 100, 255);
    background-color: #fff;
    transition: 0.1s;
    cursor: pointer;
    border: 2px solid rgb(102, 100, 255);

    &:hover {
        color: #fff;
        background-color: rgb(102, 100, 255);
    }
`;
