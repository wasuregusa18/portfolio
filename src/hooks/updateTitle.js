import React, { useEffect } from "react";

const useUpdateTitle = (title) => {
  console.log("hook");
  useEffect(() => (document.title = title), [title]);
};

export default useUpdateTitle;
