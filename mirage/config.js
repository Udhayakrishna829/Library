export default function () {
  this.namespace = "/api";
  this.get("books", function () {
    return {
      data: [
        {
          type: "books",
          id: "1",
          attributes: {
            title: "Harry Potter",
            author: "JK Rowling",
            genre: "Fantacy",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
            description:
              "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
            noofbooks: 4,
          },
        },
        {
          type: "books",
          id: "2",
          attributes: {
            title: "Revolution 2020",
            author: "Chetan Bhagat",
            genre: "Romance",
            image:
              "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Revolution_2020.jpg/220px-Revolution_2020.jpg",
            description:
              "This story is concerned with a love triangle, corruption and a journey of self-discovery.",
            noofbooks: 6,
          },
        },
        {
          type: "books",
          id: "3",
          attributes: {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: "Mystery",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/81jtrIKJd2L.jpg",
            description:
              "This is a mind-bending best-selling novel that offers a controversial version of the search for the Holy Grail and the life of Jesus, suggesting that Christ, the Son of God, was also a husband and a father. ",
            noofbooks: 3,
          },
        },
        {
          type: "books",
          id: "4",
          attributes: {
            title: "Wings of Fire",
            author: "APJ Abdul Kalam",
            genre: "Autobiography",
            image:
              "https://3.imimg.com/data3/VM/WT/MY-12313319/kalam-500x500.jpeg",
            description:
              "It is the story of a boy from a humble background who went on to become a key player in Indian space research/Indian missile programs and later became the president of India.",
            noofbooks: 8,
          },
        },
        {
          type: "books",
          id: "5",
          attributes: {
            title: "The Theory of Everything",
            author: "Stephen Hawking",
            genre: "Science",
            image: "https://m.media-amazon.com/images/I/516P5ANw20L.jpg",
            description:
              "This book presents the most complex theories about black holes, expanding the universe, the origin of everything, the direction of time, and the big bang.",
            noofbooks: 2,
          },
        },
      ],
    };
  });
  this.get("selects", function () {
    return {
      data: [],
    };
  });
}
