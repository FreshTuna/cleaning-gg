import styled from "styled-components";
import useMatchContainer from "../hooks/useMatchContainer";
import MemberBox from "./MemberBox";
import {useEffect} from "react";

function MatchContainer({openMemberInfoModal, newMemberList}){

    const {
        state,
        handleChange,
        startMatching,
        startRandomize,
        refreshMemberList,
        addMember,
        onLoad,
    } = useMatchContainer();

    useEffect(() => {
        onLoad();
    }, [])

    useEffect( ()=> {
        refreshMemberList(newMemberList);
    }, [newMemberList])

    return (
        <>
            {
                state.isMatching?
                    <Wrapper>
                        <MatchBox>
                            <HeaderBox>
                                <HeaderCapacity>
                                    {state.memberList.length} / {10}
                                </HeaderCapacity>
                            </HeaderBox>
                            {
                                state.memberList.length > 0 &&
                                    state.memberList.map( (o,i) => {
                                        return <MemberBox member={o} key={o.member_id} onClick={openMemberInfoModal} />
                                    })
                            }
                            <PlusBox onClick={() => addMember(localStorage.getItem('game_nickname'))}>
                                <PlusImage src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/ic_PlusSmall_B85_S16_V0.1.svg"} />
                            </PlusBox>
                        </MatchBox>
                        <PublishButton onClick={startRandomize}>매칭 시작</PublishButton>
                    </Wrapper>
                    :
                    <PublishButton onClick={() => startMatching(localStorage.getItem('game_nickname'))}>매치 생성</PublishButton>

            }
        </>
    )

}

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`;


const PublishButton = styled.div`
    cursor: pointer;
    width: 300px;
    text-align: center;
    padding: 12px 15px 12px 15px;
    font-size: 24px;
    font-color: rgba(0,0,0,0.6);
    background: #00BED6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(111, 134, 255, 0.4);
    border-radius: 17px;
    color: white;
`;

const MatchBox = styled.div`
    width: 500px;
    height: 60vh;
    border-radius: 7px;
    align-items:center;
    display: inline-flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 12%) 7px 7px 30px;
    background-color:rgb(255, 254, 252);
`;

const HeaderBox = styled.div`
    height: 70px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 100%;
    background-color: #ffd66c;
    display: flex;
    align-items: center;
`;

const HeaderCapacity = styled.div`
    font-size: 30px;
    margin-left: 15px;
    color:white;
    font-weight: 700;
`;

const PlusImage = styled.img`
    width: 20px;
`;

const PlusBox = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: rgb(0 0 0 / 20%) 7px 7px 30px;
    cursor:pointer;
    margin-top: 10px;
    opacity: 1;
    &:hover {
        opacity: 0.7;
    }
`;

export default MatchContainer;