'use client';

import i18n from "i18next";

import resources from "@/locales/resource";
import { useState } from "react";
import { SettingsHeader } from "../SettingsHeader/SettingsHeader";

import css from './ChooseCity.module.css';
import { Change } from "../Change/Change";
import { Footer } from "../Footer/Footer";
import { HeaderFilter } from "../HeaderFilter/HeaderFilter";

i18n.init({
  resources,
  lng: "en"
});

interface Props {
  userCity: string;
  setUserCity: any;
  activeCity: boolean;
  setActiveCity: any;
}

export const ChooseCity = ({ userCity, setUserCity, activeCity, setActiveCity }: Props): JSX.Element => {
  const [activeButtonsCity, setActiveButtonsCity] = useState<string[]>([]);

  const city: string[] = [
    i18n.t('saint_petersburg'),
    i18n.t('moscow'),
    i18n.t('kazan'),
    i18n.t('kemerovo'),
    i18n.t('barnaul'),
    i18n.t('arkhangelsk'),
    i18n.t('astrakhan'),
    i18n.t('rostov_on_don'),
    i18n.t('belgorod')
  ];

  const headerCity: string = i18n.t('choose_a_sity');

  return (
    <div className={css.wrapper}>
      <HeaderFilter
        setStateFilter={setActiveCity}
        title={i18n.t('city')}
        filterBrands={[]}
      />
      <Change
        words={city}
        color={true}
        header={headerCity}
        user={userCity}
        setUser={setUserCity}
        activeButtons={activeButtonsCity}
        setActiveButtons={setActiveButtonsCity}
        setFilterCategory={null}
      />
      {
        userCity.length === 0 ? (
          <button className={css.button}>
            {i18n.t('ok')}
          </button>
        ) : (
          <button
            onClick={() => {
              setActiveCity(!activeCity)
            }}
            className={css.button}
          >
            {i18n.t('ok')}
          </button>
        )
      }
      <Footer />
    </div>
  )
}