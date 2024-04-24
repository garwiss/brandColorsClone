import Modal from 'react-modal'
import {useState} from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function Sidebar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a> Brand <b>Colors</b></a>

                </div>
                <div className="description">
                    The biggest collection of offical brand color codes around. Curated by @brandcolors and friends
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a
                                onClick={toggleModal}>
                                About brand Colors
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <a className="modalCloseButton" onClick={toggleModal}><AiFillCloseCircle size={40}/></a>
                <h3>About Brand Colors</h3>
                <p>
                    BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand
                    color codes that are needed most often.
                </p>

                <p>
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million
                    pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.
                </p>
            </Modal>

        </>
    )
}

export default Sidebar;