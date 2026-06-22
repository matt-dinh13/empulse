---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment"
domain: "Requirements Model"
element_id: 1804062
diagrams: 8
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Business type of loan

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment

## 📝 Notes

This business rule returns business type of loan for given product profile setting (product type, initial transaction type and flag isDebit) using following rules:

	
- If Product type = CEL and initial transaction type = POS business type is Consumer loan
	
- If Product type = CEL and initial transaction type = CASH business type is Cash loan
	
- If Product type = REL and Product_Profile.isDebit = True business type is Debit card loan
	
- If Product type = REL and Product_Profile.isDebit = False business type is Credit card loan
	
- If Product type = SAI and initial transaction type = NDF business type is Standalone insurance
	
- If CLM Feature Flag enableSAIWithInstallments = True and Contract.Type = SAI and Contract.Has Installments = True then business type is  Standalone insurance with installments

## 🔗 Connections (9)

- ← Dependency: [[List of contracts (Object 1565368)]]
- ← Dependency: [[List of contracts (Object 1565368)]]
- ← Dependency: [[Product information]]
- ← Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- ← Dependency: [[01.730 Finish contract manually (UseCase 1852803)]]
- ← Dependency: [[Credit card loan information]]
- ← Dependency: [[03.021 Show REL installment schedule (UseCase 1878580)]]
- ← Dependency: [[{MOD}12.601 Show account detail]]
- ← Dependency: [[03.020 Show installment schedule (UseCase 1879461)]]

## 📊 Appears In (8 diagrams)

- Custom: CLM-3819 - New SAI - Contract finishing
- Custom: Create communication
- Custom: Debt catalogue detail
- Custom: List of contracts - KZ
- Custom: Show account detail
- Custom: Tab-Payment channels
- Use Case: Installment schedule management
- Use Case: Installment Schedule management
