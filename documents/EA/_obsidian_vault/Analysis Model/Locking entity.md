---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Entity locking mechanism for WS/Business rules"
domain: "Analysis Model"
element_id: 1539703
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Locking entity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Entity locking mechanism for WS/Business rules

## 📝 Notes

When web service implements locking mechanism, it locks related entity for any other web service call that would try to modify such entity.
Locking mechanism can be related to whole web service interface or to required method only.

Process is following:
1. For each method call system creates path, as an identifier of entity that will be blocked. This path is composed of:

	
- name of web service, name of the method, etc.
	
- entity identifier (e.g. contract number)

2. System then checks if this path is already locked (path exists in the list of Locks).

	
- if yes, system returns error response "HTTP 500 - server busy"
	
- if no, system create lock in the list of Locks

3. When method call is finished, system releases the lock from the list of Locks

Each lock also contains identification of a thread ID which is necessary when releasing lock. System allows to release lock only to a thread that created the lock. This is essential to prevent lock release attempt by a different thread.
Automatic job deletes locks older than 1 minute.

There are several implementations:

	
- in memory (default option) - system stores the list of Locks entities in memory of the system
	
- database - system stores the list of Locks in database (custom implementation)
	
- spring - system stores the list of Locks in database (spring implementation)
	
- wls - system stores the list of Locks using Web Logic memory


Note: none - no lock is performed

## 📊 Appears In (1 diagrams)

- Custom: Business rules
