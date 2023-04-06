import Page404 from "../assets/images/404.png";
const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10rem",
      }}
    >
      <img loading="lazy" src={Page404} />
      <div className="help-Email" style={{ display: "flex" }}>
        <label
          style={{
            fontSize: "larger",
            marginRight: "1rem",
            paddingTop: "0.5rem",
          }}
        >
          Send us email for help :{" "}
        </label>
        <input
          style={{
            height: "2.5rem",
            width: "16rem",
            borderRadius: "10px",
            marginRight: "1rem",
          }}
          type="email"
          className="help-email-input"
        />
        <button
          style={{
            border: "none",
            borderRadius: "6px",
            color: "#FFF",
            backgroundColor: "#000",
            width: "4rem",
            height: "2.5rem",
            fontSize: "large",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
