import s from "./FormsControl.module.css";
import React from "react";

const FormControls = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <textarea {...input} {...restProps} />
    </FormControls>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <input {...input} {...restProps} />
    </FormControls>
  );
};
