export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={onDelete} data-id={contact.id}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
