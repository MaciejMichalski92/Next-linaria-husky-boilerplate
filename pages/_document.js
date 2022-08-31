import Document, { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = props => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async ctx => await Document.getInitialProps(ctx);

export default MyDocument;
