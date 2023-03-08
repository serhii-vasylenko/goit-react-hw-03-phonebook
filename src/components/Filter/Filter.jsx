import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label htmlFor="">
    Find contacts by Name:
    <Input type="text" value={value} onChange={onChange}></Input>
  </Label>
);

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
