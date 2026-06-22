---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan"
domain: "Requirements Model"
element_id: 1851674
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Check for an active insurance existence

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan

## 📝 Notes

The rule defines a check for existence of an active {DEL CSI-3652}INSLI (life insurance){/DEL}insurance contract. If an insurance contract exists, the rule returns {ADD CSI-3652}serviceTypesAlreadyOnContract list{/ADD}{DEL CSI-3652}TRUE{/DEL}.

Input:

	
- ContractCode


Output:

	
- {ADD CSI-3652}serviceTypesAlreadyOnContract list{/ADD}{DEL CSI-3652}boolean{/DEL}


Steps:

	
- System gets all active InsuranceServices[code, version] from Contract Service related to the Contract (i.e. Get Service Code and Service Version from Contract Service with Contract Insurance Service relation where Status in (NEW, ACTIVE)
If no InsuranceService is found, then {ADD CSI-3652}empty serviceTypesAlreadyOnContract list{/ADD}{DEL CSI-3652}FALSE{/DEL} is returned and the rule ends.
	
- System takes the InsuranceServices[code, version] found in the previous step and gets their ServiceDefinitions by Get Service definition from Services with InsuranceServices[serviceCode, serviceVersion] as parameters;  If no ServiceDefinition is found, then {ADD CSI-3652}empty serviceTypesAlreadyOnContract list{/ADD}{DEL CSI-3652}FALSE{/DEL} is returned and the rule ends
	
- System gets all active Insurance Contracts where{DEL CSI-3652} Insurance Type = 'INSLI' and{/DEL} Status in (N, S, A) and Loan Contract Code = ContractCode and Service Code = ServiceDefinition.code and Service Version = ServiceDefinition.versionNumber and ServiceDefinition.Mandatory On Contract is NULL or FALSE
	
- If an Insurance Contract is found,{ADD CSI-3652} serviceTypesAlreadyOnContract list of insuranceTypes of all Insurance Contracts found{/ADD}{DEL CSI-3652}TRUE{/DEL} is returned, else {ADD CSI-3652}empty serviceTypesAlreadyOnContract list{/ADD}{DEL CSI-3652}FALSE{/DEL}

## 🔗 Connections (4)

- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- ← Dependency: [[08.340 Show Insurance offers for loan contract (UseCase 1879847)]]
- ← Dependency: [[{MOD}08.349 Generate Insurance offer preview]]
- ← Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]

## 📊 Appears In (4 diagrams)

- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
