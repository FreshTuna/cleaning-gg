import styled from "styled-components";
import MatchContainer from "./MatchContainer";

function HomeMain({openMemberInfoModal,newMemberList}) {

    return(
        <Wrapper>
            <MatchContainer openMemberInfoModal={openMemberInfoModal} newMemberList={newMemberList}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    z-index: 10;
    justify-content: center;
    background-color:rgb(255, 254, 252);
`;

export default HomeMain;