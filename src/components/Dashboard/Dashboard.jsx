import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Modal from "components/Modal/Modal";

import { Container, MainTitle, SubTitle } from './Dashboard.styled';
import {Button} from 'components/ContactList/ContactListItem.styled';

class Dashboard extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  formSubmit = data => {
    const isMatch = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isMatch) {
      alert(`${data.name} is already in contacts list!`);
      return;
    }

    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    this.toggleModal();
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleClick = data => {
    console.log(data);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data),
    }));
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(localContacts);
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log(this.state.contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { filter, showModal } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        
        <MainTitle>Phonebook</MainTitle>
        <Button type='button' onClick={this.toggleModal}>Open modal</Button>
        {showModal && <Modal><ContactForm onSubmit={this.formSubmit} /></Modal>}
        {/* <ContactForm onSubmit={this.formSubmit} /> */}

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.filterChange} />
        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} onClick={this.handleClick} />
        ) : (
          <p>The phonebook is empry</p>
        )}
      </Container>
    );
  }
}

export default Dashboard;
