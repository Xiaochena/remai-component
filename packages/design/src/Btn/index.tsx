import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Btn: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  return <button {...props} />;
};

export default Btn;
