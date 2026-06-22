---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model"
domain: "Modules"
element_id: 1806731
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get contract queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model

## 📝 Notes

Input:
Contract with contract and DDM data
 

	
- System loads all Queues from Queue configurations.
	
- System iterates trough all  queues and checks if contract matches identification conditions of any queue:
- for Product condition is checked that Contract.Product is matching = Identification condition  -> Product data
- for Salesroom is checked that input Contract -> Event is matching Identification condition -> Event data
- In case there are multiple conditions for single condition type (Product or Salesroom) then logicOperator is evaluated too.
	
- If input contract does not match identification conditions of any queue, then rule returns queueCode = Null and registrationReady = Null.
	
- System checks that system fulfills Registration ready conditions for all matched queues:
- for DDM condition is checked input Contract -> DDM data are matching data defined in Registration ready condition - > DDM data
- for event condition is cheked that contract -> Event data are matching data defuned in Registration ready condition -> Event data
- In case there are multiple conditions for single condition type (Product or Salesroom) then logicOperator is evaluated too.
	
- For all queues where is contract matching Registration ready conditions system returns queueCode and registrationReady = True.
For other queues  system returns queueCode and registrationReady = True.
	
- Rule ends

## 🔗 Connections (1)

- ← Dependency: [[Resolve rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Registration orchestration
