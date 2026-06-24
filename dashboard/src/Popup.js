import Popupcss from "./Popupcss.css"
export default function Popup() {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-header">
          <h3>Authentication Required</h3>
        </div>

        <div className="popup-body">
          <p>
            You must be logged in to access the dashboard.
          </p>
          <p>
            Please login from the main application and try again.
          </p>
        </div>

        <div className="popup-footer">
          <button
            className="btn-login"
            onClick={() =>
              (window.location.href = "http://localhost:5173/login")
            }
          >
            Login
          </button>

          <button
            className="btn-home"
            onClick={() =>
              (window.location.href = "http://localhost:5173")
            }
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
