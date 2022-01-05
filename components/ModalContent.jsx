import styled from "styled-components";
import useModalContent from "../hooks/useModalContent";

function ModalContent({onClose}) {

    const {
        state,
        handleChange,
    } = useModalContent();

    return(
        <Wrapper>
            <FlexDiv>
                <LogoArea>
                    <Logo src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/cleaning-gg-logo.svg"} />
                </LogoArea>

                <SignUpArea>
                    <InputBox>
                        <InputLabel>게임 닉</InputLabel>
                        <Input type={"text"} placeholder={"닉네임"} name={"game_nickname"} value={state.game_nickname} onChange={handleChange}/>
                    </InputBox>

                    <InputBox>
                        <InputLabel>이름</InputLabel>
                        <Input type={"text"} placeholder={"이름"} name={"nickname"} value={state.nickname} onChange={handleChange}/>
                    </InputBox>

                    <InputBox>
                        <InputLabel>티어</InputLabel>
                        <Input type={"text"} placeholder={"티어"} name={"tier"} value={state.tier} onChange={handleChange}/>
                    </InputBox>

                    <ButtonContainer>
                        <SignUpButton onClick={onClose}>가입하기</SignUpButton>
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
    font-size:15px;
    color: rgb(138,131,131);
`;

const InputBox = styled.div`
    padding-bottom: 10px;
`;

const Input = styled.input`
    width: 12rem;
    size: 1rem;
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


export default ModalContent;