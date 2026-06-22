---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument"
domain: "Requirements Model"
element_id: 1833149
diagrams: 6
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument

## 📝 Notes

Documents with printouts in external storage (Cabinet) related to

	
- Contracts


	
- Services
	
- Service Requests

## 🔗 Connections (3)

- ← Dependency: [[LoanService (Class 1768073)]]
- ← Aggregation: [[DocumentFile (Class 1833150)]]
- → Aggregation: [[GetDocumentsResponse (Class 1833148)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #4 - Update Document REST API services to use UUID instead of DOCUMENT_REF
- Custom: REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Documents (DEPRECATED)
- Logical: Set Document File v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}documentId | string |  |
| contractNumber | string |  |
| relatedToType | string |  |
| documentType | string |  |
