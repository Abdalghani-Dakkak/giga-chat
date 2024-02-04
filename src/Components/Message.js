export default function Message(props) {
  return (
    <div className="the-message bg-white position-relative d-flex justify-content-between w-25 p-1 ps-3 pe-3 mt-2 mb-2">
      <p className="fs-5">{props.message}</p>
      <span className="align-self-end">{props.time}</span>
    </div>
  )
}