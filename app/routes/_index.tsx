import type { MetaFunction } from "@remix-run/node";
import Game from "~/components/game";

export const meta: MetaFunction = () => {
  return [
    { title: "Кот в коробке" },
    { name: "description", content: "wip" },
  ];
};

export default function Index() {
  return (
    <>
    <h1 className="header_intro">Кот в коробке</h1>
    <Game/>
    </>
  );
}
