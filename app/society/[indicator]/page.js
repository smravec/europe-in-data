import { redirect } from "next/navigation";
import Indicator from "../../components/indicator";

const ValidIndicators = [
  ["Trust in other people", 2023, "biggest", "%", 0],
  ["Voting participation", 2023, "biggest", "%", 1],
  ["Lack of corruption score", 2023, "biggest", "", 0],
  ["Religiosity", 2010, "biggest", "%", 0],
  ["Risk of poverty", 2023, "smallest", "%", 1],
  ["Tertiary education", 2023, "biggest", "%", 1],
  ["Pisa score", 2022, "biggest", "", 0],
  ["Obesity rate", 2022, "smallest", "%", 1],
  ["Fertility rate", 2022, "biggest", "", 2],
  ["Life expectancy", 2022, "biggest", "", 1],
];

function FindIndicatorIndex(indicator) {
  return ValidIndicators.findIndex(
    (validIndicator) =>
      validIndicator[0].toLowerCase().replace(/ /g, "-") === indicator,
  );
}

export async function generateMetadata({ params }) {
  const { indicator } = await params;
  const IndicatorIndex = FindIndicatorIndex(indicator);

  if (IndicatorIndex === -1) {
    return {
      title: "Invalid Indicator",
      description: "This indicator does not exist.",
    };
  }

  const indicatorName = ValidIndicators[IndicatorIndex][0];

  return {
    title: `${indicatorName} by EU country`,
    description: `All EU countries ranked by ${indicatorName}.`,
    openGraph: {
      title: `${indicatorName} by EU country`,
      description: `Explore statistics on ${indicatorName} across EU nations.`,
      url: `https://europeindata.eu/society/${indicator}`,
      images: [
        {
          url: "/whole-logo-og.png",
          alt: "Europe in Data",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function IndicatorPage({ params }) {
  let { indicator } = await params;
  const IndicatorIndex = FindIndicatorIndex(indicator);

  if (IndicatorIndex === -1) {
    redirect("/society");
  }

  return (
    <Indicator
      Indicator={ValidIndicators[IndicatorIndex][0]}
      Year={ValidIndicators[IndicatorIndex][1]}
      Order={ValidIndicators[IndicatorIndex][2]}
      Units={ValidIndicators[IndicatorIndex][3]}
      DecimalPlaces={ValidIndicators[IndicatorIndex][4]}
      ReturnPage={"/society"}
    />
  );
}
