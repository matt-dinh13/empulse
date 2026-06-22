---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1833301
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 CreditLimitChangeInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

This entity defines structure for one CLIP or CLDP event.

## 🔗 Connections (1)

- ← Dependency: [[ContractCreditLimitChangeInformation]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceType | string |  |
| originalCreditLimit | MoneyDto |  |
| requestDateTime | dateTime |  |
| requiredCreditLimit | MoneyDto |  |
| result | string |  |
