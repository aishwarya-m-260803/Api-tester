import axios from "axios"

export async function POST(req) {
  try {
    const { url, method, body } = await req.json()

    const res = await axios({
        method:method, 
        url :url,
        data : method === "POST" || method === "PUT" ? JSON.parse(body) : undefined,
    })

    const data = await res.data

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Proxy failed" }),
      { status: 500 }
    )
  }
}