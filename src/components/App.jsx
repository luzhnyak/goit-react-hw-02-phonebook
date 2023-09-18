import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Contacts } from './Contacts/Contacts';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  static defaultProps = {};

  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      const data = {
        id: nanoid(),
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      };

      return { contacts: [...prevState.contacts, data] };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}
