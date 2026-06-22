---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v10.0/Contract"
domain: "Analysis Model"
element_id: 1833227
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 FinancialParameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v10.0/Contract

## 📝 Notes

Financial parameters of the Contract

## 🔗 Connections (5)

- → Usage: [[PresentedInterestRate (Class 1833230)]]
- → Usage: [[ChargedItem (Class 1833232)]]
- ← Generalization: [[celFinancialParameter]]
- → Aggregation: [[Contract (Class 1833231)]]
- ← Generalization: [[relFinancialParameter]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cashPayment | money |  |
| downPayment | money |  |
| chargedItems | ChargedItem |  |
| annualInterestRate | decimal |  |
| presentedInterestRates | PresentedInterestRate |  |
| {ADD}type | string |  |
