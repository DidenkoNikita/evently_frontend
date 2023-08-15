import { Props } from "./interface";

export const Heart = ({ color }: Props): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1389 4.25947C16.5998 4.07963 16.0328 4 15.4649 4C14 3.99999 12.9999 4.74022 12 5.49985C11.0176 4.7511 10 4 8.55296 4C7.99669 4 7.41614 4.05993 6.88887 4.24068C3.53101 5.33315 2.33402 8.9568 3.35101 12.1241C3.92701 13.7427 4.8549 15.211 6.06088 16.4179C7.87741 18.1599 9.85555 19.6797 12 20.9998C14.1404 19.7146 16.1547 18.1551 17.9498 16.4269C19.1638 15.2199 20.0908 13.7427 20.6578 12.1241C21.6577 8.9568 20.4607 5.33315 17.1389 4.25947Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}