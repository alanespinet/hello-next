const PageTest = props => (
  <div>
    <h1>Page Test for CSS</h1>
    <p>Please provide style tag as part of JSX</p>

    <style jsx>{`
      * {
        text-align: center;
      }

      h1 {
        color: orange;
        text-transform: uppercase
      }

      p {
        font-size: 24px;
      }
    `}</style>
  </div>
);

export default PageTest;
