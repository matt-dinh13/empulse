---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v2.0/Documents (NOT IMPLEMENTED)"
domain: "Analysis Model"
element_id: 1833131
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v2.0/Documents (NOT IMPLEMENTED)

## 📝 Notes

Documents with printouts in external storage (Cabinet) related to

	
- Contracts


	
- Services
	
- Service Requests

## 🔗 Connections (2)

- ← Dependency: [[GetDocumentsResponse]]
- → Dependency: [[{ADD}DmsFile (Class 1833130)]]

## 📊 Appears In (1 diagrams)

- Logical: Documents (NOT IMPLEMENTED)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}documentId | string |  |
| contractNumber | string |  |
| relatedToType | string |  |
| documentType | string |  |
| {ADD}files | DmsFile |  |
| {DEL}documentFile | DocumentFile |  |
