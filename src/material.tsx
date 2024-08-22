import * as React from 'react';
import { flushSync } from 'react-dom';
import {
  Button,
  Container,
  Checkbox,
  Switch,
  Box,
  Paper,
  TextField,
} from '@mui/material'


function ButtonGroup() {
  return (
    <Paper>
      <Button key='1' variant='outlined' size='small'>test</Button>
      <Button key='2' variant='outlined' size='medium'>test</Button>
      <Button key='3' variant='outlined' size='large'>test</Button>
      <Button key='4' variant='outlined' size='medium' color='success'>test</Button>
      <Button key='5' variant='outlined' size='medium' color='error'>test</Button>
    </Paper>
  )
}

function CheckboxGroup() {
  return (
    <Paper>
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </Paper>
  )
}

function SwitchGroup() {
  return (
    <Box>
      <Switch size="small" />
      <Switch size="small" />
      <Switch size="small" />
      <Switch size="small" />
      <Switch size="small" />
    </Box>
  )
}

function InputGroup() {
  return (
    <Paper>
      <TextField key='1' />
      <TextField key='2' />
      <TextField key='3' />
      <TextField key='4' />
      <TextField key='5' />
    </Paper>
  )
}


export default function Component() {
  const [show, setShow] = React.useState(false)

  const run = () => {
    const results = []

    for (let i = 0; i < 100; i++) {
      flushSync(() => {
        setShow(false)
      })
      const start = performance.now()
      flushSync(() => {
        setShow(true)
      })
      const end = performance.now()
      results.push(end - start)
    }

    console.log(results)
  }

  return (
    <Paper>
      <div>
        <button onClick={() => setShow(!show)}>toggle</button>
        <button onClick={run}>run</button>
      </div>

      {show &&

        <Paper>
          <Container>
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
            <ButtonGroup />
          </Container>

          <Container>
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
            <CheckboxGroup />
          </Container>

          <Container>
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
            <SwitchGroup />
          </Container>

          <Container>
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
          </Container>
        </Paper>
      }
    </Paper>
  );
}
