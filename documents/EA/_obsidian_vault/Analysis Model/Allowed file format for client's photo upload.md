---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822788
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed file format for client's photo upload

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Allowed file format:

	
- GIF
	
- JPEG
	
- PNG


Newer versions of browsers will not allow selecting other file format in file upload window than specified. Older versions might ignore this restriction and allow selecting any file format.
Therefore validation will be always performed after file upload. If not supported file format is uploaded, message MSG_NOT_SUPPORTED_FILE_FORMAT is shown.

## 🔗 Connections (1)

- ← Dependency: [[Upload photo]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
