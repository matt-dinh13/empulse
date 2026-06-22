---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877469
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get list of overdue installments calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Calculation of list of overdue installments

Takes into account debt tolerance (system property PARAM_DEBT_TOLERANCE_AMOUNT. 
{ADD IS-2528} {IN only}For the last installment of the contract,  debt tolerance for the last installment is used (system property DEBT_TOLERANCE_AMOUN_LAST_INST){/ADD}

Input
Contract

Algorithm
As the on demand calculation algorithm would actually have to simulate incoming payment pairing or copy debt catalogue Overdue installment calculations, an optimization was chosen and overdue installments are stored in Debt Installment during incoming payment pairing and debt catalogue update. 

System selects installments with due date in the past and paid date empty - Debt Installment ( Paid Date is null ) -> Installment


Output
List of Installments.

## 🔗 Connections (2)

- → Aggregation: [[Debt full info calculations]]
- → Dependency: [[List of overdue installments calculation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt full info calculations
