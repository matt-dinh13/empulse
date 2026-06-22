---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623724
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 HomeSIS integration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

When the system HomeSIS will be deployed along with the system BSL, the following basic access rights cannot be assigned to any user (i.e. the related use cases will be inaccessible for any user):
Salesroom

	
- 09.220 Create salesroom
	
- 09.230 Update salesroom
	
- 09.260 Change salesroom status manually. The access rights is also for use cases:
- 09.260 Activate salesroom manually
- 09.260 Block salesroom manually
- 09.260 Close salesroom manually
	
- 09.215 Set payment status for Salesroom manually
	
- 09.350 Move salesroom


	
- 09.242 Assign/Unassign Commodity to Salesroom
	
- 09.290 Assign Sales Agent
	
- 09.295 Remove sales agent from salesroom
	
- 09.240 Show salesroom - Extended properties tab
	
- 09.240 Show salesroom - Address tab
	
- 09.240 Show salesroom - Commodity tab
	
- 09.240 Show salesroom - Contact information tab
	
- 09.240 Show salesroom - Contact person tab
	
- 09.240 Show salesroom - Notice tab
	
- 09.240 Show salesroom - Sales agent tab
	
- 09.240 Show salesrooms - Bank account tab

Address

	
- 09.090 Create address
	
- 09.100 Update address
	
- 09.110 Remove address
	
- 09.310 Show address

Bank account

	
- 09.120 Create bank account
	
- 09.130 Update bank account
	
- 09.140 Remove bank account
	
- 09.320 Show bank account

Contact person

	
- 09.180 Create contact person
	
- 09.190 Update contact person
	
- 09.200 Remove contact person
	
- 09.340 Show contact person

Notice

	
- 09.205 Create notice
	
- 09.206 Remove notice

Contact information

	
- 09.150 Create contact information
	
- 09.160 Update contact information
	
- 09.170 Remove contact information
	
- 09.330 Show contact information

Partner

	
- 09.010 Create partner
	
- 09.020 Update partner
	
- 09.040 Change status of partner manually. The access rights is also for use cases:
- 09.040 Activate Partner manually
- 09.040 Block Partner manually
- 09.040 Close Partner manually


	
- 09.210 Set payment status for Partner manually


	
- 09.030 Show partner - Address tab
	
- 09.030 Show partner - Bank account tab
	
- 09.030 Show partner - Contact information tab
	
- 09.030 Show partner - Contact person tab
	
- 09.030 Show partner - Extended properties tab
	
- 09.030 Show partner - Notice tab
	
- 09.030 Show partner - Salesroom tab


Note that:

	
- other business rules, e.g. rules about access rights and displaying buttons, remain valid (this affects e.g. icons in main menu).


Next, when the system HomeSIS will be deployed along with the system BSL, the following GUI restrictions will be applied:

	
- On the Detail of Salesroom screen only the following tabs will be visible:
- Credit products


	
- On the Detail of Partner screen no tabs will be visible.

## 🔗 Connections (2)

- ← Dependency: [[Detail of Partner]]
- ← Dependency: [[Detail of Salesroom (Screen 1572234)]]

## 📊 Appears In (1 diagrams)

- Custom: General business rules
