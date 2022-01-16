import NavBar from "./NavBar";
import HomeMain from "./HomeMain";
import {useState} from "react";
import Modal from "./Modal";
import ModalSignUpContent from "./ModalSignUpContent";
import ModalSignInContent from "./ModalSignInContent";
import ModalMemberInfoContent from "./ModalMemberInfoContent";
import LoadingOverlay from "./LoadingOverlay";
import useLoading from "../hooks/useLoading";

function HomeWeb() {

    const [modalVisible, setModalVisible] = useState(false)
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [memberInfo, setMemberInfo] = useState(false);
    const [entry, setEntry] = useState({});
    const [newMemberList, setNewMemberList] = useState([]);

    const {visible} = useLoading();

    const openSignUpModal = () => {
        setModalVisible(true)
        setSignUp(true);
    }

    const openSignInModal = () => {
        setModalVisible(true)
        setSignIn(true);
    }

    const closeModal = () => {
        setModalVisible(false)
        setSignUp(false);
        setSignIn(false);
        setMemberInfo(false);
    }

    const openMemberInfoModal = (entry) => {
        setModalVisible(true);
        setEntry(entry);
        setMemberInfo(true);
    }

    return(
        <>
            <NavBar openSignUpModal={openSignUpModal} openSignInModal={openSignInModal}  />
            <HomeMain openMemberInfoModal={openMemberInfoModal} newMemberList={newMemberList}/>
            {
                modalVisible &&
                <Modal
                    visible={true}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}
                >
                    {
                        signUp &&
                            <ModalSignUpContent onClose={closeModal} />
                    }

                    {
                        signIn &&
                            <ModalSignInContent onClose={closeModal} />
                    }
                    {
                        memberInfo &&
                            <ModalMemberInfoContent entry={entry} onClose={closeModal} setNewMemberList={setNewMemberList} />
                    }
                </Modal>
            }
            <LoadingOverlay
                visible={visible}
            />
        </>
    )
}

export default HomeWeb;