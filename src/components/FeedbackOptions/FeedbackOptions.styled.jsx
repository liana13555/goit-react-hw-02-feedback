import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: left;
`;

export const FeedbackBtn = styled.button`
  margin-right: 15px;
  padding: 5px;

  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #5c5858;

  &:hover,
  &:focus {
    background-color: #4b89e7;
  }
`;