import { Props } from "./interface"

export const Down = ({ color }: Props): JSX.Element => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 10L12.5 15L17.5 10H7.5Z"
        fill={color}
      />
    </svg>
  )
}