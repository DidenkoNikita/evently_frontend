'use client';

import { Brand } from "@/store/counter/brandSlice";
import css from './BrandComponent.module.css';
import { GradeComponent } from "../GradeComponent/GradeComponent";

import i18n from "i18next";

import resources from "@/locales/resource";
import { Message } from "../icons/message.icon";
import { City } from "../icons/city.icon";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { reviewGet } from "@/store/actions/reviewsGet";
import { useSelector } from "react-redux";
import { State } from "@/store/initialState";
import { store } from "@/store/store";

interface Props {
  brand: Brand;
  link: string;
}

i18n.init({
  resources,
  lng: "en"
});

export const BrandComponent = ({brand, link}: Props): JSX.Element => {
  useEffect(() => {
    store.dispatch(reviewGet());
  }, [])

  const reviews = useSelector((state: State) => state.review);
  const filteredReviews = reviews.filter((review) => review.brand_id === brand.id)
  const router = useRouter();

  return (
    <button 
      className={css.wrapper}
      onClick={() => {
        router.push(`${link}/${brand.id}`)
      }}
    >
      <img 
        className={css.photo}
        src={brand.link_photo}
      />
      <div className={css.container}>
        <div className={css.wrapperData}>
          <div className={css.name}>
            {brand.name}
          </div>
          <div className={css.grade}>
            <GradeComponent />
          </div>
          <div className={css.reviewsWrapper}>
            <div className={css.reviews}>
              {i18n.t('reviews')}
            </div>
            <div className={css.icon}>
              <Message />
            </div>
            <div className={css.reviews}>
              {filteredReviews.length}
            </div>
          </div>
        </div>
        <div className={css.wrapperAddress}>
          <div className={css.iconCity}>
            <City
              color="#000000"
            />
          </div>
          <div className={css.addressWrap}>
            <div className={css.address}>
              {`${brand.city}, `}
            </div>
            <div className={css.address}>
              {brand.address}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}