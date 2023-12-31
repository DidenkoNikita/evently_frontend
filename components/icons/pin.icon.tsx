import { Props } from "./interface"

export const Pin = ({ color }: Props): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9999 6.24268L7.16102 15.0815C6.57523 15.6673 6.57523 16.617 7.16102 17.2028C7.74681 17.7886 8.69655 17.7886 9.28234 17.2028L18.1212 8.364C19.2927 7.19242 19.2927 5.29293 18.1212 4.12136C16.9496 2.94978 15.0501 2.94978 13.8785 4.12136L5.0397 12.9602C3.28234 14.7175 3.28234 17.5668 5.0397 19.3242C6.79706 21.0815 9.6463 21.0815 11.4037 19.3242L20.4999 10.228"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}