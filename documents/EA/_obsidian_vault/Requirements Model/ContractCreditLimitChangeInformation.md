---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1833305
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 ContractCreditLimitChangeInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

This entity defines structure for one contract and list of CLIP and CLDP events.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}GetContractCreditLimitChangesResponse]]
- → Dependency: [[CreditLimitChangeInformation]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditLimitChanges | CreditLimitChangeInformation |  |
| contractCode | string |  |
