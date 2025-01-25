import React, { useEffect } from "react";

function Conversations() {
  useEffect(() => {
    document.title = "Conversations";
  }, []);
  return <div>Conversations</div>;
}

export default Conversations;
