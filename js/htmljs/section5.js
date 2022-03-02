const s5_ul = q_s(`.sec5Div>div>ul`);

const s5_ul_arr = [
  {
    li: "Pizza",
  },
  {
    li: "Modern concept",
  },
  {
    li: "Story from shef",
  },
  {
    li: "Gallery",
  },
];

//init
s5_ul_arr.forEach(({ li }) => {
  s5_ul.innerHTML += `<li>${li}</li>`;
});
