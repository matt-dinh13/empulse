---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary identification documents - product AF"
domain: "Analysis Model"
element_id: 1822840
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Mandatory documents when product not selected

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary identification documents - product AF

## 📝 Notes

When product is not selected, system selects document types with flag:

	
- CUST_IDENT_AUTO_CREATE - automatically generated in AF
	
- CUST_IDENT_FOR_SELECTION - available in Document type combobox for addition by user


As these document are not assigned to any document container, photo acquiring method is set as follows:

	
- document type with flag 'PERSON' and 'PHOTO' = DefaultAFClientPhotoAcquiringMethod
	
- other document types = DefaultAFDocumentPhotoAcquiringMethod


User has to add at least X (based on global parameter ValidateMinCountOfPrimDoc(BL_VALIDATE_MIN_PRIM_IDENT_CNT)) documents. Otherwise MSG_MIN_PRIMARY_DOCUMENTS_COUNT appears.

## 🔗 Connections (1)

- ← Dependency: [[Primary identification documents - product AF (GUIElement 1736191)]]

## 📊 Appears In (2 diagrams)

- Custom: Primary identification documents - product AF
- Custom: Product business rules
