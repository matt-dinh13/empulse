---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3093 (CLM-1475) Modification of Contract Direct Debit Service for SI info"
domain: "Requirements Model"
element_id: 1318939
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Create contract DDM service modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3093 (CLM-1475) Modification of Contract Direct Debit Service for SI info

## 📝 Notes

Due to changes in the DirectDebitService methods, it is needed to change some services in the ContractPaymentChannelManagementWS respectively as follow:

	
- Add new ddmType and externalDDProvider attributes and remove eMandat attribute in the DDMInputDataDto structure used for calling DirectDebitService.CreateDDM and UpdateDDM service in the UC 01.776 Create contract DDM service. and UC 01.777 Update contract DDM service


	
- Change DDMInfoBaseDto structure with a new version (i.e. new ddmType added and eMandat attribute removed) which is used in GetContractDDMList - see UC 01.779 Get contract DDM service

## 📊 Appears In (1 diagrams)

- Custom: CBL-3093 (CLM-1475) Modification of Contract Direct Debit Service for SI info
