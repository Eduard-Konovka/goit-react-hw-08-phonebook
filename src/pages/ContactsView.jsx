import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Stats from 'components/Stats';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ContactAdder from 'components/ContactAdder';
import Spinner from 'components/Spinner';
import s from './pages.module.css';

export default function ContactView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const total = useSelector(contactsSelectors.getTotalContactCount);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <div className={s.list}>
          <ContactAdder forClick={toggleModal} />
          <Filter />
          <Stats />
        </div>

        {isLoadingContacts ? (
          <Spinner size={100} />
        ) : total > 0 ? (
          <div className={s.list}>
            <ContactList />
          </div>
        ) : (
          <div className={s.list}>
            <h1 className={s.alert}>You have no contacts yet!</h1>
          </div>
        )}
      </Section>

      {showModal && (
        <Modal forClose={toggleModal}>
          <ContactForm />
          <Button type="button" onClick={toggleModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </Container>
  );
}
