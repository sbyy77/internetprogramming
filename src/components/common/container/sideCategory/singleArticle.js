import styled from "styled-components";

const SingleArticle = (props) => {
    // console.log(props);
    const board = props.board;
    //console.log(board);
    return (
        <>
            {board.map((post) => (
                // props.board.map
                <>
                    <SingleArticleInner key={post.bid}>
                        <a href="www.naver.com">{post.title}</a>
                        {/* "#" */}
                    </SingleArticleInner>
                </>
            ))}
        </>
    );
};

export default SingleArticle;

const SingleArticleInner = styled.li`
    color: #000;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    list-style: none;

    & > a {
        text-decoration: none;
        color: #000;
    }
`;
