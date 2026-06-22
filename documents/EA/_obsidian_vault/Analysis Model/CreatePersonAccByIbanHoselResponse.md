---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PersonAccountService"
domain: "Analysis Model"
element_id: 1473461
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreatePersonAccByIbanHoselResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PersonAccountService

## 🔗 Connections (3)

- → Dependency: [[ResultCode (Enumeration 1473466)]]
- → Dependency: [[ErrorCode]]
- ← Dependency: [[PersonAccountService (Interface 1473469)]]

## 📊 Appears In (1 diagrams)

- Logical: PersonAccountService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ResultCode |  |
| errorCode | ErrorCode |  |
| errorMessage | string |  |
