import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import EmojiPicker from "emoji-picker-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMesssages, send } from "../rtk/Slices/MessagesSlice";
import styled from "styled-components";

import avatar from "../assets/imgs/Avatar-Profile-Vector-PNG-Cutout.png";

import Loader from "./Loader";
import { fetchUsers } from "../rtk/Slices/UsersSlice";

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${avatar});
  background-size: cover;
  margin-inline-end: 10px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
`;
const TheChat = styled.div.attrs(() => ({
  className: "d-flex flex-column justify-content-between",
}))`
  height: 90vh;
  overflow-y: auto !important;
  @media (max-width: 991px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Header = styled.header.attrs(() => ({
  className:
    "d-flex justify-content-between p-2 ps-3 pe-3 position-fixed top-0 end-0 z-1",
}))`
  background-color: ${(props) => props.theme.main};
  width: 78%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const HeaderActions = styled.li.attrs(() => ({
  className: "fs-3 text-light",
}))`
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.secondary} !important;
  }
`;
const BackBtn = styled(Link).attrs(() => ({
  to: "/chat",
  className: "d-flex align-items-center text-light",
}))`
  padding: 2px 5px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const WriteMessage = styled.div.attrs(() => ({
  className: "d-flex ps-2 pe-2 position-fixed bottom-0 end-0",
}))`
  width: 78%;
  margin-bottom: 10vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.message};

  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 0;
  }
`;
const MessageInput = styled.input.attrs(() => ({
  id: "textMessage",
  type: "text",
  placeholder: "Write a message...",
  className: "border-0 p-3 flex-fill",
}))`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.message};
`;
const CustomFileUpload = styled.label.attrs(() => ({
  htmlFor: "file-upload",
  className: "fs-1",
}))`
  color: ${(props) => props.theme.span};
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
const MessageActions = styled.button.attrs(() => ({
  className: "border-0 bg-transparent fs-2 ms-2 me-2",
}))`
  color: ${(props) => props.theme.span};
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
const SendMessage = styled.button.attrs(() => ({
  className: "border-0 bg-transparent fs-2 ms-2 me-2",
}))`
  color: var(--span-color);
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.main};
  }
`;

export default function UserChat() {
  const { id } = useParams();

  const [inputEmpty, setInputEmpty] = useState(true);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");

  const messages = useSelector((state) => state.messages);
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  if (!messages || !usersState) {
    dispatch(fetchUsers);
    dispatch(fetchMesssages);
  }

  let selectedUser = undefined;
  if (usersState.length > 0)
    selectedUser = usersState.filter((user) => user.id === Number(id))[0];

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const userMessages = messages.data.filter(
    (m, index) => index + 1 === Number(id)
  )[0];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  window.onkeydown = (e) => {
    if (e.key === "Enter" && !inputEmpty) {
      dispatch(
        send({
          index: id - 1,
          title: message,
        })
      );
      setMessage("");
      setEmojiPickerOpen(false);
      setInputEmpty(true);
    }
  };

  return (
    <TheChat>
      <Header>
        <div className="text-light d-flex align-items-center">
          {document.body.clientWidth < 992 && (
            <BackBtn>
              <i className="bi bi-arrow-left-short fs-1"></i>
              <Avatar></Avatar>
            </BackBtn>
          )}
          <div>
            <h3 className="m-0">{selectedUser && selectedUser.name}</h3>
            <span>Last seen recently</span>
          </div>
        </div>
        <ul className="d-flex justify-content-between align-items-center w-25 fs-5 p-0 m-0">
          <HeaderActions>
            <i className="bi bi-search"></i>
          </HeaderActions>
          <HeaderActions>
            <i className="bi bi-telephone-fill"></i>
          </HeaderActions>
          <HeaderActions>
            <i className="bi bi-three-dots-vertical"></i>
          </HeaderActions>
        </ul>
      </Header>
      <div className="h-100 d-flex flex-column">
        <div id="messageContainer" className="messages flex-fill p-2 ps-4 pe-4">
          {messages.setLoading && !messages.error ? (
            <Loader />
          ) : messages.error ? (
            <div>error</div>
          ) : (
            userMessages.map((message, index) =>
              index % 2 !== 0 ? (
                <Message key={index} message={message} time="10:34 PM" />
              ) : (
                <div key={index} className="d-flex flex-column align-items-end">
                  <Message sended={true} message={message} time="12:30 AM" />
                </div>
              )
            )
          )}
          <div ref={messagesEndRef} />
        </div>
        <WriteMessage>
          <div className="d-flex justtify-content-center align-items-center">
            <CustomFileUpload>
              <i className="bi bi-link-45deg" />
            </CustomFileUpload>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <MessageInput
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
          <MessageActions
            onClick={() => setEmojiPickerOpen((prev) => (prev = !prev))}
          >
            <i className="bi bi-emoji-laughing"></i>
          </MessageActions>
          {inputEmpty ? (
            <MessageActions>
              <i className="bi bi-mic"></i>
            </MessageActions>
          ) : (
            <SendMessage
              onClick={() => {
                dispatch(
                  send({
                    index: id - 1,
                    title: message,
                  })
                );
                setMessage("");
                setEmojiPickerOpen(false);
                setInputEmpty(true);
              }}
            >
              <i className="bi bi-send-fill"></i>
            </SendMessage>
          )}
        </WriteMessage>
      </div>
    </TheChat>
  );
}
