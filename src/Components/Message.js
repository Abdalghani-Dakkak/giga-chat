export default function Message(props) {
  return (
    <>
      {!props.sended ? (
        <>
          <div className="the-message d-flex flex-wrap p-1 ps-3 pe-3 mt-2 mb-2">
            <p className="m-0">{props.message}</p>
            <span className="w-100 text-end">{props.time}</span>
          </div>
          <div style={{ marginTop: "-27px" }}>
            <span className="before"></span>
          </div>
        </>
      ) : (
        <>
          <div className="the-message-sended d-flex flex-wrap p-1 ps-3 pe-3 mt-2 mb-2">
            <p className="m-0">{props.message}</p>
            <span className="w-100 text-end">{props.time}</span>
          </div>
          <div style={{ marginTop: "-27px" }}>
            <span className="before"></span>
          </div>
        </>
      )}
    </>
  );
}
