---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules"
domain: "Analysis Model"
element_id: 1536030
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create contract sale record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules

## 📝 Notes

This business rule describes creating record in Contract Sale from imported sold contract file .

Input:

	
- SoldContractFile


Algorithm:
System creates a record in the Contract Sale for appropriate Contract (Contract Sale -> Contract.code == SoldContractsFile.contractNumber):

	
- Total debt = SoldContractsFile.debtSum
	
- Sale date = SoldContractsFile.saleDate
	
- Sale price = SoldContractsFile.salePrice
	
- Credit Owner.code = SoldContractsFile.agencyNumber
	
- Credit Owner.name = SoldContractsFile.agencyName

## 🔗 Connections (1)

- ← Dependency: [[01.802 Process sold contracts file (UseCase 1839172)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Import sold contracts file
