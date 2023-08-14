import { Props } from "./interface"

export const Filter = ({color}: Props): JSX.Element => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3 5.78584C3 4.24726 4.24726 3 5.78584 3H18.2142C19.7527 3 21 4.24726 21 5.78584C21 6.59294 20.7113 7.37343 20.186 7.98624L17.3519 11.2927C16.2644 12.5614 15.6667 14.1773 15.6667 15.8483V18C15.6667 19.6569 14.3235 21 12.6667 21H11.3333C9.67648 21 8.33333 19.6569 8.33333 18V15.8483C8.33333 14.1773 7.73559 12.5614 6.64813 11.2927L3.81398 7.98624C3.28872 7.37343 3 6.59295 3 5.78584ZM5.78584 5C5.35183 5 5 5.35183 5 5.78584C5 6.11552 5.11794 6.43433 5.33249 6.68465L8.16664 9.99116C9.5648 11.6223 10.3333 13.6999 10.3333 15.8483V18C10.3333 18.5523 10.781 19 11.3333 19H12.6667C13.219 19 13.6667 18.5523 13.6667 18V15.8483C13.6667 13.6999 14.4352 11.6223 15.8334 9.99116L18.6675 6.68465C18.8821 6.43433 19 6.11552 19 5.78584C19 5.35183 18.6482 5 18.2142 5H5.78584Z" 
        fill={color}
      />
    </svg>
  )
}