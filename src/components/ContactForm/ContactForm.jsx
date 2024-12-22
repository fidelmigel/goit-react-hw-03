import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімальна кількість символів - 3")
      .max(50, "Максимальна кількість символів - 50")
      .required("Поле обов'язкове для заповнення"),
    number: Yup.string()
      .min(3, "Мінімальна кількість символів - 3")
      .max(50, "Максимальна кількість символів - 50")
      .required("Поле обов'язкове для заповнення"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.contactsForm}>
        <div>
          <label htmlFor="name">Name</label>
          <Field className={s.contactsField} id="name" name="name" />
          <ErrorMessage
            className={s.contactsError}
            name="name"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field className={s.contactsField} id="number" name="number" />
          <ErrorMessage
            className={s.contactsError}
            name="number"
            component="div"
          />
        </div>
        <button className={s.contactsButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
