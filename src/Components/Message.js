import styled from "styled-components";

const TheMessage = styled.div.attrs(() => ({
  className: "d-flex flex-wrap p-1 ps-3 pe-3",
}))`
  width: fit-content;
  max-width: 50%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.message};
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;

  & p {
    max-width: 100%;
    font-size: 20px;
    text-wrap: wrap;
    word-wrap: break-word;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    & p {
      font-size: 16px;
    }
  }
`;
const TheMessageSended = styled.div.attrs(() => ({
  className: "d-flex flex-wrap p-1 ps-3 pe-3",
}))`
  width: fit-content;
  max-width: 50%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;

  & p {
    max-width: 100%;
    font-size: 20px;
    text-wrap: wrap;
    word-wrap: break-word;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    & p {
      font-size: 16px;
    }
  }
`;
const BeforeMessage = styled.span`
  display: inline-block;
  border: 10px solid;
  border-color: transparent;
  border-inline-end-color: ${(props) => props.theme.message};
  border-block-end-color: ${(props) => props.theme.message};
  margin-inline-start: -10px;
`;
const BeforeMessageSended = styled.span`
  display: inline-block;
  border: 10px solid;
  border-color: transparent;
  border-inline-start-color: ${(props) => props.theme.main};
  border-block-end-color: ${(props) => props.theme.main};
  margin-inline-start: auto;
  margin-inline-end: -10px;
`;

export default function Message(props) {
  return (
    <>
      {!props.sended ? (
        <>
          <TheMessage>
            <p className="m-0">{props.message}</p>
            <span className="w-100 text-end">{props.time}</span>
          </TheMessage>
          <div style={{ transform: "translateY(-105.5%)" }}>
            <BeforeMessage></BeforeMessage>
          </div>
        </>
      ) : (
        <>
          <TheMessageSended>
            <p className="m-0">{props.message}</p>
            <span className="w-100 text-end">{props.time}</span>
          </TheMessageSended>
          <div style={{ transform: "translateY(-105.5%)" }}>
            <BeforeMessageSended></BeforeMessageSended>
          </div>
        </>
      )}
    </>
  );
}
