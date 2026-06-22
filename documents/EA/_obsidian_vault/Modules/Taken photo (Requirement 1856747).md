---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/ID"
domain: "Modules"
element_id: 1856747
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Taken photo

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/ID

## 📝 Notes

System checks if taken photo matches the attribute setting in application form.

	
- System evaluates if taken photo required autofocus
	
- System evaluates setting of document attributes would require autofocus
	
- If step 2 requires autofocus but step 1 does not, system displays error MSG_RETAKE_PHOTO_REQUIRED. Otherwise validation has passed.

## 🔗 Connections (1)

- ← Dependency: [[KTP type (Action 1856750)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
