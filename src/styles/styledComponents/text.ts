import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.whiteText};
  font-size: ${(props) => props.theme.fontSize.small};
`;
export const ParagraphFrontPage = styled.p`
  color: ${(props) => props.theme.colors.whiteText};
  font-size: ${(props) => props.theme.fontSize.small};
  line-height: 20px;
  opacity: 0.8;
`;
