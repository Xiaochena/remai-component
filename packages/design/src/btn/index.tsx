import type { FC, PropsWithChildren } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Btn: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return <button {...props} />;
};

export default Btn;
