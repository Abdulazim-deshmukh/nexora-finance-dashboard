

const themeToggle = document.getElementById("themeToggle");

// load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Toggle theme

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // check current theme

    const isDarkmode = document.body.classList.contains("dark-mode");

    if (isDarkmode) {
        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");
    }

});



// Budget

const savedBudget =
    localStorage.getItem("monthlyBudget");

let monthlyBudget =
    savedBudget
        ? Number(savedBudget)
        : 10000;




// Transaction Modal

const transactionModal =
    document.getElementById("transactionModal");

const addTransactionButton =
    document.querySelector(".add-transaction-btn");

const closeModal =
    document.getElementById("closeModal");

const cancelModal =
    document.getElementById("cancelModal");

// Open Modal

addTransactionButton.addEventListener("click", function () {

    editingTransactionId = null;

    transactionForm.reset();

    modalTitle.textContent = "Add Transaction";

    submitTransaction.textContent = "Add Transaction";

    transactionModal.classList.add("active");

});

// Close Modal

closeModal.addEventListener("click", function () {
    transactionModal.classList.remove("active");
});

cancelModal.addEventListener("click", function () {
    transactionModal.classList.remove("active");
});

transactionModal.addEventListener("click", function (event) {

    if (event.target === transactionModal) {
        transactionModal.classList.remove("active");
    }
});


// Transaction Form

const savedTransactions =
    localStorage.getItem("transactions");

const transactions =
    savedTransactions
        ? JSON.parse(savedTransactions)
        : [];

let editingTransactionId = null;

transactions.forEach(function (transaction, index) {

    if (!transaction.id) {

        transaction.id = Date.now() + index;

    }

});

localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
);

