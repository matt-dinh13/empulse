---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PersonAccountService"
domain: "Analysis Model"
element_id: 1473462
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReserveIbanResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PersonAccountService

## 🔗 Connections (3)

- → Dependency: [[ErrorCode]]
- → Dependency: [[ResultCode (Enumeration 1473466)]]
- ← Dependency: [[PersonAccountService (Interface 1473469)]]

## 📊 Appears In (1 diagrams)

- Logical: PersonAccountService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| IBAN | string |  |
| bankCode | string |  |
| bankBranch | string |  |
| accountNumber | string |  |
| resultCode | ResultCode |  |
| errorCode | ErrorCode |  |
| errorMessage | string |  |
