import axios from "axios";

export default function Posts({ sheetdata }) {
  // console.log(sheetdata, "sheetdata!!!");
  return <article>{sheetdata}</article>;
}

export async function getServerSideProps() {

  const req = await fetch("http://localhost:3000/api/sheets");
  console.log(req, 'req');
  const res = await req.json();
  // console.log(res, "ressss");
  return {
    props: {
      sheetdata: res.data,
    },
  };
}
