import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "@/components/SearchFilter";
import Property from "@/components/Property";
import Image from "next/image";
import { fetchApi, baseUrl } from "@/utils/fetchApi";
const search = ({ properties }) => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="search">
        <div
          className="search-field"
          onClick={() => setSearchFilter((prevFilters) => !prevFilters)}
        >
          Search Property Name By Filter Option
          <span>
            <BsFilter />
          </span>
        </div>
      </div>
      {searchFilter && <SearchFilter />}
      <div className="prop">
        <h4>Properties {router.query.purpose}</h4>
        <div className="prop-results">
          {properties.map((p) => (
            <Property property={p} key={p.externalID} />
          ))}
        </div>
        {properties.length === 0 && (
          <div className="no-result">
            <Image src="/assets/no.png" width={200} height={200} alt="np" />
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default search;
