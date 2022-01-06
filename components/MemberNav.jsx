import styled from "styled-components";

function MemberNav({gameNickname}){

    return(
        <Wrapper>
            <GameNickName>{gameNickname}</GameNickName> 하이~~
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 30px;
    font-size: 18px;
    display:flex;
    align-items: center;
`;

const GameNickName = styled.span`
    color: #00bed6;
    font-size: 24px;
    margin-right: 5px;
`;

export default MemberNav;