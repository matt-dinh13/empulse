---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4294 (CLM-1601) Securitization: Split of ownership of contract"
domain: "Requirements Model"
element_id: 1328024
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - update of the securitization process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4294 (CLM-1601) Securitization: Split of ownership of contract

## 📝 Notes

The goal is to use provided OwnershipPercentage for the new owner.
Steps:
- store new attributes from file to the Securitization LDM
- identify previous owner (defined in the file, in other case HC is used)
- check if current OwnershipPercentage of the previous owner >= OwnershipPercentage for the new owner
- update current records for previous contract owner (ValidTo)
- calculate and insert new record for previous owner if new OwnershipPercentage >0 (ValidFrom) 
- calculate and insert new record for new owner (ValidFrom)

## 🔗 Connections (2)

- → Dependency: [[01.860 Process contract securitization file]]
- → Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-4294 (CLM-1601) Securitization: Split of ownership of contract