const transactionForm =
    document.getElementById("transactionForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const typeInput =
    document.getElementById("type");

const categoryInput =
    document.getElementById("category");

const modalTitle =
    document.getElementById("modalTitle");

const submitTransaction =
    document.getElementById("submitTransaction");

const transactionList =
    document.getElementById("transactionList");

const searchTransaction =
    document.getElementById("searchTransaction");

const filterTransaction =
    document.getElementById("filterTransaction");

const viewAllTransactions =
    document.getElementById("viewAllTransactions");

const clearAllTransactions =
    document.getElementById("clearAllTransactions");

const exportTransactions =
    document.getElementById("exportTransactions");

const importTransactions =
    document.getElementById("importTransactions");


const importFile =
    document.getElementById("importFile");

const transactionsNav =
    document.getElementById("transactionsNav");

const transactionsSection =
    document.getElementById("transactionsSection");

const dashboardView =
    document.getElementById("dashboardView");

const dashboardNav =
    document.getElementById("dashboardNav");

const budgetSection =
    document.getElementById("budgetSection");

const budgetsNav =
    document.getElementById("budgetsNav");

const analyticsNav =
    document.getElementById("analyticsNav");

const analyticsSection =
    document.getElementById("analyticsView");

const settingsNav =
    document.getElementById("settingsNav");

const settingsView =
    document.getElementById("settingsView");

const settingsThemeToggle =
    document.getElementById("settingsThemeToggle");

const accountView =
    document.getElementById("accountView");

const userProfile =
    document.getElementById("userProfile");

const sidebarProfileName =
    document.getElementById("sidebarProfileName");

const sidebarAvatar =
    document.getElementById("sidebarAvatar");

const accountAvatar =
    document.getElementById("accountAvatar");

const editProfileButton =
    document.getElementById("editProfileButton");


const savedProfileName =
    localStorage.getItem("profileName");

const accountName =
    document.getElementById("accountName");

const profileEditForm =
    document.getElementById("profileEditForm");

const profileNameInput =
    document.getElementById("profileNameInput");

const saveProfileButton =
    document.getElementById("saveProfileButton");

const cancelProfileButton =
    document.getElementById("cancelProfileButton");

if (savedProfileName) {

    accountName.textContent =
        savedProfileName;

    sidebarProfileName.textContent =
        savedProfileName;

    sidebarAvatar.textContent =
        savedProfileName.charAt(0).toUpperCase();

    accountAvatar.textContent =
        savedProfileName.charAt(0).toUpperCase();

}




userProfile.addEventListener("click", function () {

    dashboardView.hidden = true;
    budgetSection.hidden = true;
    transactionsSection.hidden = true;
    analyticsView.hidden = true;
    settingsView.hidden = true;

    accountView.hidden = false;

    dashboardNav.classList.remove("active");
    transactionsNav.classList.remove("active");
    budgetsNav.classList.remove("active");
    analyticsNav.classList.remove("active");
    settingsNav.classList.remove("active");

    userProfile.classList.add("active");

});

editProfileButton.addEventListener("click", function () {

    profileEditForm.hidden = false;

    profileNameInput.value = accountName.textContent;

});

saveProfileButton.addEventListener("click", function () {

    const newName = profileNameInput.value.trim();

    if (newName === "") {
        alert("Please enter your name.");
        return;
    }

    accountName.textContent = newName;
    sidebarProfileName.textContent = newName;

    sidebarAvatar.textContent =
        newName.charAt(0).toUpperCase();

    accountAvatar.textContent =
        newName.charAt(0).toUpperCase();

    localStorage.setItem("profileName", newName);

    profileEditForm.hidden = true;

});

cancelProfileButton.addEventListener("click", function () {

    profileEditForm.hidden = true;

});

settingsThemeToggle.addEventListener("click", function () {

    themeToggle.click();

});

analyticsNav.addEventListener("click", function (event) {

    event.preventDefault();

    dashboardView.hidden = true;
    budgetSection.hidden = true;
    transactionsSection.hidden = true;
    analyticsView.hidden = false;
    settingsView.hidden = true;

    dashboardNav.classList.remove("active");
    transactionsNav.classList.remove("active");
    budgetsNav.classList.remove("active");
    settingsNav.classList.remove("active");

    analyticsNav.classList.add("active");

    accountView.hidden = true;

});


settingsNav.addEventListener("click", function (event) {

    event.preventDefault();

    dashboardView.hidden = true;
    budgetSection.hidden = true;
    transactionsSection.hidden = true;
    analyticsView.hidden = true;
    settingsView.hidden = false;

    dashboardNav.classList.remove("active");
    transactionsNav.classList.remove("active");
    budgetsNav.classList.remove("active");
    analyticsNav.classList.remove("active");

    settingsNav.classList.add("active");

    accountView.hidden = true;

});


dashboardNav.addEventListener("click", function (event) {

    event.preventDefault();

    dashboardView.hidden = false;
    budgetSection.hidden = false;
    transactionsSection.hidden = false;
    analyticsView.hidden = true;
    settingsView.hidden = true;
    accountView.hidden = true;

    transactionsNav.classList.remove("active");
    budgetsNav.classList.remove("active");
    analyticsNav.classList.remove("active");
    settingsNav.classList.remove("active");

    dashboardNav.classList.add("active");

});

transactionsNav.addEventListener("click", function (event) {

    event.preventDefault();

    dashboardView.hidden = true;
    budgetSection.hidden = true;
    analyticsView.hidden = true;
    settingsView.hidden = true;

    transactionsSection.hidden = false;

    dashboardNav.classList.remove("active");
    budgetsNav.classList.remove("active");
    analyticsNav.classList.remove("active");
    settingsNav.classList.remove("active");

    transactionsNav.classList.add("active");

    accountView.hidden = true;

});

budgetsNav.addEventListener("click", function (event) {

    event.preventDefault();

    dashboardView.hidden = true;
    transactionsSection.hidden = true;
    budgetSection.hidden = false;
    analyticsView.hidden = true;
    settingsView.hidden = true;

    dashboardNav.classList.remove("active");
    transactionsNav.classList.remove("active");
    analyticsNav.classList.remove("active");
    settingsNav.classList.remove("active");

    budgetsNav.classList.add("active");

    accountView.hidden = true;

});

importTransactions.addEventListener("click", function () {
    importFile.click();
});


function parseCSVRow(row) {
    const columns = [];
    let currentColumn = "";
    let insideQuotes = false;

    for (let i = 0; i < row.length; i++) {
        const character = row[i];

        if (character === '"') {
            if (insideQuotes && row[i + 1] === '"') {
                currentColumn += '"';
                i++;
            } else {
                insideQuotes = !insideQuotes;
            }
        } else if (character === "," && !insideQuotes) {
            columns.push(currentColumn);
            currentColumn = "";
        } else {
            currentColumn += character;
        }
    }

    columns.push(currentColumn);

    return columns;
}
importFile.addEventListener("change", function () {
    const file = importFile.files[0];

    const reader = new FileReader();

    reader.onload = function () {
        const csvText = reader.result;

        const rows = csvText.split("\n");

        rows.shift();

        const transactionRows = rows.map(function (row) {
            const columns = parseCSVRow(row);
            return columns;
        });

        const importedTransactions =
            transactionRows.map(function (columns) {
                return {
                    id: Date.now() + Math.random(),
                    description: columns[0],
                    amount: Number(columns[1]),
                    type: columns[2],
                    category: columns[3]
                };
            });

        transactions.push(...importedTransactions);

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );

        applyFilters();
        updateFinancialSummary();
        updateChart();
        updateBudget();
        displayCategorySpending();

        
    };

    reader.readAsText(file);
});


