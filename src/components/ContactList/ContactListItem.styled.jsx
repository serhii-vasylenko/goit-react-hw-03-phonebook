import styled from '@emotion/styled';

export const Item = styled.li({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '4px',
});

export const Button = styled.button({
  width: '60px',

  backgroundColor: '#9d9d9d',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#15172b'
  }
});
