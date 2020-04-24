//library emotion.js https://emotion.sh/docs/introduction

//extensao que ajuda vscode-styled-components

//you can manipulate styles more programatically. a lot of control!!! difficult to do in separate documents for css(scss)

//if the component is delete, the style goes with it!

import {css} from "@emotion/core"

const color = 'pink'
const [padding, setPadding] = useState(15)

<header
  onClick={() => setPadding(padding + 15)}
//backticks
  css={css` 
    background-color: ${color};            //já que é uma template string!!!
    padding: ${padding}px;
  `}
> 
  
</header>

//animations

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }  
`

<span 
  css={css`
    display: inline-block;
    animation: 1s ${spin} linear infinite
  `}
> Poodle </span>
