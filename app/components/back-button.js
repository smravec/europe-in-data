"use client";

import { useRouter } from "next/navigation";

import { IoArrowBack } from "react-icons/io5";

import { Button } from "@mantine/core";

export default function BackButton(props) {
  const router = useRouter();
  const ReturnPage = props.ReturnPage;

  return (
    <Button
      onClick={() => {
        router.push(ReturnPage);
      }}
      variant="filled"
      color="main"
      w={"100px"}
      mb={"lg"}
      pl={"0px"}
    >
      <IoArrowBack
        style={{ marginRight: "8px", marginBottom: "2px", fontSize: "20px" }}
      />
      Back
    </Button>
  );
}
