"use client"
import { useState } from "react"
import axios from "axios"

export default function Home() {
  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [response, setResponse] = useState<any>(null)
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleRequest() {
    setLoading(true)
    setResponse(null)

    try {
      const res = await axios.post("/api/proxy", {
        url, 
        method, 
        body: method === "POST" || method === "PUT" ? body : undefined  
      })

      setResponse(res.data)

      const data = res.data
      setResponse(data)
    } catch (error) {
      setResponse({ error: "Failed to fetch data" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="w-full max-w-5xl space-y-6 relative z-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ⚡ API Tester
          </span>
        </h1>

        {/* Request Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl space-y-5">

          {/* URL */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Request URL</label>
            <input
              className="w-full p-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter API endpoint, e.g. https://api.example.com/data"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          {/* Method */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Method</label>
            <select
              className="w-full p-3 rounded-lg bg-black/60 border border-white/20 text-white focus:ring-2 focus:ring-purple-500"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>

          {/* Body */}
          {(method === "POST" || method === "PUT") && (
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Request Body</label>
              <textarea
                className="w-full p-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none h-36 resize-none"
                placeholder='{ "name": "Product", "data": { "price": 100 } }'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          )}

          {/* SEND BUTTON */}
          <button
            onClick={handleRequest}
            className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-purple-400 to-cyan-400 hover:scale-[1.02] transition-all duration-200 shadow-lg flex justify-center items-center gap-2"
          >
            {loading ? "Sending..." : "Send Request "}
          </button>
        </div>

        {/*  Response Panel */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-white">
              Response
            </h2>

          </div>

          <div className="bg-black border border-green-500/20 text-green-400 p-4 rounded-lg font-mono text-sm max-h-[400px] overflow-auto">
            {loading
              ? "Loading..."
              : response
              ? JSON.stringify(response, null, 2)
              : "No response yet..."}
          </div>
        </div>

      </div>
    </div>
  )
}

//https://api.restful-api.dev/collections
//https://free-apis.github.io/#/categories/Books