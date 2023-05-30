import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Property from "@/components/Property";
import Image from "next/image";
import { fetchApi, baseUrl } from "@/utils/fetchApi";
const search = ({ properties }) => {
  const [searchFilter, setSearchFilter] = useState();
  const router = useRouter();
  return (
    <>
      <div className="search-field">
        <div className="input-group d-flex align-items-center justify-content-center w-100">
          <div class="form-outline w-25 h-25">
            <input
              type="search"
              id="form1"
              className="form-control"
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <button type="button" class="btn btn-primary">
            <BsSearch />
          </button>
        </div>
      </div>
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
