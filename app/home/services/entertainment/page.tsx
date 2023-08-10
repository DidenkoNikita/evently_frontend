'use client';

import i18n from "i18next";

import resources from "@/locales/resource";
import { HeaderBrand } from "@/components/HeaderBrand/HeaderBrand";
import { Footer } from "@/components/Footer/Footer";

import css from './page.module.css'
import { useEffect, useState } from "react";
import { SearchComponent } from "@/components/SearchComponent/SearchComponent";
import { CalendarOfEventsHome } from "@/components/CalendarOfEventsHome/CalendarOfEventsHome";
import { store } from "@/store/store";
import { brandGet } from "@/store/actions/getBrand";
import { useSelector } from "react-redux";
import { State } from "@/store/initialState";
import { BrandComponent } from "@/components/BrandComponent/BrandComponent";

i18n.init({
  resources,
  lng: "en"
});

export default function EntertainmentPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    store.dispatch(brandGet());
  }, [])

  const brands = useSelector((state: State) => state.brand);
  const filterBrands = brands.filter((brand) => brand.type === 'entertainment');
  console.log(filterBrands);

  return (
    <div className={css.wrapper}>
      <HeaderBrand
        title={i18n.t('calendar_of_events')}
      />
      <SearchComponent 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className={css.calendar}>
        <CalendarOfEventsHome />
      </div>
      <div className={css.wrapperBrands}>
        {
          filterBrands.map((brand, index) => {
            return (
              <BrandComponent
                key={index}
                brand={brand}
                link='/home/services/entertainment'
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}