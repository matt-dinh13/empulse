---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Logical Data Model"
domain: "Analysis Model"
element_id: 1839102
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract Status Transition Request for Termination

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Logical Data Model

## 📝 Notes

Request for termination of contract with REL account.

## 🔗 Connections (3)

- → Generalization: [[Contract Status Transition Request (Class 1879566)]]
- → Association: [[Bank Account (Class 1627830)]]
- → Dependency «use»: [[OverpaymentDisbursementType]]

## 📊 Appears In (1 diagrams)

- Logical: Contract finishing - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| finalOverpayment | Financial Amount |  |
| wayOfOverpaymentDisbursement | OverpaymentDisbursementType |  |
| availableBalance | FinancialAmount |  |
| holdBalance | FinancialAmount |  |
| ledgerBalance | FinancialAmount |  |
| totalDebt | FinancialAmount |  |
| sumNonsettledTrx | FinancialAmount |  |
| insuranceDebt | FinancialAmount |  |
| principalDebt | FinancialAmount |  |
| interestsDebt | FinancialAmount |  |
| sumEarlyRepaymentFees | FinancialAmount |  |
| feeDebt | FinancialAmount |  |
| penaltyDebt | FinancialAmount |  |
| specialDebt | FinancialAmount |  |
| ownFunds | FinancialAmount |  |
| earnedInterest | FinancialAmount |  |
