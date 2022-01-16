import styled from "styled-components";
import useMemberNav from "../hooks/useMemberNav";

function MemberNav({gameNickname}){

    const {
        signOut,
    } = useMemberNav()

    return(
        <Wrapper>
            <GameNickName>{gameNickname}</GameNickName> 하이~~
            <SignOutButton onClick={signOut} >로그아웃</SignOutButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 30px;
    font-size: 18px;
    display:flex;
    align-items: center;
    gap: 12px;
`;

const GameNickName = styled.span`
    color: #00bed6;
    font-size: 24px;
    margin-right: 5px;
`;

const SignOutButton = styled.div`
    cursor: pointer;
    font-size: 20px;
    border-radius: 42px;
    background-color: #ffd66c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108px;
    height: 42px;
    font-weight: 600;
    &:hover {
        opacity: 0.8;
    }
    
`;

export default MemberNav;