exportTransactions.addEventListener("click", function () {

    const headers =
        "Description,Amount,Type,Category";

    const rows =
        transactions.map(function (transaction) {

            return `"${transaction.description.replace(/"/g, '""')}",${transaction.amount},${transaction.type},${transaction.category}`;

        });

    const csv =
        [headers, ...rows].join("\n");

    const blob =
        new Blob([csv], { type: "text/csv" });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download = "nexora-transactions.csv";

    link.click();

    URL.revokeObjectURL(url);

});

function applyFilters() {


    const searchText =
        searchTransaction.value.toLowerCase();

    const filterValue =
        filterTransaction.value;

    const filteredTransactions =
        transactions.filter(function (transaction) {

            const matchesSearch =
                transaction.description
                    .toLowerCase()
                    .includes(searchText)
                ||
                transaction.category
                    .toLowerCase()
                    .includes(searchText);

            const matchesFilter =
                filterValue === "all"
                ||
                transaction.type === filterValue;

            return matchesSearch && matchesFilter;


        });

    displayTransactions(filteredTransactions);
}

applyFilters();

searchTransaction.addEventListener("input", function () {

    applyFilters();

});

// filter dropdown

filterTransaction.addEventListener("change", function () {

    applyFilters();

});

viewAllTransactions.addEventListener("click", function () {

    searchTransaction.value = "";
    filterTransaction.value = "all";

    applyFilters();

});

clearAllTransactions.addEventListener("click", function () {

    const confirmClear =
        confirm("Are you sure you want to delete all transactions?");

    if (!confirmClear) {
        return;
    }

    transactions.length = 0;

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    applyFilters();

    updateFinancialSummary();

    updateChart();

    displayCategorySpending();

    updateBudget();
})


const totalBalance =
    document.getElementById("totalBalance");

const totalIncome =
    document.getElementById("totalIncome");

const totalExpenses =
    document.getElementById("totalExpenses");

const totalSavings =
    document.getElementById("totalSavings");

const transactionCount =
    document.getElementById("transactionCount");

const budgetLimit =
    document.getElementById("budgetLimit");

const budgetSpent =
    document.getElementById("budgetSpent");

const budgetProgressBar =
    document.querySelector(".progress-bar");

const budgetPercentageText =
    document.getElementById("budgetPercentage");

const budgetMessage =
    document.getElementById("budgetMessage");


// Financial calculations
function formatCurrency(amount) {

    if (amount < 0) {

        return `-₹${Math.abs(amount).toLocaleString("en-IN")}`;

    }

    return `₹${amount.toLocaleString("en-IN")}`;

}

