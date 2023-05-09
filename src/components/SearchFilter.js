import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const SearchFilter = () => {
  const router = useRouter();
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        // setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);
  return (
    <div className="filter">
      {filters?.map((filter) => (
        <div className="filter-data" key={filter.queryName}>
          <select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className="location">
        {/* <button
          onClick={() => setShowLocations(!showLocations)}
          className="btn btn-outline-primary"
        >
          Search Location
        </button> */}
        {showLocations && (
          <div className="search-term">
            <input
              placeholder="Type Here"
              value={searchTerm}
              width="300px"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <MdCancel onClick={() => setSearchTerm("")} />
            )}
            {loading && <div className="spinner-border mt-3" role="status" />}
            {showLocations && (
              <div style={{ height: "300px", overflow: "auto" }}>
                {locationData?.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "gray",
                        padding: "20px",
                        borderBottom: "1px",
                        borderColor: "grey",
                      }}
                      role="button"
                    >
                      {location.name}
                    </p>
                  </div>
                ))}
                {!loading && !locationData?.length && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    <Image src={noresult} />
                    <p className="mt-3">Waiting to search!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
