import styled from "styled-components";
import useMemberBox from "../hooks/useMemberBox";

function MemberBox({member,onClick}){

    const {
        state,
        handleChange
    } = useMemberBox({
        params:{
            tier:member.tier,
        }
    })


    return(
        <Wrapper background={state.backgroundColor} onClick={() => onClick(member)}>
            <Nickname>
                {member.nickname}
                {
                    member.leader_yn &&
                    <CrownImage src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/crown_icon.svg"} />
                }
            </Nickname>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 460px;
    position: relative;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 2px;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 10%) 7px 7px 30px;
    background-color: ${props => props.background ? props.background : "white"};
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
`;

const Nickname = styled.div`
    color: white;
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    
`;

const CrownImage = styled.img`
    width: 24px;
    position: absolute;
    right: 15px;
    z-index: 1;
`;

export default MemberBox;