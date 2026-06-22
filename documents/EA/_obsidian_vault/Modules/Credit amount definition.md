---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1878843
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Credit amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Credit amount (CA) defines the amount of money that is presented as lend to the client, it is based on provided credit amount (PCA, see Provided Credit Amount definition). 

For ProductType = CEL:

	
- For loans with initial transaction type = POS:
CA = PCA
	
- For loans with initial transaction type = CASH:
CA = PCA


For ProductType = SAI:
CA = PCA

For ProductType = REL:
CA = 0.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[Offer Financial Parameter]]
- → Dependency: [[Provided Credit Amount definition]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Financial calculations
