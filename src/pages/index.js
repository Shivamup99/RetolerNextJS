import Link from "next/link";
import Image from "next/image";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className="home">
      <div className="sale-property">
        {propertiesForRent.map((p) => (
          <Property property={p} key={p.id} />
        ))}
      </div>
      <div className="sale-property">
        {propertiesForSale.map((p) => (
          <Property property={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
