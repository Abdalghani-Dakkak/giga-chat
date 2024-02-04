import { useState } from "react";
// import { User } from "../Pages/Website/Context/UserContext";
import Message from "./Message";
import EmojiPicker from "emoji-picker-react";
import { Link } from "react-router-dom";

export default function UserChat() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [onResize, setOnResize] = useState(0);

  // const user = useContext(User);

  window.onresize = () => {
    setOnResize(prev => prev + 1);
  }

  window.onkeydown = (e) => {
    if (e.key === "Enter" && !inputEmpty) {
      setMessages((prev) => [...prev, message]);
      setMessage("");
      setEmojiPickerOpen(false);
      setInputEmpty(true);
    }
  };

  return (
    <div className="the-chat h-100 d-flex flex-column justify-content-between">
      <header className="user-chat d-flex justify-content-between p-2 ps-3 pe-3">
        <div className="text-light d-flex align-items-center">
          {document.body.clientWidth < 992 && (
            <Link
              to="/chat"
              className="back d-flex align-items-center text-light"
            >
              <i className="bi bi-arrow-left-short fs-1"></i>
              <div className="avatar"></div>
            </Link>
          )}
          <div>
            <h3 className="m-0">Ahmed</h3>
            <span>Last seen recently</span>
          </div>
        </div>
        <ul className="d-flex justify-content-between align-items-center w-25 fs-5 p-0 m-0">
          <li className="fs-3 text-light">
            <i className="bi bi-search"></i>
          </li>
          <li className="fs-3 text-light">
            <i className="bi bi-telephone-fill"></i>
          </li>
          <li className="fs-3 text-light">
            <i className="bi bi-three-dots-vertical"></i>
          </li>
        </ul>
      </header>
      <div className="h-100 d-flex flex-column">
        <div id="messageContainer" className="messages flex-fill p-2 ps-4 pe-4">
          <Message message="Hello world" time="10:34 PM" />
          {messages.map((message, index) => (
            <div
              key={index}
              className="the-message-sended bg-white position-relative start-100 d-flex justify-content-between w-25 p-1 ps-3 pe-3 mt-2 mb-2"
            >
              <p className="fs-5">{message}</p>
              <span className="align-self-end">12:00 AM</span>
            </div>
          ))}
        </div>
        <div className="write-message d-flex w-100 ps-2 pe-2">
          <div>
            <label htmlFor="file-upload" className="custom-file-upload fs-1">
              <i className="bi bi-link-45deg" />
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <input
            id="textMessage"
            type="text"
            placeholder="Write a message..."
            className="message-input border-0 p-3 flex-fill"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              e.target.value ? setInputEmpty(false) : setInputEmpty(true);
            }}
          />
          {emojiPickerOpen && (
            <div className="position-fixed top-50 end-0 translate-middle-y">
              <EmojiPicker
                onEmojiClick={(emojiObject) => {
                  setMessage((prev) => prev + emojiObject.emoji);
                  setInputEmpty(false);
                }}
              />
            </div>
          )}
          <button
            onClick={() => setEmojiPickerOpen((prev) => (prev = !prev))}
            className="message-actions border-0 bg-transparent fs-2 me-2"
          >
            <i className="bi bi-emoji-laughing"></i>
          </button>
          {inputEmpty ? (
            <button className="message-actions border-0 bg-transparent fs-2 ms-2">
              <i className="bi bi-mic"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                setMessages((prev) => [...prev, message]);
                setMessage("");
                setEmojiPickerOpen(false);
                setInputEmpty(true);
              }}
              className="send-message border-0 bg-transparent fs-2 ms-2"
            >
              <i className="bi bi-send-fill"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
