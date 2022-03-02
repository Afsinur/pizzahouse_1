const sec3Div = q_s(`.sec3Div`);

const s3InfArr = [
  {
    h1: "| new format",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae sit placeat perferendis similique aliquam ducimus?",
  },
  {
    h1: "|| marster classes",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae sit placeat perferendis similique aliquam ducimus?",
  },
  {
    h1: "||| pizza resturant",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae sit placeat perferendis similique aliquam ducimus?",
  },
];

s3InfArr.forEach(({ h1, p }) => {
  sec3Div.innerHTML += `
        <div>
            <h1>${h1}</h1>
            <p>${p}</p>
        </div>
    `;
});
