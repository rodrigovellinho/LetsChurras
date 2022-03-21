import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Container } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";

export const DatePickerField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  registerLocale("pt", pt);

  return (
    <Container>
      <DatePicker
        className="datePicker"
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        locale="pt"
      />
    </Container>
  );
};
