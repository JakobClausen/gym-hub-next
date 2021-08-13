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
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 0.05px solid #808080;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  padding-left: 10px;
  color: ${(props) => props.theme.colors.blackText};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.blackText};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.blackText};
  }
  &:focus {
    border: 0.05px solid #808080;
    box-shadow: 0px 0px 2px #808080;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
`;
