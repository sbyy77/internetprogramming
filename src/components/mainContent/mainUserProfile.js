import styled from "styled-components";
import SearchIcon from "../../images/headerImages/search_icon.png";

const MainUserProfile = () => {
    return (
        <>
            <MainUserProfileWrap>
                <SearchBoxWrap>
                    <Searchselect>
                        <option>영화 제목</option>
                        <option>감독 이름</option>
                        <option>출연진</option>
                        <option>발매년도</option>
                        <option>장르</option>
                    </Searchselect>
                    <input type="text" autoComplete="off"></input>
                    <SearchBtn></SearchBtn>
                </SearchBoxWrap>
            </MainUserProfileWrap>
        </>
    );
};
export default MainUserProfile;

const SearchBoxWrap = styled.form`
    width: 40.25rem;
    height: 100%;
    /* margin-right: 1.375rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > input {
        width: 70%;
        height: 45%;
        outline: none;
        border: none;
        border-bottom: 2px solid rgb(102, 100, 255);
        font-family: Cafe24Ssurround;
        font-size: 1rem;
    }

    @media (max-width: 536px) {
        & > input {
            width: 60%;
        }
    }
`;
const Searchselect = styled.select`
    border: none;
    border: 2px solid rgb(102, 100, 255);
    border-radius: 1rem;
    color: rgb(102, 100, 255);
    margin-right: 1rem;
    font-size: 1rem;
    padding: 0.3rem;
    font-family: Cafe24Ssurround;
    &:focus {
        outline: none;
    }
    & > option {
    }
`;
const SearchBtn = styled.button`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: url(${SearchIcon}) no-repeat center center;
    background-size: contain;
    cursor: pointer;
    border: none;
`;

const MainUserProfileWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
