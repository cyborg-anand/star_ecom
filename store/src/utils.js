export function formatCurrency(amount, currency) {
    // Format the amount with Intl.NumberFormat
    const formatted = new Intl.NumberFormat('en-In', {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol', // Ensure the symbol is used
    }).format(amount);

    // Add a space between the currency and amount if not already present
    return formatted.replace(/([^\d\s])(\d)/, '$1 $2');
}
