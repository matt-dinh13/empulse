---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12216 (CLM-3983) - Extend contract search API with Installment Due Day "
domain: "Modules"
element_id: 1799680
diagrams: 3
connections: 13
tags:
  - class
  - modules
---

# 🔷 ContractlFinancialParameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12216 (CLM-3983) - Extend contract search API with Installment Due Day 

## 📝 Notes

Financial parameters of the Contract

## 🔗 Connections (13)

- → Usage: [[PresentedInterestRate]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]
- → Usage: [[ChargedItem]]
- ← Usage: [[Contract (Class 1802525)]]
- → Usage: [[Money (Class 1801921)]]
- → Dependency: [[Money (Class 1801921)]]
- → Usage: [[Money (Class 1801921)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-12216 (CLM-3983) - Extend contract search API with Installment Due Day 
- Custom: CBL-13442 (CLM-3983) Extend contract service and contract search API
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cashPayment | Money |  |
| downPayment | Money |  |
| initialTransactionType | string |  |
| annualInterestRate | decimal |  |
| providedCreditAmount | Money |  |
| creditAmount | Money |  |
| annuity | Money |  |
| totalMonthlyPayment | Money |  |
| terms | int |  |
| totalPaymentPerCredit | Money |  |
| providedCreditLimit | Money |  |
| netCreditLimit | Money |  |
| presentedMinInstAmount | Money |  |
| chargedItems | ChargedItem |  |
| presentedInterestRates | PresentedInterestRate |  |
| {ADD}expectedEndDate | dateTime |  |
| {ADD}firstDueDate | dateTime |  |
| {ADD}installmentDueDay | int |  |
