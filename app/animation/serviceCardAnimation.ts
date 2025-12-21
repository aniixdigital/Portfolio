import gsap from "gsap";

let front: number = 0;
let rear: number = 3;

export function serviceCardAnimation(e: React.MouseEvent<HTMLButtonElement>) {

  const btn = document.querySelector(".service-btn-selected")
  const tl = gsap.timeline()
  const id = Number((e.currentTarget as HTMLElement).id); //togohere
  const len = 4;
  const queue = [1, 2, 3, 4]

  const newFirst = queue.indexOf(id)
  let temp = newFirst
  const tempIndices: number[] = []; //all temp indices

  if (btn) {
    btn.classList.remove("service-btn-selected");
     btn.removeAttribute("disabled");
  }
  (e.currentTarget as HTMLElement).classList.add("service-btn-selected");
 (e.currentTarget as HTMLElement).setAttribute("disabled", "");




  while (temp !== front) {
    console.log(queue[temp]);
    tempIndices.push(temp);

    temp = (temp + 1) % len
    console.log(temp, "666");
  }

  front = newFirst
  rear = newFirst === 0 ? len - 1 : newFirst - 1

  for (let i = 0; i < queue.length; i++) {
    const element = (front + i) % len;
    console.log(queue[element]);
  }

  const cards = gsap.utils.toArray(".card");

  const filteredIndices = [front, ...Array.from({ length: len }, (_, i) => (front + i + 1) % len)]
    .filter(i => !tempIndices.includes(i));
  const filteredCards = filteredIndices.map(index => cards[index]);
  const comingCards = tempIndices.map(index => cards[index]);

  console.log("All cards:", comingCards);
  console.log("Temp indices:", tempIndices);
  console.log("Filtered cards:", filteredCards);

  const templen = len - tempIndices.length

  tl.to(comingCards as HTMLElement[], {
    top: "-=20",
    duration: 0.1,
    stagger: 0.1
  })
  tl.to(comingCards[0] as HTMLElement, {
    scale: `+=${(templen * 0.1)}`,
    top: `+=${(templen * 32)}`,
    zIndex: `+=${templen * 10}`,
    duration: 0.05,
    opacity: 1
  }).to(comingCards.slice(1) as HTMLElement[], {
    scale: `+=${(templen * 0.1)}`,
    top: `+=${(templen * 32)}`,
    zIndex: `+=${templen * 10}`,
    opacity: `+=${templen * 0.1}`,
    duration: 0.1,
    stagger: 0.1,
    ease: "power2.in"
  }).to(comingCards as HTMLElement[], {
    top: "+=20",
    duration: 0.1,
  })
  const remainingCards = tempIndices.length;
  tl.to(filteredCards as HTMLElement[], {
    scale: `-=${remainingCards * 0.1}`,
    top: `-=${remainingCards * 32}`,
    zIndex: `-=${remainingCards * 10}`,
    opacity: `-=${remainingCards * 0.1}`,
    duration: 0.1,
    ease: "power2.out",
    stagger: 0.1
  });

  // front = id;



}