import { css } from 'linaria';

export const globals = css`
  :global() {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
`;
