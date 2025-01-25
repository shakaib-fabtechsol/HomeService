import React, { useEffect } from "react";

function Notifications() {
  useEffect(() => {
    document.title = "Notifications";
  }, []);
  return <div>Notifications</div>;
}

export default Notifications;
