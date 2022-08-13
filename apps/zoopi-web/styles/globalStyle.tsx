import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
      ${reset}

      * {
        box-sizing: border-box;
      }

      body {
        width: 100%;
        overflow-x: hidden;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
      }

      html {
        font-size: 16px;
        scroll-behavior: smooth;
        width: 100%;
        overflow-x: hidden;
      }

      div,
      section,
      header,
      footer {
        display: flex;
      }

      button {
        border: none;
        outline: none;
        background: none;
        box-shadow: none;
        cursor: pointer;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
      }

      a {
        text-decoration: none;
      }

      input {
        border: none;
        outline: none;
        :focus-visible {
          outline: none;
        }
      }
    `}
  />
);
