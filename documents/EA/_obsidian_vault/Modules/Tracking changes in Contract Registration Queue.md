---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Common/Business Rules"
domain: "Modules"
element_id: 1801767
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Tracking changes in Contract Registration Queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Common/Business Rules

## 📝 Notes

This algorithm describes record of changes in the Contract Registration Queue entity.
Input parameters:

	
- Current_Record (NULL as default - a new record is created)
	
- Assign_To (user who is assigned to the contract; NULL = no user assigned)
	
- Queue_Status (status of the contract processing in the queue)


	
- Archive (0 as default - not archived; 1 - the record is archived and disabled for processing)
	
- Business_Category (business category of contract) - optional


Steps:
If Current_Record_ID is NULL, insert a new record of the contract in Contract Registration Queue (CRQ):

	
- Assigned To = Assign_To
	
- Created By = the current user
	
- Create Date = the current date and time
	
- Status = Queue_Status
	
- Archive = Archive
	
- Business Category = Business_Category

If Current_Record_ID is not NULL, update the current record of the contract in Contract Registration Queue (CRQ):

	
- Assigned To = Assign_To
	
- Updated By = the current user
	
- Update Date = the current date and time
	
- Status = Queue_Status
	
- Archive = Archive


A new record in Registration Task Transition:

	
- Assigned To, Created By, Create Date, Status = the same data from Contract Registration Queue
	
- reference to Registration Status Transition (the last status transition into 'RR' status)


A relation between Contract Registration Queue and Registration Task Transition

## 🔗 Connections (1)

- ← Dependency: [[Finish Contract based on Account Balance notification]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contracts finishing
