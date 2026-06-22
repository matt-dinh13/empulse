---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8786 - Remove call to LAP for getting the evaluation information"
domain: "Requirements Model"
element_id: 1726728
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8797 - Remove call to LAP for getting the evaluation information

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8786 - Remove call to LAP for getting the evaluation information

## 📝 Notes

As Loan Origination module, I need to get rid of the Evaluation duration element from the Application detail screen and the related LAP API call for retrieving its value as such feature is already disabled for quite some time now, so the system's code can be enlightened slightly.

Solution proposal:

	
- Remove the temporary switch hideEvaluationInformation.
	
- Remove the Evaluation duration element from the Application detail screen.
	
- Remove the LAP API call used for retrieving the value for the Evaluation duration element (see the previous point) during the Application detail screen refreshing.

## 🔗 Connections (1)

- → Realisation: [[LOR-8786 - Remove call to LAP for getting the evaluation information]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8786 - Remove call to LAP for getting the evaluation information
- Custom: LOR-8797 - Remove call to LAP for getting the evaluation information
