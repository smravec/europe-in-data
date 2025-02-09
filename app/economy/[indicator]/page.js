import { redirect } from "next/navigation";
import Indicator from "../../components/indicator";

const ValidIndicators = [
  ["Gdp per capita", 2023, "biggest", "€", 0],
  ["Gdp per capita PPP", 2023, "biggest", "€", 0],
  ["Net average monthly wage", 2023, "biggest", "€", 0],
  ["Unemployment", 2023, "smallest", "%", 2],
  ["House price to wage", 2023, "smallest", "", 1],
  ["Gdp growth past 5 years", 2023, "biggest", "%", 2],
  ["Debt to gdp", 2023, "smallest", "%", 0],
  ["Corporate tax", 2023, "smallest", "%", 1],
  ["Capital gains tax", 2023, "smallest", "%", 1],
  ["Value added tax", 2023, "smallest", "%", 1],
  ["R&D (Innovation) to gdp", 2021, "biggest", "%", 2],
];

function FindIndicatorIndex(indicator) {
  if (indicator === "rd-innovation-to-gdp") {
    indicator = "r&d-(innovation)-to-gdp";
  }

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
      description: `Explore economic statistics on ${indicatorName} across EU nations.`,
      url: `https://europeindata.eu/economy/${indicator}`,
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
    redirect("/economy");
  }

  return (
    <Indicator
      Indicator={ValidIndicators[IndicatorIndex][0]}
      Year={ValidIndicators[IndicatorIndex][1]}
      Order={ValidIndicators[IndicatorIndex][2]}
      Units={ValidIndicators[IndicatorIndex][3]}
      DecimalPlaces={ValidIndicators[IndicatorIndex][4]}
    />
  );
}
