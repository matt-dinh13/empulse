---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model"
domain: "Analysis Model"
element_id: 1879307
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Generating contract supplement code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model

## 📝 Notes

Input:
- Contract

Algorithm:
System returns a string in form 
     Contract.Code + count of related ContractSupplement (no matter statuses and types of the contract supplements) completed with zeros from left on 4 digits

Example:
- Contract number = 4023456789
- Count of ChangeCreditLimitContractSupplement = 2
- Output string = 40234567890002

Output:
- Code of Contract Supplement

## 🔗 Connections (1)

- ← Dependency: [[Create contract supplement rule (Requirement 1879308)]]

## 📊 Appears In (1 diagrams)

- Use Case: Change credit limit manually
