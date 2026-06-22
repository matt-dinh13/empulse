---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Access Rights"
domain: "Analysis Model"
element_id: 1405422
diagrams: 3
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}09.502 Get Data For Product Calculator

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Access Rights

## 📝 Notes

{ADD PCG-1745/}
Main purpose of this use case is to return data required for product calculator.

## 🔗 Connections (5)

- → Dependency: [[{MOD}Get allowed Product Types on POS]]
- → Realisation: [[09.502 Get Data For Product Calculator]]
- → Dependency: [[GetDataForProductCalculatorRequest - validation rules]]
- → Dependency: [[Available commodity types for salesroom]]
- ← Dependency: [[{ADD}SalesFeaturesWS]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: {ADD}GetDataForProductCalculator
- Use Case: Sales Features
