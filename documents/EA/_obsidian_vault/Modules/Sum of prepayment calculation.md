---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877461
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Sum of prepayment calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

1. System finds all installment parts on respective contract having:

	
- installment.Active flag = 1
	
- installmentPart.Type = Prepayment
	
- installmentPart.FullyPaidDate is not null (active and not fully paid prepayment installment part is not allowed is not allowed)


2. System sums the InstallmentPart.Amount for all installment parts found by conditions

## 🔗 Connections (1)

- ← Dependency: [[Debt Catalogue]]

## 📊 Appears In (3 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
