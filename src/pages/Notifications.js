import React from "react";
import Listing from "../components/Listing";
import ListingFilter from "../components/ListingFilter";
import PageTitle from "./PageTitle";

export default function Notifications() {
  const listings = [<Listing />, <Listing />];
  return (
    <>
      <PageTitle title="Notifications" />
      <ListingFilter components={listings} />
    </>
  );
}
