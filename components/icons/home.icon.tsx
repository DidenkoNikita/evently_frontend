import { Props } from "./interface";

export const HomeIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.2998 10.8074C3.2998 9.90934 3.70211 9.05854 4.3962 8.4887L9.76166 4.08372C11.237 2.87248 13.3626 2.87248 14.8379 4.08372L20.2034 8.4887C20.8975 9.05854 21.2998 9.90934 21.2998 10.8074V17.9999C21.2998 19.6568 19.9567 20.9999 18.2998 20.9999H6.29981C4.64295 20.9999 3.2998 19.6568 3.2998 17.9999V10.8074Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}