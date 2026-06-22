---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"
domain: "Requirements Model"
element_id: 1821402
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 ContractPartyRole

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

## 📝 Notes

Object containing the data of some particular party directly related to the application/contract.

LDM source:
Only data of following application/contract-to-party relationship types (Contract->Relationship.Role_Type / ApplicationDetailRestTO.relationships.type) are used for filling the individual subordinate elements:

	
- JOINT_LENDER
	
- LENDER

## 🔗 Connections (2)

- → Dependency «use»: [[PartyAttributeType]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| partyRoleCode | string |  |
| partyCode | string |  |
| partyName | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
| attribute | PartyAttributeType |  |
