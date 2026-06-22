---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 1148242
diagrams: 4
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Processing SaleContractRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

Input:

	
- ContractSaleRequest


Algorithm:
System creates a record in the comm table SECCREDIT170 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- Evid srv = ContractSaleRequest.contractCode
	
- IdContract = according to the rule Get OBS contract identification, passed is ContractSaleRequest.contractCode
	
- Date sale = ContractSaleRequest.dateSale
	
- Owner = according to the rule Get OBS contract owner, passed is ContractSaleRequest.newOwner
	
- Total debt = ContractSaleRequest.totalDebt
	
- Sale price = ContractSaleRequest.salePrice
	
- Time stamp = current 
	
- Id result190 = null
	
- Result code = null

## 🔗 Connections (5)

- → Dependency: [[REQ#5 Update SECCREDIT170 message]]
- → Dependency: [[REQ#2 Message SECCREDIT170]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- → Dependency: [[Get OBS contract identification]]
- ← Dependency: [[{DEL}SaleContractRequest (Class 1713638)]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Contract - Business rules
- Logical: Contract sale - Communication model
