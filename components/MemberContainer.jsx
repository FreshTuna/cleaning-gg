import useMemberContainer from "../hooks/useMemberContainer";
import styled from "styled-components";


function MemberContainer({openModal}){

    const {
        state,
        handleChange,
    } = useMemberContainer();

    return(
        <>
            {
                state.isSignIn ?
                    <>
                    </>
                    :
                    <ButtonContainer>
                        <SignUpButton onClick={openModal}>회원 가입</SignUpButton>
                        <SignInButton onClick={openModal}>로그인</SignInButton>
                    </ButtonContainer>
            }

        </>
    )
}

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
    
    &:hover {
        opacity: 0.8;
    }
`;

const SignInButton = styled.div`
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
    
    &:hover {
        opacity: 0.8;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-right: 40px;
`;

export default MemberContainer;