function updateBudget() {

    let monthlyExpenses = 0;

    transactions.forEach(function (transaction) {

        if (transaction.type === "expense") {

            const transactionDate =
                new Date(transaction.id);

            const currentDate =
                new Date();

            if (

                transactionDate.getMonth() === currentDate.getMonth() &&
                transactionDate.getFullYear() === currentDate.getFullYear()
            ) {
                monthlyExpenses += transaction.amount;
            }

        }
    });

    budgetLimit.textContent =
        formatCurrency(monthlyBudget);

    budgetSpent.textContent =
        formatCurrency(monthlyExpenses);

    const remainingBudget =
        monthlyBudget - monthlyExpenses;

    if (remainingBudget < 0) {

        budgetProgressBar.classList.add("over-budget");

    } else {

        budgetProgressBar.classList.remove("over-budget");
    }

    if (remainingBudget >= 0) {

        budgetMessage.textContent =
            `${formatCurrency(remainingBudget)} remaining this month`;

    } else {

        budgetMessage.textContent =
            `${formatCurrency(Math.abs(remainingBudget))} over budget`;
    }





    let budgetPercentage = 0;

    if (monthlyBudget > 0) {
        budgetPercentage =
            Math.min(
                (monthlyExpenses / monthlyBudget) * 100,
                100
            );
    }

    budgetProgressBar.style.width =
        `${budgetPercentage}%`;

    budgetPercentageText.textContent =
        `${Math.round(budgetPercentage)}%`;

}

updateBudget();

function getCategoryExpenses() {

    const categoryExpenses = {};

    transactions.forEach(function (transaction) {

        if (transaction.type === "expense") {

            if (!categoryExpenses[transaction.category]) {

                categoryExpenses[transaction.category] = 0;

            }

            categoryExpenses[transaction.category] +=
                transaction.amount;
        }
    });

    return categoryExpenses;


}

function getCategoryPercentages() {

    const categoryExpenses =
        getCategoryExpenses();

    const totalExpenses =
        Object.values(categoryExpenses)
            .reduce(function (total, amount) {
                return total + amount;
            }, 0);

    if (totalExpenses === 0) {
        return {};
    }

    const categoryPercentages = {};

    Object.keys(categoryExpenses).forEach(function (category) {

        categoryPercentages[category] =
            (categoryExpenses[category] / totalExpenses) * 100;
    });

    return categoryPercentages;
}

function displayCategorySpending() {

    const categoryExpenses =
        getCategoryExpenses();

    const categoryPercentages =
        getCategoryPercentages();

    const categorySpending =
        document.getElementById("categorySpending");

    categorySpending.innerHTML = "";

    if (Object.keys(categoryExpenses).length === 0) {
        categorySpending.innerHTML = `
        <div class="no-category-data">
            No expense data available.
        </div>
    `;

        return;
    }

    Object.keys(categoryExpenses).forEach(function (category) {

        const amount =
            categoryExpenses[category];

        const categoryItem =
            document.createElement("div");

        categoryItem.classList.add("category-item");

        categoryItem.innerHTML = `
    <div class="category-header">
        <span>${category}</span>
        <strong>${formatCurrency(amount)}</strong>
    </div>

    <div class="category-progress">
        <div
            class="category-progress-bar"
            style="width: ${categoryPercentages[category]}%"
        ></div>
    </div>

    <div class="category-percentage">
        ${Math.round(categoryPercentages[category])}%
    </div>
`;
        categorySpending.appendChild(categoryItem);
    });


}


