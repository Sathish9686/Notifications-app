const Notification = props => {
  
        const {Icon, text , imgUrl} = props;
        return (
            <div>
                <img src={imgUrl}/>
                <p className={Icon}>{text}</p>
            </div>
        )
}

const element = (

  <div className="main-bg-container">
      <div className="notification-container">
        <div>
            <Notification Icon="Notfication1", text="information Message" imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
        </div>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
