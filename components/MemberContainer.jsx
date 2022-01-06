import useMemberContainer from "../hooks/useMemberContainer";
import styled from "styled-components";


function MemberContainer({openSignUpModal, openSignInModal}){

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
                        <SignUpButton onClick={openSignUpModal}>회원 가입</SignUpButton>
                        <SignInButton onClick={openSignInModal}>로그인</SignInButton>
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
    font-weight: 600;
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
    font-weight: 600;
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