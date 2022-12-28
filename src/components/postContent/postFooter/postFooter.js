import PostList from "./postList";
import PostReply from "./postReply";
import DownArrow from "../../../images/postImages/arrow_down_icon.png";
import UpArrow from "../../../images/postImages/arrow_up_icon.png";
import Share from "../../../images/postImages/share.png";
import styled from "styled-components";
import { useRef, useState, useCallback } from "react";

const PostFooter = () => {
    const arrowImg = useRef(null);
    const likePost = useRef(null);

    const [replyOpen, setReplyOpen] = useState(true);
    const [likeColor, setLikeColor] = useState("#fcc7e1");
    const replyOpenHandler = useCallback(() => {
        // console.log(replyOpen);
        setReplyOpen(!replyOpen);

        arrowImg.current.style.background = replyOpen
            ? `url(${UpArrow}) no-repeat center`
            : `url(${DownArrow}) no-repeat center`;

        arrowImg.current.style.backgroundSize = "contain";
    }, [replyOpen]);

    const likePostHandler = useCallback(() => {
        likePost.current.style.color = likeColor;
        if (likeColor == "#fcc7e1") {
            setLikeColor("#000");
            likePost.current.innerHTML = "♥";
        } else {
            setLikeColor("#fcc7e1");
            likePost.current.innerHTML = "♡";
        }
        // console.log(likeColor);
    }, [likeColor]);

    return (
        <>
            <PostFooterMenu>
                <PostReplyWrap onClick={replyOpenHandler}>
                    <span>댓글</span>
                    <ArrowImg ref={arrowImg} />
                </PostReplyWrap>
                <PostLove>
                    <ShareImg />
                    <span onClick={likePostHandler}>
                        {/* {" "} */}
                        공감
                        <span ref={likePost}>♡</span>
                    </span>
                </PostLove>
            </PostFooterMenu>
            <div style={{ display: replyOpen ? "block" : "none" }}>
                <PostReply />
            </div>
            <PostList />
        </>
    );
};
export default PostFooter;

const PostFooterMenu = styled.div`
    font-size: 1.1rem;
    display: flex;
    padding: 1rem;
    /* border-bottom: 0.125rem solid rgb(102, 100, 255);
    // box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; 
    box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2); */
    justify-content: space-between;
`;

const ArrowImg = styled.i`
    width: 1.5rem;
    height: 1.2rem;
    background: url(${DownArrow}) no-repeat center;
    background-size: contain;
    display: inline-block;
    /* position: absolute; */
`;
const PostReplyWrap = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const ShareImg = styled.i`
    width: 1.5rem;
    height: 0.95rem;
    background: url(${Share}) no-repeat center;
    background-size: contain;
    display: inline-block;
    margin-right: 1rem;
`;

const PostLove = PostReplyWrap;
