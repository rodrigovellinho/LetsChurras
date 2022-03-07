import { useField, useFormikContext } from "formik";
import CurrencyInput from "react-currency-input-field";

export const CurrencyInputField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <>
      <CurrencyInput
        className="value"
        {...field}
        {...props}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        selected={field.name}
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
      />
    </>
  );
};
