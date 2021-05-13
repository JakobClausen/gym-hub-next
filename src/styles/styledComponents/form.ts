import styled from "styled-components";

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
  color: ${(props) => props.theme.colors.whiteText};
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
`;
