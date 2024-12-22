import s from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={s.contactItem}>
      <p className={s.contactParagraph}>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => deleteContact(contact.id)}
        className={s.contactButton}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
