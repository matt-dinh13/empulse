---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9296 ApplicationManagementWS: ignore raw data for documents in requests for v21"
domain: "Requirements Model"
element_id: 1822193
diagrams: 7
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 File

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9296 ApplicationManagementWS: ignore raw data for documents in requests for v21

## 📝 Notes

Entity containing the information about some particular file (based on the used context).

## 🔗 Connections (1)

- ← Dependency: [[Files]]

## 📊 Appears In (7 diagrams)

- Custom: LOR-9296 ApplicationManagementWS: ignore raw data for documents in requests for v21
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile
- Logical: Application
- Logical: Document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| content | blob |  |
| externalId | string |  |
| filename | string |  |
| pageSpecificationCode | string |  |
