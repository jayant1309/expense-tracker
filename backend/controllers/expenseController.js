const xlsx = require('xlsx');
const Expense = require('../models/Expense');

// Get Expense by ID
exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json(expense);
    } catch (error) {
        console.error("Detailed Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Add Expense Source 
exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, category, amount, date } = req.body;
        //validation check for missing fields

        if (!category || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    } catch (error) {
        console.error("Detailed Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Get All Expense Sources 
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expenses = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expenses);
    } catch (error) {
        console.error("Detailed Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Delete Expense Source 
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        console.error("Detailed Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Download Excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const expenses = await Expense.find({ userId }).sort({ date: -1 });

        const data = expenses.map((item) => ({
            Category: item.category,
            Amount: item.amount,
            Date: item.date.toISOString(),  // Convert date to string
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expenses");

        const filePath = './expense_details.xlsx';
        xlsx.writeFile(wb, filePath);

        res.download(filePath, 'expense_details.xlsx', (err) => {
            if (err) {
                console.error('File download error:', err);
                res.status(500).json({ message: "Failed to download file", error: err.message });
            }
        });

    } catch (error) {
        console.error("Detailed Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
