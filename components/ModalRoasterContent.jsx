import styled from "styled-components";

function ModalRoasterContent({roaster}) {

    return(
        <Wrapper>
            <FlexDiv>
                <>BETA</>
                {
                    roaster.map( (o,i) => {
                        return <>
                            {
                                i % 2 == 1 ?
                                    <RedTeam>
                                        <NickName>{o.game_nickname}</NickName>
                                    </RedTeam>
                                    :
                                    <BlueTeam>
                                        <NickName>{o.game_nickname}</NickName>
                                    </BlueTeam>
                            }
                        </>
                    })
                }

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
    gap: 15px;
`;

const RedTeam = styled.div`
    background: #2d4263;
    width: 250px;
    border-radius: 7px;
`;

const BlueTeam = styled.div`
    background: #c84b31;
    width: 250px;
    border-radius: 7px;
`;

const NickName = styled.div`
    color: white;
    text-align: center;
    padding-top: 6px;
    padding-bottom: 6px;
`;

export default ModalRoasterContent;