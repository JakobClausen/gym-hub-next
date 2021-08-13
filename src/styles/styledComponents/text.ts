import styled from 'styled-components';

export const ParagraphSmall = styled.p`
  color: ${(props) => props.theme.colors.blackText};
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const ParagraphMedium = styled.p`
  color: ${(props) => props.theme.colors.blackText};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
export const ParagraphFrontPage = styled.p`
  color: ${(props) => props.theme.colors.blackText};
  font-size: ${(props) => props.theme.fontSize.small};
  line-height: 20px;
  opacity: 0.8;
`;
