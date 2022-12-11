import React from "react";
import PageTitle from "./PageTitle";
import ListingFilter from "../components/ListingFilter";
import Listing from "../components/Listing";

export default function SavedJobs() {
  const listings = [<Listing />, <Listing />];

  return (
    <>
      <PageTitle title="Saved Jobs" />
      <ListingFilter components={listings} />
    </>
  );
}
