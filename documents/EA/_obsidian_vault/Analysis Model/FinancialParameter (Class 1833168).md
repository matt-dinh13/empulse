---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract"
domain: "Analysis Model"
element_id: 1833168
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 FinancialParameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract

## 📝 Notes

Financial parameters of the Contract

## 🔗 Connections (4)

- → Usage: [[ChargedItem (Class 1833170)]]
- ← Generalization: [[celFinancialParameter (Class 1833171)]]
- ← Generalization: [[relFinancialParameter (Class 1833169)]]
- → Aggregation: [[Contract (Class 1833167)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cashPayment | money |  |
| downPayment | money |  |
| chargedItems | ChargedItem |  |
| presentedInterestRate | decimal |  |
| annualInterestRate | decimal |  |
