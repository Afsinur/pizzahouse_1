const addListLinks = (...arg) => {
  arg.forEach(({ qs, add }) => {
    add.forEach(({ href, a_txt }) => {
      qs.innerHTML += `<li><a href="${href}">${a_txt}</a></li>`;
    });
  });
};

addListLinks(
  {
    qs: q_s(`.s9_ul1>ul`),
    add: [
      { href: `#`, a_txt: `Team` },
      { href: `#`, a_txt: `Join us` },
      { href: `#`, a_txt: `Ethic` },
      { href: `#`, a_txt: `Goals` },
    ],
  },
  {
    qs: q_s(`.s9_ul2>ul`),
    add: [
      { href: `#`, a_txt: `Team` },
      { href: `#`, a_txt: `Join us` },
      { href: `#`, a_txt: `Ethic` },
      { href: `#`, a_txt: `Goals` },
    ],
  },
  {
    qs: q_s(`.s9_ul3>ul`),
    add: [
      { href: `#`, a_txt: `Team` },
      { href: `#`, a_txt: `Join us` },
      { href: `#`, a_txt: `Ethic` },
      { href: `#`, a_txt: `Goals` },
    ],
  }
);
