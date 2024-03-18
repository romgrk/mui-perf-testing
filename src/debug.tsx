import * as React from 'react';

function StartIcon() {
  return <svg></svg>
}

function EndIcon() {
  return <svg></svg>
}

function Button(props: any) {
  const onClick = () => {}

  const {
    children,
    color = 'primary',
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp = <EndIcon />,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    startIcon: startIconProp = <StartIcon />,
    type,
    variant = 'text',
    ...other
  } = props;

  return (
    <button
      disabled={disabled}
      color={color}
      size={size}
      type={type}
      variant={variant}
      className={className}
      onClick={onClick}
      {...other}
    >
      {endIconProp}
      {children}
      {startIconProp}
    </button>
  )
}

function ButtonGroup() {
  return (
    <div>
      <Button key='1'>test</Button>
      <Button key='2'>test</Button>
      <Button key='3'>test</Button>
      <Button key='4'>test</Button>
      <Button key='5'>test</Button>
      <Button key='6'>test</Button>
      <Button key='7'>test</Button>
      <Button key='8'>test</Button>
      <Button key='9'>test</Button>
      <Button key='10'>test</Button>
    </div>
  )
}

function SpanGroup() {
  return (
    <div>
      <span key='1' style={{ color: 'red' }}>test</span>
      <span key='2' style={{ color: 'red' }}>test</span>
      <span key='3' style={{ color: 'red' }}>test</span>
      <span key='4' style={{ color: 'red' }}>test</span>
      <span key='5' style={{ color: 'red' }}>test</span>
      <span key='6' style={{ color: 'red' }}>test</span>
      <span key='7' style={{ color: 'red' }}>test</span>
      <span key='8' style={{ color: 'red' }}>test</span>
      <span key='9' style={{ color: 'red' }}>test</span>
      <span key='0' style={{ color: 'red' }}>test</span>
    </div>
  )
}


export default function Component() {
  const [show, setShow] = React.useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show &&
        <div>

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
          <ButtonGroup />

          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />
          <SpanGroup />

        </div>
      }
    </div>
  );
}
