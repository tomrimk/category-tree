export const treeMock = [
  {
    id: "1",
    name: "first",
    parent: null,
    children: [{ id: "1-1", name: "first inner", parent: "1", children: [] }],
  },
  {
    id: "2",
    name: "second",
    parent: null,
    children: [
      {
        id: "2-1",
        name: "second inner",
        parent: "2",
        children: [
          {
            id: "2-1-1",
            parent: "2-1",
            name: "second inner inner",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "third",
    parent: null,
    children: [{ id: "3-1", name: "third inner", parent: "3", children: [] }],
  },
];
