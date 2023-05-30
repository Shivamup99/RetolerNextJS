import Link from "next/link";
import Image from "next/image";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
import Banner from "@/components/Banner";

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className="home">
      <Banner />
      <div className="sale-property">
        {propertiesForRent.map((p) => (
          <Property property={p} key={p.id} />
        ))}
      </div>
      <div className="sale">
        <Image src="/assets/sale.jpg" width={1600} height={600} />
        <h1 className="centered">
          An Oklahoma Mansion Decked Out in ’90s Style Is the Week’s Most
          Popular Home
          <button className="btn btn-outline-warning">
            <Link href="/search?purpose=for-rent" passHref>
              Exploure Renting House
            </Link>
          </button>
        </h1>
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
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
