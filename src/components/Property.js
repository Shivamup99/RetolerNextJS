import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
const Property = ({ property }) => {
  return (
    <div className="property m-4">
      <Link href={`/property/${property.externalID}`}>
        <div className="card mb-2">
          <div className="view overlay zoom">
            <Image
              src={
                property.coverPhoto
                  ? property.coverPhoto.url
                  : "https://content.mediastg.net/dyna_images/mls/1470/22201494.jpgx?d=0"
              }
              width={400}
              height={400}
              className="card-img-top img-fluid"
              alt={property.id}
            />
          </div>

          <div className="card-body">
            <div className="card-info">
              <div className="card-title">
                AED {millify(property.price)}
                {property.rentFrequency && `/${property.rentFrequency}`}
              </div>
              <div className="card-data">
                <Image
                  src={property?.agency?.logo?.url}
                  alt="fgs"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain", borderRadius: "50%" }}
                />
                <span style={{ marginLeft: "10px" }}>
                  {property.isVerified && <GoVerified />}
                </span>
              </div>
            </div>

            <p className="card-text" title={property.title}>
              {property.title.slice(0, 60)}
            </p>
            <hr style={{ color: "gray" }} />
            <div className="prop-info">
              <span>
                {property.rooms}{" "}
                <FaBed style={{ marginLeft: "10px", color: "goldenrod" }} />
              </span>
              <span>
                {property.baths}
                <FaBath style={{ marginLeft: "10px", color: "goldenrod" }} />
              </span>
              <span>
                {millify(property.area)}sqft
                <BsGridFill
                  style={{ marginLeft: "10px", color: "goldenrod" }}
                />
              </span>
            </div>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          </div>
        </div>
        {/* Card */}
      </Link>
      {/* <Link href={`/property/${property.externalId}`}>
        <div className="property-image">
          <Image
            src={
              property.coverPhoto
                ? property.coverPhoto.url
                : "https://content.mediastg.net/dyna_images/mls/1470/22201494.jpgx?d=0"
            }
            width={400}
            height={400}
            alt={property.id}
          />
          <span>{property.isVerified && <GoVerified />}</span>
          <p>
            AED {millify(property.price)}
            {property.rentFrequency && `/${property.rentFrequency}`}
          </p>
        </div>
        <div className="info">
          <img
            src={property?.agency?.logo?.url}
            alt="fgs"
            width={"100px"}
            height={"100px"}
          />
          <p>
            {property.rooms} <FaBed />| {property.baths}
            <FaBath />| {millify(property.area)}sqft
            <BsGridFill />
          </p>
        </div>
        <div className="property-info">
          {property.title > 30
            ? `${property.title.substring(0, 30)}...`
            : property.title}
        </div>
      </Link> */}
    </div>
  );
};

export default Property;
