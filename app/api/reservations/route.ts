let reservations: any[] = [];

export async function GET() {
  return Response.json(reservations);
}

export async function POST(request: Request) {
  const data = await request.json();

  const reservation = {
    id: Date.now(),
    ...data,
    status: "Pending",
  };

  reservations.push(reservation);

  return Response.json({
    success: true,
    reservation,
  });
}