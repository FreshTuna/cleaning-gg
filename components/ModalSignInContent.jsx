import styled from "styled-components";
import useModalSignInContent from "../hooks/useModalSignInContent";

function ModalSignInContent({onClose}) {

    const {
        state,
        handleChange,
        enroll,
    } = useModalSignInContent({
        params:{
            onClose: onClose,
        }
    });

    return(
        <Wrapper>
            <FlexDiv>
                <LogoArea>
                    <Logo src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/cleaning-gg-logo.svg"} />
                </LogoArea>

                <SignUpArea>
                    <InputBox>
                        <InputLabel>게임 닉</InputLabel>
                        <Input type={"text"} placeholder={"ex) 참치"} name={"game_nickname"} value={state.game_nickname} onChange={handleChange}/>
                    </InputBox>

                    <ButtonContainer>
                        <SignUpButton onClick={enroll}>로그인</SignUpButton>
                    </ButtonContainer>

                </SignUpArea>
            </FlexDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LogoArea = styled.div`
    display: flex;
    width: 200px;
    margin-right: 50px;
    margin-left: 50px;
    align-items:center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 100%;
`;

const SignUpArea = styled.div`

`;

const InputLabel = styled.div`
    font-weight: 500;
    font-size:18px;
    color: rgb(138,131,131);
`;

const InputBox = styled.div`
    padding-bottom: 13px;
    display:flex;
    flex-direction: column;
    gap:3px;
`;

const Input = styled.input`
    width: 13rem;
    size: 1.3rem;
    font-size: 15px; 
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    line-height: 150%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    outline: none;
    cursor: text;
`;

const SignUpButton = styled.div`
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
    margin-top: 20px;
    
    &:hover {
        opacity: 0.8;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default ModalSignInContent;