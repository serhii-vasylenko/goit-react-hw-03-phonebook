import PropTypes from 'prop-types';
import {Item, Button} from './ContactListItem.styled';

const ContactList = ( {name, number, id , onClick }) => {
  return (
    <Item>
      {name}: {number} <Button onClick={() => onClick(id)}>Delete</Button>
    </Item>
  );
};

export default ContactList;
ContactList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}