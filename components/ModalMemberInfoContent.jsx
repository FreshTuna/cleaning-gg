import styled from "styled-components";
import useModalMemberInfoContent from "../hooks/useModalMemberInfoContent";

function ModalMemberInfoContent({entry, onClose,setNewMemberList}){

    const {
        state,
        deleteEntry,
        handleLeader,
    } = useModalMemberInfoContent({
        params:{
            entry:entry,
            onClose:onClose,
            setNewMemberList:setNewMemberList,
        }
    });

    return(
        <Wrapper>
            <NickName>{state.memberNickname}</NickName>
            <FlexDiv>
                <LeaderSelectContainer>
                    <Leader onClick={() => handleLeader(true)}>
                        <CrownIcon src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/crown_icon.svg"} />
                    </Leader>
                    <LeaderBan onClick={() => handleLeader(false)}>
                        <CrownIcon src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/crown_ban_icon.svg"} />
                    </LeaderBan>
                </LeaderSelectContainer>
                <DeleteButton onClick={deleteEntry} >삭제</DeleteButton>
            </FlexDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LeaderSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    border-radius: 14px;
    box-shadow: rgb(0 0 0 / 24%) 7px 7px 30px;
`;

const Leader = styled.div`
    cursor:pointer;
    width: 200px;
    height: 150px;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    &:hover {
        opacity: 0.9;
        background: rgba(0,0,0,0.03);
    }
`;

const LeaderBan = styled.div`
    cursor:pointer;
    width: 200px;
    height: 150px;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    &:hover {
        opacity: 0.9;
        background: rgba(0,0,0,0.03);
    }
`;

const CrownIcon = styled.img`
    width: 100px;
`

const DeleteButton = styled.div`
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
    margin-top: 35px;
    
    &:hover {
        opacity: 0.8;
    }
`;

const NickName = styled.span`
    color: #191919;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
`;


export default ModalMemberInfoContent;