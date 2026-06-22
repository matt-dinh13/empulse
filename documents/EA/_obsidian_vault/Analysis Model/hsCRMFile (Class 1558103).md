---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS"
domain: "Analysis Model"
element_id: 1558103
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 hsCRMFile

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS

## 📝 Notes

List of Communication file XML structure. It serves to import communication events and its records (i.e. information about communication with clients) into the system

## 🔗 Connections (2)

- → Dependency: [[communicationEventType]]
- ← Dependency «use»: [[AutomaticCommunicationListImportRequest]]

## 📊 Appears In (2 diagrams)

- Logical: AutomaticCommunicationListImportWS
- Logical: CRMFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| communicationEvent | communicationEventType |  |
