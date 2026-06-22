---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"
domain: "Requirements Model"
element_id: 1821439
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 PartyAttributeType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

## 📝 Notes

Object containing the data of some particular application/contract-to-party relationship attribute.

LDM source:

	
- //When processed in BSL.
- .key = Contract->Relationship->Relationship_Attribute.Type
- .value = Contract->Relationship->Relationship_Attribute.Value


	
- //When processed in DSM.
- .key = ApplicationDetailRestTO.relationships.attributes.key- .value = ApplicationDetailRestTO.relationships.attributes.value

## 🔗 Connections (2)

- → Generalization: [[{MOD}KeyAndValueType]]
- ← Dependency «use»: [[ContractPartyRole]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_CONTRACT_DATA - contract data
