import styled from "styled-components";

function CloseButton({onClick}){


    return (
        <Wrapper>
            <CloseIcon onClick={onClick} src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/ic_Topbar_CloseAction_B85_S24_V0.1.svg"} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: end;
`;

const CloseIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export default CloseButton;