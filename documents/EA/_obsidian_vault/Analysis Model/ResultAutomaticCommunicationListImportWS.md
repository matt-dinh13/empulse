---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 1163443
diagrams: 1
connections: 3
tags:
  - interface
  - analysis-model
---

# 🔶 ResultAutomaticCommunicationListImportWS

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

Web service provided by external system for receive result of automatic import of communication list into BSL.

## 🔗 Connections (3)

- → Abstraction «trace»: [[{MOD}07.060 Process communication list file]]
- → Dependency «use»: [[ReceiveResultOfImportCommunicationRequest]]
- → Dependency «use»: [[ReceiveResultOfImportCommunicationResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Automatic Import response