function updateFinancialSummary() {

    let income = 0;

    let expenses = 0;

    transactions.forEach(function (transaction) {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    });

    const balance = income - expenses;

    const savings = balance;

    transactionCount.textContent =
        `${transactions.length} ${transactions.length === 1
            ? "transaction"
            : "transactions"
        }`;

    totalBalance.textContent = formatCurrency(balance);

    totalIncome.textContent = formatCurrency(income);

    totalExpenses.textContent = formatCurrency(expenses);

    totalSavings.textContent = formatCurrency(savings);

    const analyticsIncome =
        document.getElementById("analyticsIncome");

    const analyticsExpenses =
        document.getElementById("analyticsExpenses");

    const analyticsSavings =
        document.getElementById("analyticsSavings");

    const analyticsSavingsRate =
        document.getElementById("analyticsSavingsRate");

    analyticsIncome.textContent = formatCurrency(income);
    analyticsExpenses.textContent = formatCurrency(expenses);
    analyticsSavings.textContent = formatCurrency(savings);

    const comparisonIncome =
        document.getElementById("comparisonIncome");

    const comparisonExpenses =
        document.getElementById("comparisonExpenses");

    comparisonIncome.textContent =
        formatCurrency(income);

    comparisonExpenses.textContent =
        formatCurrency(expenses);

    const savingsRate =
        income > 0 ? (savings / income) * 100 : 0;

    analyticsSavingsRate.textContent =
        `${Math.round(savingsRate)}%`;
}



// Form Submission

transactionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const description = descriptionInput.value;

    const amount = Number(amountInput.value);

    const type = typeInput.value;

    const category = categoryInput.value;

    if (
        description.trim() === "" ||
        category.trim() === "" ||
        !amount ||
        amount <= 0
    ) {
        alert("Please enter valid transaction details.");
        return;
    }

    const transaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type,
        category: category,
    };

    if (editingTransactionId !== null) {

        const transactionIndex =
            transactions.findIndex(function (transaction) {

                return transaction.id === editingTransactionId;

            });

        if (transactionIndex !== -1) {

            transactions[transactionIndex] = {
                id: editingTransactionId,
                description: description,
                amount: amount,
                type: type,
                category: category
            };

        }

    } else {

        transactions.push(transaction);

    }



    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    applyFilters();

    updateFinancialSummary();

    updateChart();

    updateBudget();

    displayCategorySpending();

    editingTransactionId = null;

    transactionForm.reset();

    modalTitle.textContent = "Add Transaction";

    submitTransaction.textContent = "Add Transaction";

    transactionModal.classList.remove("active");
});

// Display Transactions

function displayTransactions(transactionData = transactions) {



    transactionList.innerHTML = "";

    const sortedTransactions = [...transactionData].sort(function (a, b) {
        return b.id - a.id;
    });

    if (transactionData.length === 0) {
        if (transactions.length === 0) {
            transactionList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">💰</div>
                <strong>No transactions yet</strong>
                <span>Add your first transaction to get started.</span>
            </div>
        `;
        } else {
            transactionList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <strong>No transactions found</strong>
                <span>Try changing your search or filter.</span>
            </div>
        `;
        }

        return;
    }

    sortedTransactions.forEach(function (transaction) {

        const transactionElement =
            document.createElement("div");

        transactionElement.classList.add("transaction");

        transactionElement.innerHTML = `

       <div class="transaction-icon ${transaction.type}">
    ${transaction.type === "income" ? "↓" : "↑"}
</div>

         <div class="transaction-info">

                <strong>
                    ${transaction.description}
                </strong>

                <span>
                    ${transaction.category}
                </span>

            </div>

            <strong class="${transaction.type}">
                ${transaction.type === "expense" ? "-" : "+"}₹${transaction.amount.toLocaleString("en-IN")}
            </strong>

            <button class="edit-transaction" data-id="${transaction.id}">
            Edit
            </button>

            <button class="delete-transaction" data-id="${transaction.id}">
            Delete
            </button>

        `;


        transactionList.appendChild(transactionElement);





    });
}



