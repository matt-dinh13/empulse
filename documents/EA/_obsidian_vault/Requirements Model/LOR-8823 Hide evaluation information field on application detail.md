---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8786 - Remove call to LAP for getting the evaluation information"
domain: "Requirements Model"
element_id: 1726729
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8823 Hide evaluation information field on application detail

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8786 - Remove call to LAP for getting the evaluation information

## 📝 Notes

Proposed solution:
 

	
- switch off calling LAP endpoint when refresh evaluation button is pressed
	
- hide evaluation information field on appication detail
	
- use switch hideEvaluationInformation (if TRUE then the field is hidden and LAP is not called)
	
- switch off step The system clears CONTRACT.SCORING.EVALUATION_DURATION related to paired contract. in receive eval result UCs

## 🔗 Connections (1)

- → Realisation: [[LOR-8786 - Remove call to LAP for getting the evaluation information]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8786 - Remove call to LAP for getting the evaluation information
- Custom: LOR-8823 - Hide evaluation information field on application detail
