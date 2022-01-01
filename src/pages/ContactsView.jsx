import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Stats from 'components/Stats';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ContactAdder from 'components/ContactAdder';
import Spinner from 'components/Spinner';

export default function ContactView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <Section>
        <Stats />
        <Filter />
        <ContactAdder forClick={toggleModal} />
      </Section>

      <Section>
        {isLoadingContacts ? <Spinner size={100} /> : <ContactList />}
      </Section>

      {showModal && (
        <Modal forClose={toggleModal}>
          <ContactForm />
          <Button type="button" onClick={toggleModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </>
  );
}
