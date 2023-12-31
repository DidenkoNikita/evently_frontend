import { Props } from "./interface"

export const ActiveGrade = ({ color }: Props): JSX.Element => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7134 1.90818C9.9361 0.616544 8.06351 0.616543 7.28618 1.90818L5.39901 5.04403L1.83347 5.86981C0.364844 6.20995 -0.213821 7.99089 0.774397 9.1293L3.17359 11.8931L2.85715 15.5394C2.72681 17.0412 4.24176 18.1419 5.62984 17.5538L8.9998 16.1261L12.3698 17.5538C13.7578 18.1419 15.2728 17.0412 15.1425 15.5394L14.826 11.8931L17.2252 9.1293C18.2134 7.99089 17.6348 6.20995 16.1661 5.86981L12.6006 5.04403L10.7134 1.90818Z"
        fill={color}
      />
    </svg>
  )
}