# 🧩 Softnexis Internship Task 4 – Product List with Pagination (React)

This repository contains my completed submission for **Task 4** of the **Softnexis Internship** program.

The task was to:
- Display a static list of 10 mock products
- Show **product name, price, and image**
- Implement **pagination** to display 5 products per page
- Use **locally stored images** inside the `public/images/` folder

---

## 🚀 Tech Stack

- ⚛️ React.js
- 💅 Inline CSS styling
- 📁 Static assets via `public/images`

---

## 📦 Features

- Displays 10 mock products (stored in `mockProducts.js`)
- Local image rendering from `/public/images/`
- Clean, responsive layout
- Pagination with **Previous / Next** buttons
- Fallback image if any product image fails to load

---


## 📁 Project Structure

```
softnexis-task4/
├── public/
│   └── images/            # 🔹 Product images (JPG, JPEG, WEBP, AVIF, etc.)
├── src/
│   ├── ProductList.js     # 🔹 Main product listing component
│   ├── mockProducts.js    # 🔹 Product data (25 items with name, price, image)
│   └── App.js             # 🔹 Renders the product list
├── package.json           # 🔹 Project dependencies and scripts
├── package-lock.json      # 🔹 Dependency tree lockfile
```

## ✅ How to Run

```bash
# Install dependencies
npm install
```

```bash
# Start the React app
npm start
```

App will run on http://localhost:3000

Acknowledgements
Thanks to Softnexis for the opportunity!
 by suga-25
