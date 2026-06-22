---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model"
domain: "Analysis Model"
element_id: 1335460
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get notification messages definitions

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model

## 📝 Notes

Description: 

Input: 
- systemEvent
- notificationType

Output: 
- List of Notification Message Definitions

Steps: 

	
- For each Notification Message Definition where eventType = systemEvent and ActiveYN = true and notificationType = notificationType put Notification Message Definition on List of Notification Message Definitions
	
- Return List of Notification Message Definitions

## 🔗 Connections (1)

- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (1 diagrams)

- Use Case: SMS notification
