---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Business Rules"
domain: "Analysis Model"
element_id: 1218231
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Save documentation to Contract package

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Business Rules

## 📝 Notes

- Get Contract_Package_Type from ContractPackageType2ContractStatus based on Contract.Status.
If Contract.Status is not defined in ContractPackageType2ContractStatus display error:
MSG_ContractStatusNotMappedToPackageType
	
- For the application created remotely(Contract.Created remotely) check if the user is logged on a salesroom. If not, MSG_MustLoggedSalesroomForRemoteContract is displayed and use case ends.


Note: This business rule is extracted from UC 01.200 Add to contract package

Saving documentation to contract package :

	
- If a contract package with Contract_Package.Location = 'POS' and Contract_Package.Status ='ACTIVE' and Contract_Package.Type = Contract_Package_Type exists for the given salesroom (salesroom where the user is currently assigned for remotely created contracts) :
- If Contract_Package.Contract_Count >= global parameter MaxContractsInContractPackage, system
   - sets Contract_Package.Status = 'CLOSED'
   - creates a new Contract_Package with Contract_Package->Salesroom = (Contract or Supplement)->Salesroom, Contract_Package.Location = 'POS' and Contract_Package.Status = 'ACTIVE' and Contract_Package.Type = Contract_Package_Type and Contract_Package.Sales_area = (Contract or Supplement).Sales_Area
   - saves the contract to the newly created contract package
- If Contract_Package.Contract_Count = (global parameter MaxContractsInContractPackage – 1), system:
   - saves the contract to the contract package
   - sets Contract_Package.Status = 'CLOSED'
- If Contract_Package.Contract_Count < (global parameter MaxContractsInContractPackage – 1), system:
   - saves the contract/supplement to the contract package
	
- If Contract_Package not found, system:
- creates a contract package with Contract_Package->Salesroom = (Contract or Supplement)->Salesroom or salesroom where the user is currently assigned for remotely created contracts, Contract_Package.Location = 'POS', Contract_Package.Status = 'ACTIVE' and Contract_Package.Type = Contract_Package_Type and Contract_Package.Sales_area = (Contract or Supplement).Sales_Area, and Contract_Package.Code = see Contract package code generation.
- saves the contract/supplement to the newly created contract package.


Contract package code generation:
Each object of Contract package will have 15 digit Contract Code in format: AAAAAAAAASSSSSSS, where: Code
AAAAAAAAA	(Contract or Supplement)->Salesroom.Code (length 9; if code is shorter, add characters 'A' as suffix up to length 9 chars)
SSSSSS		Sequence starting 000001, unique for each salesroom (length 6)

## 🔗 Connections (1)

- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]

## 📊 Appears In (2 diagrams)

- Logical: Business Rules
- Use Case: Contract tracking
