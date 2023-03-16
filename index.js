const Notification = (props) => {
  const { className, imgUrl, notfnText, imgIcon, textSize } = props;
  return (
    <div className={className}>
      <img src={imgUrl} className={imgIcon} />
      <p className={`${textSize}`}>{notfnText} </p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <div className="Notification-container">
      <Notification
        className="Ntfn-1"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notfnText="Information Message"
        imgIcon="image-icon"
        textSize="text"
      />

      <Notification
        className="Ntfn-2"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notfnText="Success Message"
        imgIcon="image-icon"
        textSize="text"
      />

      <Notification
        className="Ntfn-3"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notfnText="Warning Message"
        imgIcon="image-icon"
        textSize="text"
      />

      <Notification
        className="Ntfn-4"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notfnText="Error Message"
        imgIcon="image-icon"
        textSize="text"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