document.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-transaction")) {

        const transactionId =
            Number(event.target.dataset.id);

        const transactionIndex =
            transactions.findIndex(function (transaction) {

                return transaction.id === transactionId;

            });


        if (transactionIndex !== -1) {

            transactions.splice(transactionIndex, 1);

            localStorage.setItem(
                "transactions",
                JSON.stringify(transactions)
            );

            editingTransactionId = null;

            applyFilters();

            updateFinancialSummary();

            updateChart();

            updateBudget();

            displayCategorySpending();

        }

    }

    if (event.target.classList.contains("edit-transaction")) {

        const transactionId =
            Number(event.target.dataset.id);

        editingTransactionId = transactionId;

        const transaction =
            transactions.find(function (transaction) {
                return transaction.id === transactionId;
            });



        descriptionInput.value = transaction.description;
        amountInput.value = transaction.amount;
        typeInput.value = transaction.type;
        categoryInput.value = transaction.category;

        transactionModal.classList.add("active");

        modalTitle.textContent = "Edit Transaction";
        submitTransaction.textContent = "Update Transaction";

    }



});

updateFinancialSummary();

function getMonthlyData() {

    const monthlyData = {};

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

    ];

    months.forEach(function (month) {
        monthlyData[month] = {
            income: 0,
            expense: 0
        };
    });

    transactions.forEach(function (transaction) {

        const date = new Date(transaction.id);

        const month = date.toLocaleString("en-US", {
            month: "short"
        });

        monthlyData[month][transaction.type] += transaction.amount;
    });

    return monthlyData;
}


function getLastSixMonths() {

    const months = [];

    const currentDate = new Date();

    for (let i = 5; i >= 0; i--) {

        const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - i,
            1
        );

        const month = date.toLocaleString("en-US", {
            month: "short"
        });

        months.push(month);
    }

    return months;
}


function updateChart() {



    const monthlyData = getMonthlyData();

    const lastSixMonths = getLastSixMonths();

    const chartIncome = lastSixMonths.map(function (month) {

        return monthlyData[month].income;

    });

    const chartExpense = lastSixMonths.map(function (month) {
        return monthlyData[month].expense;
    });



    const highestChartValue =
        Math.max(...chartIncome, ...chartExpense);

    const chartHeights = chartIncome.map(function (income) {

        if (highestChartValue === 0) {

            return 0;
        }

        return (income / highestChartValue) * 100;
    });



    const chartExpenseHeights = chartExpense.map(function (expense) {

        if (highestChartValue === 0) {
            return 0;
        }

        return (expense / highestChartValue) * 100;
    });

    const chartBarsContainer =
        document.querySelector(".chart-bars");


    chartBarsContainer.innerHTML = "";

    chartHeights.forEach(function (height, index) {



        const barGroup =
            document.createElement("div");

        barGroup.classList.add("bar-group");

        if (index === chartHeights.length - 1) {
            barGroup.classList.add("current-month");
        }

        const incomeBar =
            document.createElement("div");

        incomeBar.classList.add("bar", "income-bar");

        incomeBar.style.height =
            `${height}%`;

        const incomeValue =
            document.createElement("span");

        incomeValue.classList.add("chart-value");

        if (chartIncome[index] > 0) {
            incomeValue.textContent =
                `₹${chartIncome[index].toLocaleString("en-IN")}`;
        }

        incomeBar.append(incomeValue);

        barGroup.appendChild(incomeBar);

        const expenseBar =
            document.createElement("div");

        expenseBar.classList.add("bar", "expense-bar");

        expenseBar.style.height =
            `${chartExpenseHeights[index]}%`;

        const expenseValue =
            document.createElement("span");

        expenseValue.classList.add("chart-value");

        if (chartExpense[index] > 0) {
            expenseValue.textContent =
                `₹${chartExpense[index].toLocaleString("en-IN")}`;
        }

        expenseBar.appendChild(expenseValue);

        barGroup.appendChild(expenseBar);


        chartBarsContainer.appendChild(barGroup);

    });

    const chartLabelsContainer =
        document.querySelector(".chart-labels");

    chartLabelsContainer.innerHTML = "";

    lastSixMonths.forEach(function (month) {

        const label =

            document.createElement("span");

        label.textContent = month;

        chartLabelsContainer.appendChild(label);
    });

}

updateChart();
displayCategorySpending();