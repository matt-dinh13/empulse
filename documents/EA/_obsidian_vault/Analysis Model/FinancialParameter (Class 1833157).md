---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v8.0/Contracts/Contract"
domain: "Analysis Model"
element_id: 1833157
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 FinancialParameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v8.0/Contracts/Contract

## 📝 Notes

Financial parameters of the Contract

## 🔗 Connections (5)

- → Usage: [[ChargedItem (Class 1833159)]]
- ← Generalization: [[celFinancialParameter (Class 1833162)]]
- → Aggregation: [[Contract (Class 1833158)]]
- → Usage: [[{ADD}PresentedInterestRate]]
- ← Generalization: [[relFinancialParameter (Class 1833156)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cashPayment | money |  |
| downPayment | money |  |
| chargedItems | ChargedItem |  |
| {DEL}presentedInterestRate | decimal |  |
| annualInterestRate | decimal |  |
| {ADD}presentedInterestRates | {ADD}PresentedInterestRate |  |
