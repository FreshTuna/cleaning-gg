import styled from "styled-components";
import useMemberBox from "../hooks/useMemberBox";

function MemberBox({member}){

    const {
        state,
        handleChange
    } = useMemberBox({
        params:{
            tier:member.tier,
        }
    })


    return(
        <Wrapper background={state.backgroundColor}>
            <Nickname>
                {member.nickname}
            </Nickname>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 460px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 2px;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 8%) 7px 7px 30px;
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

export default MemberBox;