import { useEffect } from "react";

const useUpdateTitle = (title) => {
  useEffect(() => (document.title = title), [title]);
};

export default useUpdateTitle;
