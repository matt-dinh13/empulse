---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8744 (CLM-2708) Show Communication List in BSL UI for CUID without any contract"
domain: "Requirements Model"
element_id: 1499770
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update of List of communication and Create communication functionality on Client detail screen to support usage also for CUID withous any contract.

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8744 (CLM-2708) Show Communication List in BSL UI for CUID without any contract

## 📝 Notes

1. List of communication
UC06.030 Show Client Data calls UC07.020 Show list of communication with CUID as input parameter.
In this case it should work even client is not defined in the BSL (CUID is not defined in the Client table).
There is no limit in the EA but it does not work, so some check and update in the code is needed.

2. Create communication
UC07.040 Create communication record manually updated - check for client existence and creation of the client if needed (only if CLM feature flag createCommunicationForNewClient is set)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8744 (CLM-2708) Show Communication List in BSL UI for CUID without any contract
