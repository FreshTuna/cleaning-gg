import NavBar from "./NavBar";
import HomeMain from "./HomeMain";
import {useState} from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

function HomeWeb() {

    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }


    return(
        <>
            <NavBar openModal={openModal}  />
            <HomeMain/>
            {
                modalVisible &&
                <Modal
                    visible={true}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}
                >
                    <ModalContent onClose={closeModal}/>
                </Modal>
            }
        </>
    )
}

export default HomeWeb;