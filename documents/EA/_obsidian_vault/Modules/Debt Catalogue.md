---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1875692
diagrams: 10
connections: 95
tags:
  - class
  - modules
---

# 🔷 Debt Catalogue

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Entity holds contract information connected to collections and past due payments.

## 🔗 Connections (95)

- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Usage: [[AccountBalanceChangeDto]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Usage: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Usage: [[DebtCatalogDto (Class 1795940)]]
- ← Dependency «use»: [[DebtCatalogDto (Class 1795940)]]
- ← Usage: [[DebtCatalogDto (Class 1795940)]]
- ← Association: [[{ADD}EOMBillingFinishedSE]]
- ← Association: [[{DEL}CELAccountBalanceChangeSE]]
- → Dependency: [[Next installment amount calculation]]
- → Dependency: [[Next installment due date with prepayment (Requirement 1877467)]]
- → Dependency: [[Debt on penalties calculation]]
- → Dependency: [[Count of overdue installments calculation]]
- → Dependency: [[Next installment Due Date with prepayment calculation]]
- → Dependency: [[Next regular fee amount calculation]]
- → Dependency: [[Next penalty amount calculation]]
- → Dependency: [[Next principal amount calculation]]
- → Dependency: [[Date of first payment calculation]]
- → Dependency: [[Debt on principal calculation]]
- → Dependency: [[First overdue installment due date calculation]]
- → Dependency: [[Next installment amount with prepayment calculation]]
- → Dependency: [[Next fee amount calculation]]
- → Dependency: [[Debt on penalties calculation]]
- → Dependency: [[First overdue installment without tolerance calculation]]
- → Dependency: [[Collection service fee payable today calculation]]
- → Dependency: [[Sum of incoming payments after pay-off calculation]]
- → Dependency: [[Sum of prepayment calculation]]
- → Dependency: [[Latest overdue installment number calculation]]
- → Dependency: [[Date of latest payment calculation]]
- → Dependency: [[Latest payment amount calculation]]
- → Dependency: [[Debt on other installments calculation]]
- → Dependency: [[Debt on interest calculation]]
- → Dependency: [[Debt on fees calculation]]
- → Dependency: [[Sum of paid penalties calculation]]
- → Dependency: [[Sum of incoming payments calculation]]
- → Dependency: [[Debt on interest calculation]]
- → Dependency: [[Excluded Fee Overdue]]
- → Dependency: [[Due date of next installment calculation]]
- → Dependency: [[Debt on principal calculation]]
- → Dependency: [[Debt on fees calculation]]
- → Dependency: [[Next installment amount with prepayment]]
- → Dependency: [[Latest overdue installment due date calculation]]
- → Dependency: [[Debt on excluded fees calculation]]
- → Dependency: [[Debt on other installments calculation]]
- → Dependency: [[Next interest amount calculation]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (10 diagrams)

- Custom: Debt catalogue to calculation formulas
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
- Custom: PAYM-2067 (CBL-4666) Optimization of AccountBalanceChange message in late EOM processing
- Logical: CEL Account system event schema
- Logical: Contract debt tracking
- Logical: GetOnlineDebtResponse - Mapping to DebtCatalog
- Logical: GetOnlineDebtResponse - Mapping to DebtCatalog
- Logical: Mapping of AccountBalanceChange to Debt Catalog
- Logical: Others

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Change Reason | String |  |
| Count of Overdue Installments | Integer |  |
| Credit Limit | Financial Amount |  |
| Date of First Payment | Date |  |
| Date of Latest Payment | Date |  |
| Days past due | Integer |  |
| Due Date of Next Installment | Date |  |
| First Overdue Installment Due Date | Date |  |
| General debt | Financial amount |  |
| General debt with penalties | Financial amount |  |
| Latest Overdue Installment Due date | Date |  |
| Latest Overdue Installment Number | Integer |  |
| Latest payment amount | Financial amount |  |
| Next installment amount | Financial amount |  |
| Overdue Debt on Excluded Fees | Excluded Fee Overdue |  |
| Overdue Debt on Fees | Financial amount |  |
| Overdue Debt on Other Installments | Financial amount |  |
| Overdue Debt on Penalties | Financial amount |  |
| Overdue Interest Debt | Financial amount |  |
| Overdue Principal Debt | Financial amount |  |
| Sum of incoming payments | Financial amount |  |
| Sum of Paid Penalties | Financial amount |  |
| Total Collection Service Fees | Financial Amount |  |
| Total debt | Financial amount |  |
| Total Debt on Fees | Financial amount |  |
| Total Debt on Other Installments | Financial amount |  |
| Total Debt on Penalties | Financial amount |  |
| Total Interest Debt | Financial amount |  |
| Total overdue debt | Financial amount |  |
| Total Principal Debt | Financial amount |  |
| Valid From | DateTime |  |
| Valid To | DateTime |  |
| {ADD}Prepayment amount | Financial amount >= 0 |  |
| {ADD}Business date | Date |  |
| {ADD}Next instalment amount with prepayment | Financial amount >= 0 |  |
| {ADD}Next installment Due Date with Prepayment | Date |  |
| {ADD}NextPrincipalAmount | Financial amount |  |
| {ADD}NextInterestAmount | Financial amount |  |
| {ADD}NextRegularFeeAmount | Financial amount |  |
| {ADD}NextFeeAmount | Financial amount |  |
| {ADD}NextPenaltyAmount | Financial amount |  |
| {ADD}Outer Debt Principal Act | Financial amount |  |
| {ADD}Outer Debt Interest Act | Financial amount |  |
| {ADD}Outer Debt Fee Act | Financial amount |  |
| {ADD}Outer Debt Penalty Act | Financial amount |  |
| {ADD}Outer Debt Interest Total | Financial amount |  |
| {ADD}Outer Debt Fee Total | Financial amount |  |
| {ADD}Outer Debt Penalty Total | Finncial amount |  |
| {ADD}First Overdue Installment Due Date WT | Date |  |
