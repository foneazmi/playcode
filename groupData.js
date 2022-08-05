const data = [
  {
    category: "Lesley Test",
    name: "Testing Lesley",
    videoDuration: "00.08",
    weight: 3,
  },
  {
    category: "Virtual Face 2 Face Instructional Video",
    name: "testing",
    videoDuration: "1:19",
    weight: 2,
  },
  {
    category: "Virtual Face 2 Face Instructional Video",
    name: "VF2F Instructional Video",
    videoDuration: "3 minutes",
    weight: 1,
  },
  {
    category: "Virtual Face 2 Face Instructional Video",
    name: "Khan Test",
    videoDuration: "1.19",
    weight: 1,
  },
];

const groupedData = (rawData) =>
  rawData.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

console.log(groupedData(data));
