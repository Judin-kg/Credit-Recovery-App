const XLSX = require("xlsx");

/**
 * Parse Excel file and return customer credit data
 * @param {string} filePath - Uploaded excel file path
 * @returns {Array} customers
 */
const parseExcel = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet);

  // Expected Excel Columns:
  // Name | Phone | TotalCredit | PaidAmount | DueAmount | DueDate

  const customers = data.map((row) => ({
    name: row.Name,
    phone: row.Phone,
    totalCredit: row.TotalCredit,
    paidAmount: row.PaidAmount,
    dueAmount: row.DueAmount,
    dueDate: row.DueDate,
  }));

  return customers;
};

module.exports = parseExcel;
