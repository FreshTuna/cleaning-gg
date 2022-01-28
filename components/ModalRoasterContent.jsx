import styled from "styled-components";

function ModalRoasterContent({roaster}) {

    return(
        <Wrapper>
            <FlexDiv>
                <>BETA</>
                {
                    roaster.red_team.map( (o,i) => {
                        return <>
                                    <RedTeam>
                                        {
                                            o.leader_yn &&
                                            <CrownImage src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/crown_icon.svg"} />
                                        }
                                        <NickName>{o.game_nickname}</NickName>
                                    </RedTeam>
                        </>
                    })
                }

                {
                    roaster.blue_team.map( (o,i) => {
                        return <>
                            <BlueTeam>
                                {
                                    o.leader_yn &&
                                    <CrownImage src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/crown_icon.svg"} />
                                }
                                <NickName>{o.game_nickname}</NickName>
                            </BlueTeam>
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
    background: #c84b31;
    position:relative;
    align-items: center;
    width: 250px;
    border-radius: 7px;
`;

const BlueTeam = styled.div`
    background: #2d4263;
    position:relative;
    align-items: center;
    width: 250px;
    border-radius: 7px;
`;

const NickName = styled.div`
    color: white;
    text-align: center;
    padding-top: 6px;
    padding-bottom: 6px;
`;

const CrownImage = styled.img`
    width: 32px;
    position: absolute;
    right: 10px;
    z-index: 1;
`;

export default ModalRoasterContent;