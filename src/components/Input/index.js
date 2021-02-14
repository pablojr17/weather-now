import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

export default function InputText({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <input
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
