import { useEffect, useRef } from "react";

const useOutsideAlert = (ref, clicked, setClicked, editTask) => {
  useEffect(() => {
    function handleClickOutside(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        editTask(ev);
        setClicked(!clicked);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, clicked, setClicked, editTask]);
};

export default function OutsideAlert(props) {
  const wrapperRef = useRef(null);
  useOutsideAlert(wrapperRef, props.clicked, props.setClicked, props.editTask);

  return <div ref={wrapperRef}>{props.children}</div>;
}
