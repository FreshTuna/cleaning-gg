import Link from 'next/link';
import styled from 'styled-components';
import {useState} from "react";
import HomeWeb from "../components/HomeWeb";
import HomeMain from "../components/HomeMain";

function Home() {

    const [nameState, setNameState] = useState("hi");

    const updateName = (e) => {
        setNameState(e.target.value);
    };

    return(
        <Wrapper>
            <HomeWeb />

            {/*<input*/}
            {/*    type={"text"}*/}
            {/*    name={"name"}*/}
            {/*    id={"input_name"}*/}
            {/*    onChange={updateName}*/}
            {/*    placeholder={"Enter your name!"}*/}
            {/*/>*/}

        </Wrapper>
    )

}

const Wrapper = styled.div`
`;


export default Home