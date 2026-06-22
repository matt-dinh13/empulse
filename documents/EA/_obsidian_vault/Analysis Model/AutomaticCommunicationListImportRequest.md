---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS"
domain: "Analysis Model"
element_id: 1852597
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AutomaticCommunicationListImportRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS

## 📝 Notes

Request for automatic import of file. Request contains file(HsCRMFile), file name and identifier for external system

## 🔗 Connections (2)

- → Dependency «use»: [[hsCRMFile (Class 1558103)]]
- ← Dependency: [[AutomaticCommunicationListImportWS]]

## 📊 Appears In (1 diagrams)

- Logical: AutomaticCommunicationListImportWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| importFileStructure | hsCRMFile |  |
| fileName | string |  |
| externalSystemIdentifier | string |  |
