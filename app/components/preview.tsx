import Button from "./button";

export default function Preview(){
  return (
		<header className="h-screen">
			<h1 className="header_intro text-6.25xl uppercase text-center py-20">Угадай в какой коробке кот</h1>
      <Button>
        Начать игру
      </Button>
		</header>
	)
}