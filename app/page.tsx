"use client";
import React, { useState, FC, FormEvent } from "react";
import Report from "./_components/report";
import Feedback from "./_components/feedback";
import Suggestion from "./_components/suggestion";
import ContactUs from "./_components/contactUs";
import Modal from "./_components/modalButton";
import Close from "./_components/close";
import Background from "./_components/background/main";

interface ModalProps {
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Option1Modal: FC<ModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="modal1">
      <div className="modal1header">
        <h1 className="">
          Let us know about the issuse <br /> you are facing right know
        </h1>
      </div>
      <hr />
      <form onSubmit={onSubmit} className="issusecontent">
        {/* Form fields for option 1 */}
        <p className="modaltext">Choose a section</p>
        <div className="chooseissuse">
          <select className="dropdown1">
            <option className="dropdown1" value="1">
              Concept cards
            </option>
            <option className="dropdown1" value="2">
              Interview Questions
            </option>
            <option className="dropdown1" value="3">
              Practice Questions
            </option>
            <option className="dropdown1" value="4">
              Quizzes
            </option>
          </select>
        </div>
        <div className="descriptionsection">
          <p className="modaltext">Describe the issuse in detail</p>
          <textarea className="descriptioninput " placeholder="Write here..." />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* 
      <button onClick={onClose}>Close</button> */}
    </div>
  );
};

const Option2Modal: FC<ModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="modal2">
      <div className="modal1header">
        <h2>
          Let us know your feedback
          <br /> about us!
        </h2>
      </div>
      <div className="feedbackcontent">
        <form onSubmit={onSubmit}>
          {/* Form fields for option 2 */}
          <textarea className="descriptioninput" placeholder="Write here ..." />
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-black">Send feedback anonymously</label>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Option3Modal: FC<ModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="modal3">
      <div className="modal1header">
        <h2>
          Share your suggestions with us <br /> for a chance to earn reward
        </h2>
      </div>
      <hr />
      <form onSubmit={onSubmit}>
        {/* Form fields for option 3 */}
        <div>
          <p>Choose a section</p>
          <div className="chooseissuse">
            <select className="dropdown1">
              <option className="dropdown1 floatmodal" value="1">
                Concept cards
              </option>
              <option className="dropdown1 floatmodal" value="2">
                Interview Questions
              </option>
              <option className="dropdown1 floatmodal" value="3">
                Practice Questions
              </option>
              <option className="dropdown1 floatmodal" value="4">
                Quizzes
              </option>
            </select>
          </div>
        </div>
        <div className="descriptionsection">
          <p className="modaltext">Describe the issuse in detail</p>
          <textarea className="descriptioninput " placeholder="Write here..." />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const Option4Modal: FC<ModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="modal4">
      <div className="modal1header">
        <h2>
          Let us know what your queries <br /> are!{" "}
        </h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className=" flex flex-col">
          {/* Form fields for option 4 */}
          <label>Your name</label>
          <input placeholder="Enter your name" type="text" />
          <label>What would you like to ask?</label>
          <textarea className="descriptioninput " placeholder="Write here..." />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const Menu: FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);

  function toggle(e: any) {
    e.preventDefault();
    setOpenToggle(!openToggle);
  }

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you could send the form data to an API
    console.log("Form submitted");
    closeModal();
  };

  const renderModal = () => {
    switch (activeModal) {
      case "option1":
        return <Option1Modal onClose={closeModal} onSubmit={handleSubmit} />;
      case "option2":
        return <Option2Modal onClose={closeModal} onSubmit={handleSubmit} />;
      case "option3":
        return <Option3Modal onClose={closeModal} onSubmit={handleSubmit} />;
      case "option4":
        return <Option4Modal onClose={closeModal} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <main className="fixed">
      <Background/>
      {openToggle ? (
        <ul className={openToggle ? " options" : "flat"}>
          <button onClick={() => openModal("option1")}>
            <Report />
          </button>
          <button onClick={() => openModal("option2")}>
            <Feedback />
          </button>
          <button onClick={() => openModal("option3")}>
            <Suggestion />
          </button>
          <button onClick={() => openModal("option4")}>
            <ContactUs />
          </button>
          <button onClick={toggle}>
            <Close />
          </button>
          {renderModal()}
        </ul>
      ) : (
        <button onClick={toggle} className="button">
          <Modal />
        </button>
      )}
    </main>
  );
};

export default Menu;
