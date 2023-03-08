import styled from '@emotion/styled';

export const Container = styled.div({
  width: '340px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '24px',
  padding: '24px',

  boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)`,
  backgroundColor: '#eee',
  borderRadius: '20px',
  color: '#15172b',
});

export const MainTitle = styled.h1(
    {
        marginBottom: '24px',
    }
)

export const SubTitle = styled.h2(
    {
        marginBottom: '16px',
    }
)