let reservations = [
  {
    id: 1,
    name: "John Smith",
    room: "Ocean View Suite",
    checkIn: "2026-07-10",
    checkOut: "2026-07-15",
    status: "Confirmed",
  },
];

export async function GET() {
  return Response.json(reservations);
}

export async function POST(request: Request) {
  const body = await request.json();

  const reservation = {
    id: Date.now(),
    ...body,
    status: "Pending",
  };

  reservations.push(reservation);

  return Response.json(reservation);
}