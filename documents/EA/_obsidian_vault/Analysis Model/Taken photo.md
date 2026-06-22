---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID"
domain: "Analysis Model"
element_id: 1604556
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Taken photo

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID

## 📝 Notes

System checks if taken photo matches the attribute setting in application form.

	
- System evaluates if taken photo required autofocus
	
- System evaluates setting of document attributes would require autofocus
	
- If step 2 requires autofocus but step 1 does not, system displays error MSG_RETAKE_PHOTO_REQUIRED. Otherwise validation has passed.

## 🔗 Connections (1)

- ← Dependency: [[KTP type (Action 1604562)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
