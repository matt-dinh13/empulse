---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6545 (CLM-2086) New maintenance function for Change client on contract"
domain: "Requirements Model"
element_id: 1452493
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Create new version of Change client on contract functionality

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6545 (CLM-2086) New maintenance function for Change client on contract

## 📝 Notes

Goal of this task is to develop new version of the functionality Change client on contract, which is based on current function, however without following options:
- Assign to a new client
- Synchronize client data with CIF
- Client separation notification - CaBus

New version will support only Change client on contract by assigning on existing client. Client creation and client data update will be managed directly in CIF due to client data validation issue from BSL.

Current write calls to CIF will be removed and read REST API call for checking existing CUID will be added.

New version will be developed next to current version and there will be option to switch between versions with database global parameter.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6545 (CLM-2086) New maintenance function for Change client on contract
