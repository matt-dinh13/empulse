---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/ConsentManagementWS/ConsentManagementWS"
domain: "Analysis Model"
element_id: 1352321
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SendConsentEnquiryRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/ConsentManagementWS/ConsentManagementWS

## 🔗 Connections (2)

- → Dependency: [[OperatorType (Enumeration 1352324)]]
- ← Dependency: [[ConsentManagementWS (Interface 1352322)]]

## 📊 Appears In (1 diagrams)

- Logical: ConsentManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| phoneNumber | string |  |
| externalId | string |  |
| operator | OperatorType |  |
| system | string |  |
| templateCode | string |  |
| text | string |  |
