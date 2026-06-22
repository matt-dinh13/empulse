---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9162 Disabling client's primary mobile number in ORBP"
domain: "Requirements Model"
element_id: 1764294
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9606 Disabling client's primary mobile number in ORBP

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9162 Disabling client's primary mobile number in ORBP

## 📝 Notes

As a system, I will get client's phone number from PIF.

Proposed solution
 

	
- when system open RBP window, it calls PIF to get current PRIMARY_PHONE (own switch)


	
- field phone number will be editable only if user has access right UC01_143_UpdatePhone 

Note: scenario to check - no phone number returned from PIF, but user does not have access right UC01_143_UpdatePhone.

## 🔗 Connections (1)

- → Realisation: [[LOR-9162 Disabling client's primary mobile number in ORBP]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9162 Disabling client's primary mobile number in ORBP
