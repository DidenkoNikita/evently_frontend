'use client';

import { useRouter } from 'next/navigation';

import i18n from "i18next";

import resources from "@/locales/resource";
import { signup } from '@/requests/signup';
import { signupWithRememberMe } from '@/requests/signupWithRememberMe';
import { User } from '@/app/signup/page';

import css from './ButtonNextRequest.module.css';

i18n.init({
  resources,
  lng: "en"
});

interface Data {
  user: User | {} | string;
  click: boolean;
}

export const ButtonNextRequest = ({
  user, 
  click
}: Data): JSX.Element => {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        if (click) {
          signupWithRememberMe(user, router)
        } else {
          signup(user, router)
        }
      }}
      className={css.button}
    >
      {i18n.t('next')}
    </button>
  )
}