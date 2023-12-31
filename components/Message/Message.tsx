'use client';

import { useEffect, useState } from "react";

import { IMessage } from "@/store/counter/messageSlice";

import { DoubleCheckmark } from "../icons/doubleCheckmark.icon";

import css from './Message.module.css';

interface Props {
  theme: boolean;
  message: IMessage;
}

export const Message = ({
  message,
  theme
}: Props): JSX.Element => {
  const [id, setId] = useState<number | string>('');

  const time = new Date(message.created_at);

  useEffect((): void => {
    const userId = JSON.parse(sessionStorage.getItem('user_id') || '');
    setId(Number(userId))
  }, [id]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div
      className={
        message.user_id === id ? css.wrapperMessage : (
          theme ? css.darkReceivedWrapperMessage : css.receivedWrapperMessage
        )
      }
    >
      <div className={message.user_id !== id && theme ? css.darkText : css.text}>
        {message.text}
      </div>
      <div className={css.wrapper}>
        <div className={message.user_id === id ? css.date : css.receivedDate}>
          {`${formatNumber(time.getHours())}:${formatNumber(time.getMinutes())}`}
        </div>
        <div className={css.read}>
          {message.user_id === id ? (message.is_read ? <DoubleCheckmark color="#BB83FF" /> : <DoubleCheckmark color="#AAAAAA" />) : null}
        </div>
      </div>
    </div>
  )
}
