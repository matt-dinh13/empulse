---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1822833
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Mystery shopper

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

This algorithm defines how to identify the mystery shopper.

If all following conditions are met, then person is considered as mystery shopper

	
- the value get partyRole.mysteryShopper=TRUE,


	
- no contracts for client on current salesroom are found, i.e. :
- Contract->Client_Snapshot.CUID = partyRole.externalID
- Contract.Mystery_Shopping_Status = false
- Contract->Salesroom = logged salesroom or Contract.Remotely_Created = TRUE

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.160 Search client]]
- ← Dependency: [[Application form construction]]

## 📊 Appears In (2 diagrams)

- Custom: Overview
- Custom: Product business rules
