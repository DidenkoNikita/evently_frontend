'use client';

import { City } from '../icons/city.icon';
import css from './Header.module.css';

import i18n from "i18next";

import resources from "@/locales/resource";
import { Search } from '../icons/search.icon';
import { Notification } from '../icons/notification.icon';
import { Acquaintance } from '../icons/acquaintance.icon';
import { Filter } from '../icons/filter.icon';
import { Map } from '../icons/map.icon';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { userGet } from '@/store/actions/getUser';
import { store } from '@/store/store';
import { useSelector } from 'react-redux';
import { State } from '../Post/Post';

i18n.init({
  resources,
  lng: "en"
});

interface Button {
  icon: JSX.Element;
  link: string;
}

export const Header = ():JSX.Element => {
  const icons: (Button)[] = [
    { 
      icon: <Notification />,
      link: '/notifikation'
    }, 
    { 
      icon : <Acquaintance />,
      link: '/acquaintance'
    }, 
    { 
      icon : <Filter />,
      link: '/filter'
    }, 
    { 
      icon : <Map />,
      link: '/map'
    }
  ];

  useEffect(() => {
    console.log('idsiiss');
    
    store.dispatch(userGet())
  }, [])

  const user = useSelector((state : State) => state.user);

  console.log(user);
  
  const userData = user[0]


  const router = useRouter()

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <div className={css.address}>
          <City color="#000000" />
          <div className={css.addressText}>
            {userData ? userData.user.city : 'Loading...'}
          </div>
        </div>
        <button className={css.searchButton}>
          <Search />
          {i18n.t('search')}
        </button>
      </div>
      <div className={css.buttonWrapper}>
        {icons.map((icon, key) => {
          return (
              <button 
                key={key}
                className={css.button}
                onClick={() => router.push(icon.link)}
              >
                {icon.icon}
              </button>
          )
          })}
      </div>
    </header>
  );
}