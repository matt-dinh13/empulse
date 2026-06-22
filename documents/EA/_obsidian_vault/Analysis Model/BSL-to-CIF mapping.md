---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules"
domain: "Analysis Model"
element_id: 1657188
diagrams: 6
connections: 11
tags:
  - requirement
  - analysis-model
---

# 📋 BSL-to-CIF mapping

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules

## 📝 Notes

The interface is described in diagrams customerPersonCreate.
When the message customerPersonCreate is created, the value in the header hci_biz_businessId is filled with Contract.Code.

Statuses of objects are set according to rule Status of client data.

Only documents of types with flags ID_DOC and PERSON are sent to CIF.

See country related data conversions:
- BSL-to-CIF data conversion - KZ
- BSL-to-CIF data conversion - PH
- BSL-to-CIF data conversion - VN

## 🔗 Connections (9)

- → Dependency: [[Status of client data]]
- → Dependency: [[BSL-to-CIF data conversion - PH]]
- → Dependency: [[BSL-to-CIF data conversion - VN]]
- → Dependency: [[BSL-to-CIF data conversion - KZ]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- ← Dependency: [[{MOD}06.030 Show Client Data]]
- ← Dependency: [[{MOD}06.040 Search Clients]]
- ← Dependency: [[06.021 Update client data from contract]]
- ← Dependency: [[06.020 Update Client Data]]

## 📊 Appears In (6 diagrams)

- Custom: Business Ruless
- Custom: CBL-6545 (CLM-2086) New maintenance function for Change client on contract
- Custom: REQ #1 - Migrate full person update to PIF REST
- Use Case: Client identification
- Use Case: Client management
- Use Case: Client update
