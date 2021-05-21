import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorButtonComponent from './ErrorButtonComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;
const StyledForm = styled.input`
  background-color: #242c37;
  padding: 5px 20px;
  border-radius: 10px;
  outline: none !important;
  color: #dee3ea !important;
  margin: 24px 0;
  border: 0;
`;
const StyledButton = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 800;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-out;
  &:focus {
    box-shadow: rgba(59, 130, 246, 0.5) 0px 0px 0px 4px;
  }
  &:active {
    background-color: #aaa !important;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const TheForm = () => {
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const submitReview = () => {
    setLoading(true);
    const response = fetch('http://localhost:4000/save-request', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: review,
    }).then((res) => {
      setLoading(false);
    });

    // make the request
  };

  return (
    <Container>
      give us your review
      <StyledForm
        type="text"
        name="review"
        onChange={({ target: { value } }) => {
          setReview(value);
        }}
      />
      {loading && 'LOADING!'}
      <StyledButton disabled={loading} onClick={submitReview}>
        submit
      </StyledButton>
      <br />
      <br />
      <br />
      <br />
      <ErrorButtonComponent />
    </Container>
  );
};

export default TheForm;
