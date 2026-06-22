---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface"
domain: "Analysis Model"
element_id: 1746997
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 List of installments for due date change

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface

## 📝 Notes

In this grid the system shows change due date simulations. 
It is refreshed always when the user changes New due date.

There are displayed results from Preapre change due date simulation.

Localization code
SER_ShowCHDDSimulations

## 📊 Appears In (1 diagrams)

- Custom: Create request for Change due date

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| 1st Installment amount | Financial amount |  |
| 2nd Installment amount | Financial amount |  |
| Chosen | radio button |  |
| New due date | date |  |
| Number of installment | int |  |
| Presented interest rate | percentage |  |
| Total amount | Financial amount |  |
