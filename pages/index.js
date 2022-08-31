import { styled } from '@linaria/react';

const Header = styled.h1`
  background-color: red;
  font-size: 12px;
`;

const Home = () => {
  return (
    <div>
      <Header>Test Next Linaria Husky</Header>
    </div>
  );
};

export default Home;
