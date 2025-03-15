"use client";

import ComingSoon from "../components/coming-soon";
import CountryData from "@/country-data/country-data.json"
import OwnScore from "../components/own-score";
import { Button, Space } from "@mantine/core";
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';


export default function ExportStats() {

  const leaderboardRef = useRef(null);

  const exportAsPng = async () => {
    if (!leaderboardRef.current) return;
    
    // Render the leaderboard element into a canvas
    const canvas = await html2canvas(leaderboardRef.current, {
      backgroundColor: null, // Optional: to preserve transparency
    });
    
    // Convert canvas to a PNG data URL
    const image = canvas.toDataURL('image/png');
    
    // Create a link to trigger a download of the PNG image
    const link = document.createElement('a');
    link.href = image;
    link.download = 'leaderboard.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <>
  <div ref={leaderboardRef}>
    <OwnScore Category="Overall" Order="biggest"/>
  </div>


  <Space h={"lg"}></Space>

  <Button onClick={exportAsPng}>export</Button>
  </>;
}
