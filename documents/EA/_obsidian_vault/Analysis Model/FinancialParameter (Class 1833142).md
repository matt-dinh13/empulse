---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract"
domain: "Analysis Model"
element_id: 1833142
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 FinancialParameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract

## 📝 Notes

Financial parameters of the Contract

## 🔗 Connections (5)

- → Aggregation: [[Contract (Class 1833145)]]
- → Usage: [[PresentedInterestRate (Class 1833144)]]
- ← Generalization: [[relFinancialParameter (Class 1833141)]]
- → Usage: [[ChargedItem (Class 1833140)]]
- ← Generalization: [[celFinancialParameter (Class 1833137)]]

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
