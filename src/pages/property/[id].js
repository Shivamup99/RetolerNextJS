import { baseUrl, fetchApi } from "@/utils/fetchApi";
import React from "react";
import ImageScroll from "@/components/ImageScroll";

const PropertDetail = ({ p }) => {
  return (
    <div className="detail">{p.photos && <ImageScroll data={p.photos} />}</div>
  );
};

export default PropertDetail;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      p: data,
    },
  };
}
