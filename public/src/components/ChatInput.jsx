import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

export const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />

          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type your message here ..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 5% 95%;
//   align-items: center;
//   background-color: #080420;
//   padding: 0 2rem;
//   padding-bottom: 0.3rem;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//   padding: 0 1rem;
//   gap :1rem;
//   }
//   .button-container{
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     color: white;
//     .emoji {
//       positon: relative;
//       svg {
//         font-size: 1.5rem;
//         color: #ffff00c8;
//         cursor: pointer;

//       }
//       .emoji-picker-react{
//         position: absolute;

//         top: -350px;
//         background-color:#080420;
//         box-shadow: 0 5px 10px #9a86f3;
//         border-color:#9a86f3;
//         .emoji-scroll-wrapper::-webkit-scrollbar{
//          background-color: #080420;
//          width: 5px;
//          &-thumb{
//          background-color: #9a86f3;
//          }
//         }
//         .emoji-categories{
//         button{
//           filter: contrast(0);
//           }
//         }
//         .emoji-search{
//         background-color:transparent;
//         border-color: #9186f3;
//         }
//         .emoji-group: before {
//          background-color: #080420;
//         }

//       }
//     }
//   }
//   .input-container {
//     width: 100%;
//     border-radius: 2rem;
//     display:flex;
//     align-items: center;
//     gap: 2rem;
//     background-color: #ffffff34;
//     input {
//       width: 90%;
//       height: 60%;
//       background-color: transparent;
//       color: white;
//       border: none;
//       padding-left: 1rem;
//       font-size: 1.2rem;
//       &::selection {
//         background-color: #9a86f3;
//       }
//       &:focus {
//         outline: none;
//       }
//     }
//       button{
//       padding: 0.3rem 2rem;
//       border-radius: 2rem;
//       display: flex;
//       justify-content: center
//       align-items: center;
//       background-color: #9a86f3;
//       border: none;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//    padding: 0.3rem 1rem;
//    svg{
//    font-size: 1rem;}
//   }
//       svg{
//       font-size: 2rem;
//       color: white;
//       }

//       }
//   }
// `;

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;

    .emoji {
      position: relative; /* Fixed typo */
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }

      /* Emoji picker wrapper */
      .emoji-picker-wrapper {
        position: absolute; /* Correct position handling */
        top: -350px; /* Adjust if necessary */
        background-color: #080420;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        border-color: #9a86f3;
      }

      /* Scrollbar */
      .emoji-scroll-wrapper::-webkit-scrollbar {
        background-color: #080420;
        width: 5px;
      }
      .emoji-scroll-wrapper::-webkit-scrollbar-thumb {
        background-color: #9186f3;
      }

      /* Other Picker styles */
      .emoji-categories button {
        filter: contrast(0);
      }
      .emoji-search {
        background-color: transparent;
        border-color: #9186f3;
      }
      .emoji-group:before {
        background-color: #080420;
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;

    input {
      width: 90%;
      height: 2rem; /* Better height control */
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center; /* Added missing semicolon */
      align-items: center;
      background-color: #9a86f3;
      border: none;

      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }

      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
