import { useCallback, useState } from "react";
import styled from "styled-components";
import PostSetting from "./postSetting";
import PostSettingBtn from "./postSettingBtn";
import Poster1 from "../../images/postImages/decision_to_leave.jpg";

const PostInner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openSettingHandler = useCallback(() => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    }, [isOpen]);
    return (
        <>
            <PostWrap>
                <PostTitleWrap>
                    <PostTitleBox>
                        <PostTitle>헤어질 결심</PostTitle>
                        <PostSubTitle>
                            나는요... 완전히 붕괴됐어요.
                        </PostSubTitle>
                        <div>
                            <PostWriter>박찬욱 감독</PostWriter>
                            <PostDate>2022.06.29</PostDate>
                        </div>
                    </PostTitleBox>
                    <PostSettingBox>
                        <div onClick={openSettingHandler}>
                            <PostSettingBtn />
                        </div>
                        <SettingOpenner
                            style={{ display: isOpen ? "block" : "none" }}
                        >
                            <PostSetting />
                        </SettingOpenner>
                    </PostSettingBox>
                </PostTitleWrap>

                <PostContentWrap>
                    <Underlined>제목: 헤어질 결심</Underlined>
                    <br />
                    <Underlined>감독: 박찬욱 감독</Underlined>
                    <br />
                    <Underlined>등급: 15세 관람가</Underlined>
                    <br />
                    <Underlined>러닝타임: 138분</Underlined>
                    <br />
                    <Underlined>
                        장르: 멜로, 로맨스, 드라마, 서스펜스, 미스터리, 느와르
                    </Underlined>
                    <br />
                    <Underlined>한국 개봉일: 2022.06.29</Underlined>
                    <br />
                    <Underlined>수상내역</Underlined>
                    <br />
                    2022
                    <br />
                    42회 황금촬영상 시상식(감독상, 최우수 남우주연상, 최우수
                    여우주연상)
                    <br />
                    35회 시카고 비평가 협회상(외국어영화상, 촬영상)
                    <br />
                    23회 부산영화평론가협회상(남자연기자상)
                    <br />
                    58회 대종상 영화제(최우수작품상, 시나리오상, 남우주연상)
                    <br />
                    43회 청룡영화상(최우수 작품상, 감독상, 남우주연상,
                    여우주연상, 음악상, 각본상)
                    <br />
                    42회 한국영화평론가협회상(최우수 작품상, 감독상, 여우주연상,
                    각본상, 촬영상, 음악상, 영평10선)
                    <br />
                    31회 부일영화상(최우수 작품상, 남우 주연상, 여우 주연상,
                    음악상)
                    <br />
                    27회 춘사영화제(최우수감독상, 남우주연상, 여우주연상)
                    <br />
                    75회 칸영화제(감독상)
                    <br />
                    <br />
                    <Underlined>포스터</Underlined>
                    <Poster />
                    <br />
                    <Underlined>소개</Underlined>
                    <br />
                    <div>
                        '해준'(박해일)은 사망자의 아내 '서래'(탕웨이)와 마주하게
                        된다. "산에 가서 안 오면 걱정했어요, 마침내 죽을까 봐."
                        남편의 죽음 앞에서 특별한 동요를 보이지 않는 '서래'.
                        경찰은 보통의 유가족과는 다른 '서래'를 용의선상에
                        올린다. '해준'은 사건 당일의 알리바이 탐문과 신문,
                        잠복수사를 통해 '서래'를 알아가면서 그녀에 대한 관심이
                        점점 커져가는 것을 느낀다. 한편, 좀처럼 속을 짐작하기
                        어려운 '서래'는 상대가 자신을 의심한다는 것을 알면서도
                        조금의 망설임도 없이 '해준'을 대하는데…. 진심을 숨기는
                        용의자 용의자에게 의심과 관심을 동시에 느끼는 형사
                        그들의 "헤어질 결심"
                    </div>
                    <br />
                    <Underlined>예고편</Underlined>
                    <br />
                    <iframe
                        width="350"
                        height="205"
                        src="https://www.youtube.com/embed/usAv2w4KiMc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <br />
                </PostContentWrap>
            </PostWrap>
        </>
    );
};
export default PostInner;

const Poster = styled.div`
    display: inline-block;
    width: 16rem;
    height: 24rem;
    background: url(${Poster1}) no-repeat center center;
    background-size: contain;
    border: none;
`;
const Underlined = styled.div`
    font-size: 1.2rem;
    color: rgb(102, 100, 255);
`;
const PostWrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 9.375rem;
    /* border: 1px solid #000; */
`;
const PostTitleWrap = styled.div`
    display: flex;
    padding: 1rem;
    border-bottom: 0.125rem solid rgb(102, 100, 255);
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
    box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2);
`;
const PostTitleBox = styled.div`
    & > div {
        display: flex;
    }
    width: 45rem;
`;
const PostTitle = styled.div`
    font-size: 3rem;
`;
const PostSubTitle = styled.div`
    font-size: 1.5rem;
    padding-block: 1rem;
`;
const PostWriter = styled.div`
    margin-right: 2rem;
    /* display: inline-block; */
`;
const PostDate = styled.div`
    position: relative;
    &::before {
        position: absolute;
        content: "";
        width: 0.0625rem;
        height: 0.8125rem;
        border-left: 0.125rem solid #cfcfcf;
        top: 0.15rem;
        margin-left: -0.3125rem;
    }
    color: #cfcfcf;
    z-index: -1;
`;

const PostContentWrap = styled.div`
    padding: 1rem;
    border-bottom: 0.125rem solid rgb(102, 100, 255);
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px; */
    box-shadow: 0rem 1.25rem 1.25rem -1.125rem rgb(102, 100, 255, 0.2);
`;

const PostSettingBox = styled.div`
    width: 7.8125rem;
    height: auto;
`;

const SettingOpenner = styled.div`
    position: relative;
`;
