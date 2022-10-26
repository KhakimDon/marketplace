export let todos = [
  {
    id: Math.random().toString().substr(2, 6),
    title: "Что мне нужно сделать сегодня",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores et magni accusantium distinctio harum, molestiae corporis, beatae explicabo iusto dolorem ad id cupiditate ducimus aliquid. Illo dolor tempora possimus?",
    tasks: [
      {
        inputValue:"встать в 7 утра",
      },
      {
        inputValue:"покушать",
      },
      {
        inputValue:"поесть",
      },
      {
        inputValue:"поесть",
      },
    ],
    date: '12.10.2022',
  },
];

export default { todos };
