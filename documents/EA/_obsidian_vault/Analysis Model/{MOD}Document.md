---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SetDocumentFile_v3"
domain: "Analysis Model"
element_id: 1560761
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SetDocumentFile_v3

## 📝 Notes

Documents with printouts in external storage (Cabinet) related to

	
- Contracts


	
- Services
	
- Service Requests

## 🔗 Connections (2)

- ← Dependency: [[SetDocumentFileResponse]]
- → Dependency: [[{ADD}DmsFile (Class 1560759)]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}Set Document File v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}documentId | string |  |
| contractNumber | string |  |
| relatedToType | string |  |
| documentType | string |  |
| {ADD}files | DmsFile |  |
| {DEL}documentFile | DocumentFile |  |
