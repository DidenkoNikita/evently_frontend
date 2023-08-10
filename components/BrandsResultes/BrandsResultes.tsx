import { HeaderFilter } from "../HeaderFilter/HeaderFilter";

import i18n from "i18next";

import resources from "@/locales/resource";
import { Brand } from "@/store/counter/brandSlice";
import { Footer } from "../Footer/Footer";

import css from './BrandsResultes.module.css';
import { BrandComponent } from "../BrandComponent/BrandComponent";

i18n.init({
  resources,
  lng: "en"
});

interface Props {
  stateFilter: boolean;
  setStateFilter: any;
  filterBrands: Brand[] | [];
}

export const BrandsResultes = ({ stateFilter, setStateFilter, filterBrands }: Props): JSX.Element => {
  return (
    <div>
      <HeaderFilter
        title={i18n.t('brand_resultes')}
        setStateFilter={setStateFilter}
        filterBrands={filterBrands}
      />
      <div className={css.wrapper}>
        {
          filterBrands.map((brand, index) => {
            return (
              <BrandComponent
                key={index}
                brand={brand}
                link={`/home/services/${brand.type}`}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}