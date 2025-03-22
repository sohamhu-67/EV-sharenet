# EV-sharenet

Here's a **GitHub README** with setup instructions for your **EV ShareNet** project. 🚀  

---

### **📌 EV ShareNet – P2P EV Charging Platform**  
🔋 A peer-to-peer energy-sharing platform where users can list and find nearby EV chargers.  

---

## **🛠️ Tech Stack**  
**Frontend:** React (Next.js), Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB  
**Auth:** Firebase/Auth0  
**Payments:** Stripe  
**Location Services:** Google Maps API  

---

## **📌 Features**  
✅ **List Chargers** – Users can list their home charger.  
✅ **Find Nearby Chargers** – Uses Google Maps API to locate chargers.  
✅ **Points System** – Users earn/spend points for charging.  
✅ **Secure Transactions** – Stripe for buying points.  

---

## **🚀 Getting Started**  

### **1️⃣ Clone Repository**
```sh
git clone https://github.com/your-username/ev-sharenet.git
cd ev-sharenet
```

---

## **📂 Backend Setup**  

### **2️⃣ Install Dependencies**
```sh
cd backend
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in `backend/` with:  
```
MONGO_URI=your_mongo_connection_string
STRIPE_SECRET=your_stripe_secret_key
```

### **4️⃣ Start Backend Server**
```sh
node server.js
```
Runs on: **`http://localhost:5000`**  

---

## **🎨 Frontend Setup**  

### **5️⃣ Install Frontend Dependencies**
```sh
cd ../frontend
npm install
```

### **6️⃣ Start Frontend**
```sh
npm run dev
```
Runs on: **`http://localhost:3000`**  

---

## **📌 API Endpoints**  
### **🔹 List Available Chargers**  
`GET /chargers` → Returns available chargers.  

### **🔹 Add a Charger**  
`POST /add-charger`  
```json
{
  "owner": "John Doe",
  "address": "123 EV Lane, California"
}
```

---

## **⚡ Roadmap**  
🔜 **Google Maps integration**  
🔜 **User authentication (Firebase/Auth0)**  
🔜 **Blockchain-based credits**  

---

## **📜 License**  
This project is **MIT licensed**.  

---

Let me know if you need any modifications! 🚗⚡
