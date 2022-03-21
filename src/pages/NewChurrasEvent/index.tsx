import {
  Container,
  ChurrasContainer,
  DatePickerContainer,
  GuestsContainer,
  CardContainer,
} from "./styles";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import HeaderLogo from "../../components/Layout/HeaderLogo";
import FooterLogo from "../../components/Layout/FooterLogo";
import { DatePickerField } from "../../components/UI/DatePicker";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import nextId from "react-id-generator";
import * as Yup from "yup";
import { Link } from "react-router-dom";

interface Churrasco {
  id: number;
  name: string;
  day: number | Date;
  guests: [
    {
      guestId: string;
      name: string;
      value: number;
      isPayed: boolean;
    }
  ];
}

export default function NewChurrasEvent() {
  const { addChurras } = useContext(ChurrasContext);

  const navigate = useNavigate();

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const initialValues = {
    id: getRandomArbitrary(1, 20),
    name: "",
    day: null,
    guests: [
      {
        guestId: nextId(),
        name: "",
        value: null,
        isPayed: false,
      },
    ],
  };

  function onSubmitForm(values: Churrasco) {
    if (window.confirm("Você deseja criar o churrasco?")) {
      addChurras({
        ...values,
        day: format(values.day, "dd/MM/yyyy"),
      });
      navigate("/agenda");
    } else {
      return;
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo obrigatório"),
    day: Yup.date().required("Campo obrigatório").nullable(),
    guests: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        value: Yup.number().required("Campo obrigatório").nullable(),
      })
    ),
  });

  return (
    <Container>
      <HeaderLogo />
      <CardContainer>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={async (values: Churrasco) => {
            await onSubmitForm(values);
          }}
        >
          {({ values }) => (
            <Form>
              <ChurrasContainer>
                <div className="formContent">
                  <div className="formLabel">
                    <label htmlFor="name">Nome do Churras:</label>
                  </div>
                  <div className="formValidation">
                    <Field
                      className="nomeChurras"
                      type="text"
                      id={`name`}
                      name={`name`}
                      placeholder="ex: Churras de aniversário"
                    />
                    <ErrorMessage
                      name={`name`}
                      component="div"
                      className="nameFieldError"
                    />
                  </div>
                </div>
              </ChurrasContainer>

              <DatePickerContainer>
                <label htmlFor="day">Dia do Churras:</label>
                <DatePickerField name={`day`} />
                <ErrorMessage
                  name={`day`}
                  component="div"
                  className="dateFieldError"
                />
              </DatePickerContainer>

              <GuestsContainer>
                <div className="title">
                  <span>Participantes</span>
                </div>
                <FieldArray name="guests">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.guests.length > 0 &&
                        values.guests.map((friend, index) => (
                          <div className="row participante" key={index}>
                            <div className="col">
                              <label htmlFor={`guests.${index}.name`}>
                                Nome:
                              </label>
                              <Field
                                name={`guests.${index}.name`}
                                placeholder="Jane Doe"
                                type="text"
                                className="inputField name"
                              />
                              <ErrorMessage
                                name={`guests.${index}.name`}
                                component="div"
                                className="nameFieldError"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`guests.${index}.value`}>
                                Valor:
                              </label>
                              <Field
                                name={`guests.${index}.value`}
                                placeholder="R$ 20,00"
                                type="text"
                                className="inputField value"
                              />
                              {/*       <CurrencyInputField
                                name={`guests.${index}.value`}
                              /> */}
                              <ErrorMessage
                                name={`guests.${index}.value`}
                                component="div"
                                className="valueFieldError"
                              />
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="deleteParticipant"
                                onClick={() => remove(index)}
                              >
                                Excluir
                              </button>
                            </div>
                          </div>
                        ))}
                      <div className="adicionarParticipante">
                        <button
                          type="button"
                          className="secondary newParticipantBtn"
                          onClick={() =>
                            push({
                              guestId: nextId(),
                              name: "",
                              value: "",
                              isPayed: false,
                            })
                          }
                        >
                          + Participante
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </GuestsContainer>
              <div className="btnContainer">
                <Link to="/agenda">
                  <button className="btnVoltar">Voltar</button>
                </Link>
                <button type="submit" className="addChurrastBtn">
                  Adicionar Churras
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </CardContainer>
      <FooterLogo />
    </Container>
  );
}
