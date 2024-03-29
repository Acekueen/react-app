import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MantineProvider, Text,AppShell, Navbar, Button, Group} from '@mantine/core';
import { ClassNames, MantineShadow, Styles, Selectors, DefaultProps, rem } from '@mantine/styles';


function App() {
  return (
    <AppShell
      navbar={
        <Navbar
          width={{ base: 300 }}
          height='100vh'
        >
          <Group
            spacing='lg'
            grow
            sx={{ margin: 'auto 0 auto 0' }}
          >
            <Navbar.Section>
              <Button variant='subtle'fullWidth>
                Assets/Hosts
              </Button>
              <Button variant='subtle' fullWidth>
                Software
              </Button>
              <Button variant='subtle' fullWidth>
                Configurations
              </Button>
            </Navbar.Section>
          </Group>
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App;



