---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS"
domain: "Analysis Model"
element_id: 1852596
diagrams: 1
connections: 3
tags:
  - interface
  - analysis-model
---

# 🔶 AutomaticCommunicationListImportWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS

## 📝 Notes

Web service used for automatic import of communication list from an external system into BSL. 
https://git.homecredit.net/customers/hcph/hosel/bsl/-/blob/develop/hs-parent/hs-crm/hs-crm-oxm/src/main/wsdl/automaticimport/AutomaticCommunicationListImportWS.wsdl

## 🔗 Connections (3)

- → Dependency «trace»: [[07.061 Automatic import communication list (UseCase 1757635)]]
- → Dependency: [[AutomaticCommunicationListImportRequest]]
- → Dependency «import»: [[AutomaticImportResponse]]

## 📊 Appears In (1 diagrams)

- Logical: AutomaticCommunicationListImportWS
