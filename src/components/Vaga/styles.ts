import styled from 'styled-components'

export const VagasAnuncio = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};

    a {
      border-color: ${(props) => props.theme.corPrincipal};
      background-color: ${(props) => props.theme.corSecundaria};
      color: ${(props) => props.theme.corPrincipal};
    }
  }

  li {
    list-style: none;
  }
`

export const TitleAnuncioDaVaga = styled.h3``

export const LinkAnuncio = styled.a.attrs({})<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  border-color: ${(props) => props.theme.corSecundaria};
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
