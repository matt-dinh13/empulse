---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1520195
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-2438 CBL-7585 Use REST API in communication with CIF

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

Goal of this task is to:

	
- Replace of the current SOAP WS (PartyWS) exposed by CIF with new REST API
	
- Implement our own mapper and API implementation separately from LOR and other BSL teams' parts
	
- Start filling the new business attributes introduced in the REST API


Reason:
- Future separation of LOR and CLM; each module will use own calling points.
- Sending some business attributes in the business part but not in the techical headers.

## 🔗 Connections (2)

- ← Generalization: [[REQ#2 - Feature flag and switches]]
- ← Generalization: [[REQ#1 Mappings]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7585 (CLM-2727) Use REST API in communication with CIF
