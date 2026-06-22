---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877465
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get list of paid after due installment calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Calculation of list of paid after due installments

Installments which were paid in debt tolerance after their due dates. 
List contains not just the installment, but also the date, from which it is treated as paid in debt tolerance (system property PARAM_DEBT_TOLERANCE_AMOUNT). 
{ADD IS-2528} {IN only} For the last installment of the contract, parameter debt tolerance for the last installment is used (system property DEBT_TOLERANCE_AMOUN_LAST_INST).{/ADD}

Input
Contract

Algorithm
As the on demand calculation algorithm would actually have to simulate incoming payment pairing - for each installment with due date in the past and sum of incoming payments grouped by date find the first date when sum of installment part amount plus debt tolerance is greater or equal to the grouped incoming payment sum - an optimization is proposed - paid date is calculated and stored during incoming payment procesing into Debt Installment. 

System selects installments with due date in the past and paid date less than the due date -  Debt Installment ( Paid Date < Installment Due Date ) -> Installment

Output
List of Installments with paid dates.

## 🔗 Connections (1)

- → Aggregation: [[Debt full info calculations]]

## 📊 Appears In (1 diagrams)

- Custom: Debt full info calculations
