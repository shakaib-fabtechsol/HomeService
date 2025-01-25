import React, { useEffect } from "react";

function Support() {
  useEffect(() => {
    document.title = "Support";
  }, []);
  return <div>Support</div>;
}

export default Support;
