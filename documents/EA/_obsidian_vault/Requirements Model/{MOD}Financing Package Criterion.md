---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input"
domain: "Requirements Model"
element_id: 1865388
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Financing Package Criterion

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input

## 📝 Notes

Definition of criterion for selection of the Financing Package.
For types representing reference to a code list (e.g. PURPOSE, TRANSACTION_TYPE, COMMODITY_TYPE) more criterions of the same type can be defined and applied with logical operator OR.
If a type of criterion is not assigned then no restriction of corresponding type is applied (e.g. if COMMODITY_MODEL is not assigned then the package can be used for financing of all models).

## 🔗 Connections (3)

- → Dependency: [[{MOD}Financing Package Criterion Type]]
- → Aggregation: [[Financing Package (Class 1865395)]]
- → Dependency: [[{ADD}Financing Package Criterion Operator Type]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input
- Custom: PCG-5417 CBL-28991 BRIN-630 - Increase length of few parameter values for CLX Utility and Hosel
- Logical: Financing Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | string |  |
| {MOD}Value | string |  |
| {ADD}Operator | string |  |
