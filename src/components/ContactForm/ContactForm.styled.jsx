import styled from '@emotion/styled';

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '32px',
});

export const Label = styled.label({
  marginBottom: '12px',
});

export const Input = styled.input({
  width: '100%',
  height: '24px',
  marginTop: '4px',

  borderRadius: '4px',
  border: `1px solid rgba(33, 33, 33, 0.2);`,
});

export const Button = styled.button({
  width: '120px',
  marginLeft: 'auto',
  marginRight: 'auto',

  backgroundColor: '#9d9d9d',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#15172b'
  }
});
