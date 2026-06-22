---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 1163445
diagrams: 1
connections: 7
tags:
  - interface
  - analysis-model
---

# 🔶 ResultAutomaticImportIncomingPaymentsWS

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

Web service provided by external system for receive result of automatic import of incoming payments from an external system into BSL. 
Web service provided by external system for receive result of automatic import of DDM confirmations result from an external system into BSL. 
Web service provided by external system for receive result of automatic import of DD statements from an external system into BSL. 
Web service provided by external system for receive result of automatic import of DD confirmations from an external system into BSL.

## 🔗 Connections (7)

- → Dependency «use»: [[IncomingPaymentsResult (Class 543345)]]
- → Dependency «use»: [[DDMconfirmationResult (Class 543336)]]
- → Dependency «use»: [[DDstatementsResult]]
- → Dependency «use»: [[DDstatementsConfirmationResult]]
- ← Dependency: [[05.251 Automatic Import DD statements (UseCase 1863205)]]
- ← Dependency: [[05.261 Automatic Import DD confirmations (UseCase 1863190)]]
- ← Dependency: [[01.585 Automatic import DDM confirmation result (UseCase 1876221)]]

## 📊 Appears In (1 diagrams)

- Logical: Automatic Import response
