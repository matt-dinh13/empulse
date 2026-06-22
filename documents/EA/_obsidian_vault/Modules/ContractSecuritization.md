---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1408748
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 ContractSecuritization

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This class keeps information about demanded or about already performed securitization of contract.

## 🔗 Connections (5)

- → Dependency: [[ContractSecuritizationStatusType]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[{ADD}SecuritizedFeeItem]]
- ← Aggregation: [[SecuritizedPenaltyItem]]
- → Aggregation: [[SecuritizationTranche]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Logical: Contract securitization - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | boolean | false |
| Status | ContractSecuritizationStatusType |  |
| StatusMessage | text |  |
| AccruedInterestOnLastInstallment | FinancialAmount |  |
| AccruedInterestTillEnd OfMonth | FinancialAmount |  |
| TotalUnpaidPrincipal | FinancialAmount |  |
| TotalPaidPrincipal | FinancialAmount |  |
| TotalPaidInterest | FinancialAmount |  |
| PastPrescribedPrincipal | FinancialAmount |  |
| PastPrescribedInterest | FinancialAmount |  |
| SalePriceBase | FinancialAmount |  |
| SalePriceProvided | FinancialAmount |  |
| SaleFeeProvided | FinancialAmount |  |
| NotificationSentYN | boolean | FALSE |
| {ADD}OwnershipPercentageProvided | percent |  |
| {ADD}PreviousOwnerCodeProvided | string |  |
