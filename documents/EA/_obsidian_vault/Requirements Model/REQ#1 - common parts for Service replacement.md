---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8246 (CLM-2557) Implementation of API + UI for service replacement"
domain: "Requirements Model"
element_id: 1499075
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - common parts for Service replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8246 (CLM-2557) Implementation of API + UI for service replacement

## 📝 Notes

- new Contract Service Status Reason = SERVICE_REPLACED_ON_CLIENT_REQUEST
- new ContractServiceReplacedNotification as an extension of ContractServiceNotification
- new system event ContractServiceReplacedSE which generates ContractServiceReplacedNotification

- update Contract Service History table structure to keep all new fields (ServiceCode+Version and TariffCode+Version)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8246 (CLM-2557) Implementation of API + UI for service replacement
