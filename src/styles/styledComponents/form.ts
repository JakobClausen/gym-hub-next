import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
`;

export const Form = styled.form`
  width: 100%;
  padding: 30px 0px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.blackText};
  opacity: 0.5;
  font-size: 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.blackText};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.blackText};
    opacity: 0.4;
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.blackText};
    opacity: 0.4;
  }
  &:focus {
    outline: none !important;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
`;
