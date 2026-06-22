---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-865 (CBL-1142) IN Paperless REQ10 - Contract registration process"
domain: "Requirements Model"
element_id: 1272123
diagrams: 1
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Modify the current Registration queue to usage by IN business as follow:

- definition of business rules for assignment of contracts to operators
- supervisor will have the registration queue overview categorized by above mentioned rules

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-865 (CBL-1142) IN Paperless REQ10 - Contract registration process

## 📝 Notes

In BSL there is currently implemented functionality Registration queue. Our business case is to use this functionality for our paperless contract registration process. The process is expected to be following:

	
- Registration supervisor sets rules for assignment of contracts for registration to registration operators according to following rules:
	
- Business category of contract (CD, TW, CLX, OCL) – enumeration has to be extensible
	
- Business category has to be possible to set up on product level and should be available in product web service as well
	
- During contract origination process it has to be linked to contract entity due to performance reasons for registration queue
	
- Opened registration mistake on contract (non-closed, non-cancelled) – YES/NO 
	
- Should be currently implemented






	
- Registration operator opens registration queue where he has list of contracts on which he is able to work on. Registration queue should be set up in following way:
	
- Only signed and non-registered contracts are presented in registration queue
	
- List of contracts is ordered by signature date ascendant
	
- Assignment of contracts to eligible operators (based on rules described above) has to be automatic – operator should not be able to choose on which contract he wants to work on


	
- Supervisor has to be able to see in Queue monitoring how many contracts for registrations are in the registration queue based on business category

As list of business category enumeration has to be made extensible it has to be made sure that addition of new business category will be only configuration and will not require change in code

## 🔗 Connections (9)

- ← Generalization: [[REQ#4 - System displays contracts in 'Registration queue' assigned to user - 'Registration operator']]
- ← Generalization: [[REQ#1 - System orders contracts in 'Registration queue' by the contract signature date ascendant (FI]]
- ← Generalization: [[REQ#8 - System enables 'Registration supervisors' to assign contracts to 'Registration operators' ac]]
- ← Generalization: [[REQ#5 - System automatically assigns contract in 'Registration queue' to eligible 'Registration oper]]
- ← Generalization: [[REQ#3 - System supports assignment of unregistered contracts to registration operators according to ]]
- ← Generalization: [[REQ#9 - System distingushes between contracts in 'Registration queue' based on business category]]
- ← Generalization: [[REQ#6 - System displays how many contracts are to be registered (left in 'Registration queue') based]]
- ← Generalization: [[REQ#2 - System fills 'Registration queue' only with contracts with status 'Signed' or 'Approved' or ]]
- ← Generalization: [[REQ#7 - System enables 'Registration supervisors' to assign contracts to 'Registration operators' ac]]

## 📊 Appears In (1 diagrams)

- Custom: CLM-865 (CBL-1142) IN Paperless REQ10 - Contract registration process
