---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications"
domain: "Analysis Model"
element_id: 1856590
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 switchServiceOperationStatusParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications

## 📝 Notes

Service request specific parameters.
It is filled in for requestType = GRREL, SMSN, ZPROMO, LOYALTY or RELIP, REL Insurances - all the REL services.

## 🔗 Connections (2)

- → Dependency: [[ServiceOperationParameter]]
- ← Dependency «use»: [[RequestParametersChoice (Class 1856587)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance change notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| operationParameters | ServiceOperationParameter |  |
