import styled from "styled-components";
import MatchContainer from "./MatchContainer";

function HomeMain({openMemberInfoModal}) {

    return(
        <Wrapper>
            <MatchContainer openMemberInfoModal={openMemberInfoModal}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(255, 254, 252);
`;

export default HomeMain;