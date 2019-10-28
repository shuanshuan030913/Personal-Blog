import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


class CodeBlock extends Component {

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter language="null" style={solarizedLight}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;