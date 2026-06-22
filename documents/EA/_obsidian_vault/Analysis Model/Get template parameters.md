---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model"
domain: "Analysis Model"
element_id: 1335461
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get template parameters

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model

## 📝 Notes

Description: 
Rule describes how system gets parameters of notification message template body. Once list of parameters is obtained from database, system goes through notification message template body looking for those parameters and their values respectively.

Inputs: 
- variant
- notificationType

Outputs: 
- parametersList
(Note: e.g. title, clientName, contractCode, etc.)

Steps:

	
- For each Notification Message Definition -> Notification Message Template -> SMS Template -> SMS Template Body Parameter where Notification Message Definition.Variant = variant and Notification Type = notificationType get Template Body Parameter.Name and put on parametersList
	
- Return parametersList

## 🔗 Connections (1)

- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (1 diagrams)

- Use Case: SMS notification
