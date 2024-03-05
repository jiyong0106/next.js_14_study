// import { NextResponse } from "next/server";

// export async function POST() {
//   const data = [
//     {
//       id: 1,
//       email: "jimovie@jiflex.com",
//       name: "Jimovie",
//     },
//     {
//       id: 2,
//       email: "netmovie@jiflex.com",
//       name: "Netmovie", 
//     }
//   ];
  
//   return NextResponse.json(data);
// }


// import { NextResponse } from "next/server";

// export async function POST(req, res) {
//   const data = [
//     {
//       id: 1,
//       email: "jimovie@jiflex.com",
//       name: "Jimovie",
//     },
//     {
//       id: 2,
//       email: "netmovie@jiflex.com",
//       name: "Netmovie",
//     },
//   ];
//   const clientData = req.body;
//   const user = data.find((user) => user.email === clientData.email);
//   if (user) {
//     return NextResponse.json(user);
//   } else {
//     return res.status(404).json({ message: "User not found" });
//   }
// }


// export async function POST(req, res) {
//   const data = [
//     {
//       id: 1,
//       email: "jimovie@jiflex.com",
//       name: "Jimovie",
//     },
//     {
//       id: 2,
//       email: "netmovie@jiflex.com",
//       name: "Netmovie", 
//     }
//   ];

//   const clientData = req.body;
//   const user = data.find(user => user.email === clientData.email);

//   if (user) {
//     return res.json(user);
//   } else {
//     return res.status(404).json({ message: 'User not found' });
//   }
// }

export default async function handler(req, res) {
  const data = [
    {
      id: 1,
      email: "jimovie@jiflex.com",
      name: "Jimovie",
    },
    {
      id: 2,
      email: "netmovie@jiflex.com",
      name: "Netmovie", 
    }
  ];

  // POST 요청만 처리
  if (req.method === 'POST') {
    const clientData = req.body;
    const user = data.find(user => user.email === clientData.email);

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } else {
    // POST 요청 이외의 요청에 대해 405 에러 반환
    res.status(405).end(); // Method Not Allowed
  }
}