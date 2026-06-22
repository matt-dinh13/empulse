---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records"
domain: "Requirements Model"
element_id: 1457694
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Use ExternalID as identification of Communication record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records

## 📝 Notes

ExternalID already exists, it should be used by new TCK,

1/ migration of current related object COMMUNICATION_RECORD - update value to new ExternalID
2/ update function for showing of communication detail to find record by provided ExternalID instead of ID
3/ check all usage of CommunicationRecord.ID field and replace by CommunicationRecord.ExternalID  (contract search, reg. queue...)

New TCK should be used for all countries

## 📊 Appears In (1 diagrams)

- Custom: CBL-5351 (CLM-1840) Archiving BSL Communication records
