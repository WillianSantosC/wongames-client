import Game, { GameTemplateProps } from "@/pages/Game";

type ParamsProps = {
  params: {
    slug: string;
  };
};

function getGamePageData(params: { slug: string }) {
  const output = {
    cover:
      "https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg",
    gameInfo: {
      title: `${params.slug}`,
      price: "59.00",
      description:
        "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality",
    },
  };

  return output;
}

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: "cyberpunk-2077" }];
}

export default function Index({ params }: ParamsProps) {
  const props: GameTemplateProps = getGamePageData(params);

  return <Game {...props} />;
}
