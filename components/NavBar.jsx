import useNavBar from "../hooks/useNavBar";
import styled from "styled-components";
import MemberContainer from "./MemberContainer";
import MemberNav from "./MemberNav";

function NavBar({openSignUpModal,openSignInModal}) {

    const {
        state,
        handleChange,
    } = useNavBar();

    return(
        <Wrapper>
            <Logo src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/cleaning-gg-logo.svg"} />
                {
                    state.user_data == null ?
                            <>
                                <MemberContainer openSignUpModal={openSignUpModal} openSignInModal={openSignInModal} />
                            </>
                        :
                            <>
                                <MemberNav gameNickname={state.game_nickname} />
                            </>
                }
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    align-items: center;
    position:fixed;
    top: 0; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 42px;
    width: 100px;
    margin-left: 30px;
`;

export default NavBar;