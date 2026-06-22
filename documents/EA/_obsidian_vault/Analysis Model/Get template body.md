---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model"
domain: "Analysis Model"
element_id: 1335462
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get template body

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model

## 📝 Notes

Description:
Rule describing how to get message template body to be used for construction of message text - replacing body parameters (e.g. ${title}) by its value.

(Note: e.g.: Yth ${title} ${clientName}, trm ksh atas pbyrn Rp${paymentAmount} kontrak ${contractNumber}, sisa ${remainingInstallment} angs lg.Angs yg msh tertunda Rp${remainingDebt} mhn byr hr ini.HomeCredit02129539600)

Input:
- variant
- notificationType

Output: 
- messageBody

Steps: 

	
- Get messageBody from Notification Message Definition -> Notification Message Template.Body where Notification Message Definition.Variant = variant and Notification Type = notificationType
	
- Return messageBody

## 🔗 Connections (1)

- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (1 diagrams)

- Use Case: SMS notification
