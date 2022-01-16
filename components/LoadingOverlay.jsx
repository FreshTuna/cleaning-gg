import styled, {keyframes} from "styled-components";

function LoadingOverlay({visible}) {


    return (
        <Overlay visible={visible}>
            <Block>
                <LogoIcon src={"https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/commerce_display/cleaning-gg-logo.svg"} />
            </Block>
        </Overlay>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display:${props => props.visible? "flex" : "none" };
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    animation: ${props => props.visible? FadeIn : FadeOut } 0.25s forwards;
`;

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const LogoIcon = styled.img`
    width: 300px;
    animation: ${Rotation} 2.5s ease-in-out infinite;
`;

export default LoadingOverlay;