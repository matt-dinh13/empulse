---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1833036
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 GetContractCreditLimitChangesRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

This entity defines structure for a request sent via the ContractWS interface and GetContractCreditLimitChanges method.

## 🔗 Connections (2)

- → Dependency: [[ContractRequired (Class 1833289)]]
- ← Dependency: [[(MOD)ContractWS]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | ContractRequired |  |
