---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 1163447
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ReceiveResultOfImportCommunicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

ReceiveResultOfImportCommunicationRequest to notify external system that Communication file was processed.

## 🔗 Connections (2)

- → Dependency: [[CommunicationListResult (Class 1178649)]]
- ← Dependency «use»: [[ResultAutomaticCommunicationListImportWS]]

## 📊 Appears In (1 diagrams)

- Logical: Automatic Import response

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | CommunicatioListResult |  |
