#  API Tester

A modern, full-stack API testing tool built with Next.js that allows users to send and analyze HTTP requests (GET, POST, PUT, DELETE) in real time. Designed with a clean developer-focused UI and a backend proxy to handle CORS and external API communication.

---

##  Features

-  Supports all major HTTP methods (GET, POST, PUT, DELETE)
-  Dynamic API request handling (custom URL input)
-  Backend proxy (Next.js API routes) to bypass CORS issues
-  Axios integration for clean and efficient API calls
-  JSON request body support for POST and PUT
-  Real-time API response viewer
-  Modern dark-themed UI with glassmorphism design
-  Loading states for better UX

---

##  Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Next.js API Routes (`route.js`)
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS
- **Architecture:** Full-stack (Frontend + Backend Proxy)

---

##  How It Works

1. User selects method (GET/POST/PUT/DELETE) and enters API URL
2. Frontend sends request to internal backend (`/api/proxy`)
3. Backend (route.js) forwards request to external API
4. Response is returned and displayed in UI

👉 This architecture ensures:
- No CORS issues  
- Secure handling of external APIs  
- Scalable backend logic  

---

##  Example Use Cases

- Test public APIs (e.g., REST APIs)
- Debug API responses
- Learn how HTTP methods work
- Simulate Postman-like API testing in browser

---

##  Installation & Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/api-tester.git

# Navigate into project
cd api-tester

# Install dependencies
npm install

# Run development server
npm run dev
```

---

##  Live Demo (Optional)

Add your deployed link here (e.g., Vercel)

---

##  Key Learning Outcomes

- Understanding of HTTP methods and API communication  
- Hands-on experience with Axios vs Fetch  
- Building backend APIs using Next.js (`route.js`)  
- Handling CORS using proxy architecture  
- Full-stack development in a single project  
- Designing clean, developer-friendly UI  

---

##  Future Improvements

- Add request headers (API key support)
- Implement request history
- JSON syntax highlighting
- Copy response button
- Authentication support

---

## Author

**Aishwarya M**  


---

## ⭐ If you found this useful

Give this repo a ⭐ and feel free to contribute!
