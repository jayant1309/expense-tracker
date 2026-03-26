# Expense Tracker

A full-stack expense tracking application with income and expense management, data visualization, and Excel export functionality.

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Multer** for file uploads
- **XLSX** for Excel export

### Frontend
- **React** with Vite
- **Chart.js** for data visualization
- **TailwindCSS** for styling
- **Axios** for API calls

### Dev Tools
- **Nodemon** for development
- **PostCSS** & **Autoprefixer**

## Features

- ✅ User authentication (Register/Login)
- ✅ Add, view, and delete income sources
- ✅ Add, view, and delete expenses
- 📊 Dashboard with financial overview
- 📈 Visualize income vs expenses with charts
- 💾 Export data to Excel format
- 🖼️ User profile with image upload
- 🎛️ Recent transactions display
- 📅 Date-based filtering

## Project Structure

```
expense-tracker/
├── backend/                 # Node.js/Express API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── uploads/            # Uploaded images
│   ├── .env               # Environment variables
│   └── server.js          # Main server file
│
└── frontend/expense-tracker/  # React application
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── pages/         # Page components
    │   ├── assets/        # Static assets
    │   ├── context/       # React context
    │   ├── hooks/         # Custom hooks
    │   └── utils/         # Helper functions
    ├── public/            # Public assets
    └── package.json
```

## Setup & Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables:**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=8000
   CLIENT_URL=http://localhost:5173
   ```

5. **Start the server:**
   ```bash
   npm run dev  # Development with nodemon
   # or
   npm start    # Production
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend/expense-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API endpoint:**
   Update the API path in `src/utils/apiPaths.js`:
   ```javascript
   export const API_BASE_URL = "http://localhost:8000/api/v1";
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/getUser` - Get user info (protected)
- `POST /api/v1/auth/upload-image` - Upload profile image

### Income
- `POST /api/v1/income/add` - Add income source (protected)
- `GET /api/v1/income/get` - Get all income (protected)
- `DELETE /api/v1/income/:id` - Delete income (protected)
- `GET /api/v1/income/downloadexcel` - Export income to Excel (protected)

### Expense
- `POST /api/v1/expense/add` - Add expense (protected)
- `GET /api/v1/expense/get` - Get all expenses (protected)
- `GET /api/v1/expense/:id` - Get expense by ID (protected)
- `DELETE /api/v1/expense/:id` - Delete expense (protected)
- `GET /api/v1/expense/downloadexcel` - Export expenses to Excel (protected)

### Dashboard
- `GET /api/v1/dashboard/` - Get dashboard data (protected)

## Environment Variables

### Backend (.env)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key for authentication
- `PORT` - Server port (default: 8000)
- `CLIENT_URL` - Frontend URL for CORS

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Key Features Explained

### Dashboard
The dashboard provides a comprehensive overview of your finances:
- **Total Balance**: Current balance (Total Income - Total Expenses)
- **Total Income**: Sum of all income entries
- **Total Expenses**: Sum of all expense entries
- **Last 30 Days**: Expense breakdown for the past month
- **Last 60 Days**: Income breakdown for the past two months
- **Recent Transactions**: Latest 5 transactions (income + expenses)

### Data Visualization
- **Bar Charts**: Compare income vs expenses
- **Line Charts**: Track financial trends over time
- **Pie Charts**: Category-wise expense distribution

### Excel Export
Export your financial data to Excel format:
- Income data with source, amount, and date
- Expense data with category, amount, and date

## Recent Bug Fixes & Improvements

### Backend
- ✅ Fixed duplicate `/api/v1/auth` route mount
- ✅ Fixed invalid `dotenv` package version (^17.2.3 → ^16.4.7)
- ✅ Fixed typo: "All fieldsvare required" → "All fields are required"
- ✅ Fixed incorrect error messages in authentication controller
- ✅ Enhanced error logging in income controller
- ✅ Cleaned up debug console.log statements

### Security
- ✅ CORS configuration for cross-origin requests
- ✅ JWT authentication middleware
- ✅ Protected routes requiring authentication
- ✅ File upload validation (images only)
- ✅ MongoDB ObjectId validation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For issues and feature requests, please open an issue on GitHub.

## Deployment

### Backend Deployment
- Compatible with Vercel, Heroku, Railway, AWS
- Set environment variables in your deployment platform
- Connect to MongoDB Atlas for cloud database

### Frontend Deployment
- Build static files: `npm run build`
- Deploy to Vercel, Netlify, or GitHub Pages
- Configure API proxy if needed

## Future Enhancements

- [ ] Category management for expenses
- [ ] Recurring transactions
- [ ] Budget setting and alerts
- [ ] Multi-currency support
- [ ] Data backup and restore
- [ ] Mobile app with React Native
- [ ] Advanced analytics and reporting
