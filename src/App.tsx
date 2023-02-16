import { Container } from 'solid-bootstrap';
import type { Component } from 'solid-js';
import { Header, HeaderNav } from './container'

const App: Component = () => {
  return (
    <Container>
      <Header />
      <HeaderNav />
    </Container>
  );
};

export default App;
