---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/v2"
domain: "Analysis Model"
element_id: 1856491
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SetInsuranceActive_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/v2

## 📝 Notes

{MOD CSI-1959 /}
Request parameters for PUT method of InsuranceContract for insurance period activation

## 🔗 Connections (2)

- ← Usage: [[InsuranceContract (Interface 1856390)]]
- → Usage: [[{ADD}LoanTransactionParameters]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Contract - Activate Insurance v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceContractCode | string |  |
| reasonNotice | string |  |
| loanTransactionParameters | {ADD}LoanTransactionParameters |  |
