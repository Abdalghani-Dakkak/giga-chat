import { useState } from "react";
// import { User } from "../Pages/Website/Context/UserContext";
import Message from "./Message";
import EmojiPicker from "emoji-picker-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { send } from "../rtk/Slices/MessagesSlice";

export default function UserChat() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");

  const messagesState = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  console.log(messagesState);

  // const user = useContext(User);

  window.onkeydown = (e) => {
    if (e.key === "Enter" && !inputEmpty) {
      dispatch(send(message));
      setMessage("");
      setEmojiPickerOpen(false);
      setInputEmpty(true);
    }
  };

  return (
    <div className="the-chat d-flex flex-column justify-content-between">
      <header className="user-chat d-flex justify-content-between p-2 ps-3 pe-3 position-fixed top-0 end-0 z-1">
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
          <div>
            <Message message="Hello world" time="10:34 PM" />
          </div>
          <div className="d-flex flex-column align-items-end">
            {messagesState.map((message, index) => (
              <Message
                key={index}
                sended={true}
                message={message}
                time="12:00 AM"
              />
            ))}
          </div>
        </div>
        <div className="write-message d-flex ps-2 pe-2 position-fixed bottom-0 end-0">
          <div className="d-flex justtify-content-center align-items-center">
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
                dispatch(send(message));
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
