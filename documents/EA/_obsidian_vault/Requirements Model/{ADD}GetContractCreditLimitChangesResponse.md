---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1833041
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}GetContractCreditLimitChangesResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

{ADD CLM-1390 /}
This entity defines structure for a response returned by the ContractWS interface and GetContractCreditLimitChanges method.

## 🔗 Connections (2)

- → Dependency: [[ContractCreditLimitChangeInformation]]
- ← Dependency: [[(MOD)ContractWS]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | ContractCreditLimitChangeInformation |  |
