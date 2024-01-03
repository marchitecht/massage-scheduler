const title = "Health and Care";
const url = "https://schpakov.com/";
const description = "Massage for body and health";
const author = "Author";
const github = "@marchitecht";

export default function Head() {
  return (
    <>
      <meta name="github:card" content="summary" />
      <meta name="github:site" content={github} />
    </>
  );
}
