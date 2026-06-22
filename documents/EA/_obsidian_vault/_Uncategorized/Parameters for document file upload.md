---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1878456
diagrams: 0
connections: 5
tags:
  - requirement
  - _uncategorized
---

# 📋 Parameters for document file upload

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

Following parameters are used for the document file upload to Cabinet:

	
- path = /application/<contractCode>/
	
- metaData = {
   - 'CONTRACT' - Contract.Code
   - 'CUID' - Contract->Client_Snapshot->Client.CUID (if available)
   - 'TYPE' - Document->Document_Type.Code
   - 'SYSTEM' - 'BSL'
   - 'PAGESPECIFICATION' - Document->Document_DMS_File.Page_Specification

## 🔗 Connections (5)

- ← Dependency: [[{MOD}06.051 Process customers notification message]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- ← Dependency: [[{DEL}01.176 Create document]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[Generate content of agreement]]
