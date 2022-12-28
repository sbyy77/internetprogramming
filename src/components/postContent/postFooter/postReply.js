import styled from "styled-components";

const PostReply = () => {
    return (
        <>
            <ReplyFormWrap>
                <ReplyForm action="" method="post">
                    <ReplyTextarea></ReplyTextarea>
                </ReplyForm>
                <ReplySubmitWrap>
                    <ReplySubmit>
                        등<br />록
                    </ReplySubmit>
                </ReplySubmitWrap>
            </ReplyFormWrap>
        </>
    );
};
export default PostReply;

const ReplyFormWrap = styled.div`
    width: 100%;
    height: 5rem;
    padding: 1rem;
    display: flex;
`;

const ReplyForm = styled.form`
    width: 90%;
    height: 5rem;
`;

const ReplyTextarea = styled.textarea`
    width: 96%;
    height: 5rem;
    font-family: "Cafe24Ssurround";
    border: 0.125rem solid rgb(102, 100, 255);
    border-radius: 0.5rem;
    resize: none;
    outline: none;
    &::-webkit-scrollbar {
        width: 0.4375rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(102, 100, 255);
        border-radius: 0.625rem;
    }
    &::-webkit-scrollbar-track {
        background-color: lightblue;
        border-radius: 0.625rem;
        box-shadow: inset 0rem 0rem 0.3125rem white;
    }
`;

const ReplySubmitWrap = styled.div`
    display: flex;
`;

const ReplySubmit = styled.button`
    font-family: "Cafe24Ssurround";
    color: #fff;
    width: 3rem;
    height: 5.5rem;
    cursor: pointer;
    border: 0.125rem solid rgb(102, 100, 255);
    border-radius: 0.5rem;
    background-color: rgb(102, 100, 255);
    &:hover {
        background-color: #fff;
        color: rgb(102, 100, 255);
        border: 0.125rem solid rgb(102, 100, 255);
    }
    font-size: 1.1rem;
`;
