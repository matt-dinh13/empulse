---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Business Rules"
domain: "Analysis Model"
element_id: 1351506
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Tracking changes in Application Filling Queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Business Rules

## 📝 Notes

This algorithm describes tracking changes of the Application Filling Queue entity.
Input parameters:

	
- Current_Record - NULL as default(a new record is created)
	
- Assign_To - user who is assigned to the contract (NULL = no user assigned)
	
- Status - status of the contract processing in the queue
	
- Description - description of the status
	
- Filling_Group - group (of users) that can continue with application filling
	
- Filling_Channel (optional) - channel to be used for application filling
	
- Modification - type of modification


	
- Archive (0 as default - not archived; 1 - the record is archived and disabled for processing)


Steps:
1a) If Current_Record_ID is NULL, insert a new record in Application Filling Queue:

	
- Assigned To = Assign_To
	
- Created By = the current user
	
- Create Date = the current date and time
	
- Status = Status
	
- Description = Description
	
- Filling Group = Filling_Group
	
- Filling Channel = Filling_Channel
	
- Archive = Archive

1b) If Current_Record_ID is not NULL, update the current record of the contract in Application Filling Queue:

	
- Assigned To = Assign_To
	
- Updated By = the current user
	
- Update Date = the current date and time
	
- Status = Status
	
- Description = Description
	
- Filling Group = Filling_Group
	
- Filling Channel = Filling_Channel
	
- Archive = Archive


2) A new record in Application Filling Transition:

	
- Assigned To = Assign_To
	
- Created By = the current user
	
- Create Date = the current date and time
	
- Status = Status
	
- Description = Description
	
- Filling Group = Filling_Group
	
- Filling Channel = Filling_Channel
	
- Modification Type = Modification

and relation between Application Filling Queue and Application Filling Transition

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
