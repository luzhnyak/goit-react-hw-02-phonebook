import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button, Contact } from './ContactList.styled';

export class ContactList extends Component {
  handleDelete = event => {
    const { onDelete } = this.props;

    onDelete(event.currentTarget.dataset.id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact>
              {contact.name}: {contact.number}
              <Button
                type="button"
                onClick={this.handleDelete}
                data-id={contact.id}
                title={`Delete ${contact.name}`}
              >
                <FaTimes />
              </Button>
            </Contact>
          </li>
        ))}
      </ul>
    );
  }
}
