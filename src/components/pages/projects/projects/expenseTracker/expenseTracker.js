import React from 'react';
import expenseTracker from './expenseTracker.png';
import './expenseTracker.css';

export function ExpenseTracker(){
    return(
        <div id="expenseTracker-container">
            <img src={expenseTracker} alt="Expense tracker example"/>
        </div>
    )
}