import Content from './Views/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider
    theme={{
      colors: {
        'egg': ['#c6b653', '#ece7ce6', '#dfd69f', '#d2c679', '#d2c679', '#ac9c39', '#867a2d','#605720', '#393413', '#131106',],
        'sienna': ['#fbedea', '#f3cabf', '#eaa694', '#e28369', '#da5f3f', '#c04625', '#96361d','#6b2715', '#40170c', '#40170c',], 
        'bblue': ['#f0f0f5', '#d1d3e0', '#b3b5cc', '#9498b7', '#767aa3', '#5c6189', '#484b6b','#33364c', '#1f202e', '#0a0b0f',], 
        'cblue': ['#eff5f2', '#d0e2d9', '#b0cfc0', '#90bba6', '#71a88d', '#578e73', '#446f5a','#304f40', '#1d2f26', '#0a100d',],
        'sunset': ['#fcf5e8', '#f7e0ba', '#f2cb8d', '#ecb65f', '#e7a131', '#ce8818', '#a06a13','#724b0d', '#452d08', '#170f03',],

      },
    }}
    >
      <TypographyStylesProvider>
        <Header />
        <Content />
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;